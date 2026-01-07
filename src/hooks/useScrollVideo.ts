import { useRef, useEffect, useState, useCallback } from "react";

interface UseScrollVideoOptions {
  containerRef: React.RefObject<HTMLElement>;
  videoRef: React.RefObject<HTMLVideoElement>;
  scrollHeight?: number; // How much virtual scroll space (in vh units)
}

interface UseScrollVideoReturn {
  progress: number; // 0-1 representing video progress
  isVideoReady: boolean;
  isComplete: boolean; // Video has reached the end
}

export const useScrollVideo = ({
  containerRef,
  videoRef,
  scrollHeight = 200,
}: UseScrollVideoOptions): UseScrollVideoReturn => {
  const [progress, setProgress] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Handle video metadata loaded - with mobile compatibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force load on mobile
    video.load();

    const handleReady = () => {
      setIsVideoReady(true);
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleReady);
    video.addEventListener("canplay", handleReady);
    video.addEventListener("canplaythrough", handleReady);

    // Check if already loaded
    if (video.readyState >= 1) {
      setIsVideoReady(true);
    }

    // Fallback timeout - assume ready after 3s for mobile
    const timeout = setTimeout(() => {
      if (!isVideoReady && video.readyState >= 1) {
        setIsVideoReady(true);
      }
    }, 3000);

    return () => {
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("canplaythrough", handleReady);
      clearTimeout(timeout);
    };
  }, [videoRef, isVideoReady]);

  // iOS touch unlock - videos need user interaction to be manipulated
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unlockVideo = () => {
      video.play().then(() => {
        video.pause();
        video.currentTime = 0;
      }).catch(() => {
        // Silent catch - expected on some browsers
      });
    };

    document.addEventListener('touchstart', unlockVideo, { once: true });

    return () => {
      document.removeEventListener('touchstart', unlockVideo);
    };
  }, [videoRef]);

  // Scroll handler
  const updateVideoTime = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video || !isVideoReady) {
      ticking.current = false;
      return;
    }

    const rect = container.getBoundingClientRect();
    const containerTop = rect.top;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Calculate scroll progress within the container
    // Progress goes from 0 (container just entered view) to 1 (scrolled through container)
    const scrollableDistance = containerHeight - viewportHeight;
    const scrolled = -containerTop;
    const rawProgress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

    setProgress(rawProgress);
    setIsComplete(rawProgress >= 0.99);

    // Update video currentTime based on scroll progress
    if (video.duration && !isNaN(video.duration)) {
      const targetTime = rawProgress * video.duration;
      // Only update if significant change to prevent jittering
      if (Math.abs(video.currentTime - targetTime) > 0.05) {
        video.currentTime = targetTime;
      }
    }

    ticking.current = false;
  }, [containerRef, videoRef, isVideoReady]);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        requestAnimationFrame(updateVideoTime);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial call
    updateVideoTime();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateVideoTime]);

  return {
    progress,
    isVideoReady,
    isComplete,
  };
};
