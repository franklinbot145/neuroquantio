import { ImgHTMLAttributes } from 'react';

interface ImageSource {
  srcSet: string;
  type: 'image/avif' | 'image/webp' | 'image/png' | 'image/jpeg';
}

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  /** Primary image source (fallback) */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Intrinsic width of the image */
  width: number;
  /** Intrinsic height of the image */
  height: number;
  /** Priority loading for LCP images - sets fetchpriority="high" and loading="eager" */
  priority?: boolean;
  /** 
   * Sizes attribute for responsive images
   * Example: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   */
  sizes?: string;
  /** Additional image sources for modern formats (AVIF, WebP) */
  sources?: ImageSource[];
  /** Fill container - uses object-fit: cover and 100% dimensions */
  fill?: boolean;
}

/**
 * Next.js-like Image component for Vite/React
 * 
 * Features:
 * - Picture element with AVIF/WebP fallback chain
 * - Proper sizes attribute for responsive images
 * - Priority loading for LCP images (fetchpriority="high")
 * - Native lazy loading for below-fold images
 * - Explicit width/height to prevent CLS
 * - Fill mode for background images
 * 
 * @example
 * // Hero image with priority
 * <Image
 *   src={heroFallback}
 *   sources={[
 *     { srcSet: heroAvif, type: 'image/avif' },
 *     { srcSet: heroWebp, type: 'image/webp' },
 *   ]}
 *   alt="Hero"
 *   width={1920}
 *   height={1080}
 *   sizes="100vw"
 *   priority
 * />
 */
export const Image = ({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  sources = [],
  fill = false,
  className,
  style,
  ...props
}: ImageProps) => {
  const imgStyle = fill
    ? { 
        ...style, 
        position: 'absolute' as const, 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover' as const,
        inset: 0,
      }
    : style;

  const imgProps = {
    src,
    alt,
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    loading: priority ? ('eager' as const) : ('lazy' as const),
    decoding: priority ? ('sync' as const) : ('async' as const),
    sizes,
    className,
    style: imgStyle,
    ...props,
  };

  // Add fetchpriority for LCP images
  if (priority) {
    // @ts-expect-error fetchpriority is not yet in React types
    imgProps.fetchpriority = 'high';
  }

  // If no additional sources, render simple img
  if (sources.length === 0) {
    return <img {...imgProps} />;
  }

  // Render picture element with sources
  return (
    <picture>
      {sources.map((source, index) => (
        <source 
          key={index} 
          srcSet={source.srcSet} 
          type={source.type}
          sizes={sizes}
        />
      ))}
      <img {...imgProps} />
    </picture>
  );
};

export default Image;


