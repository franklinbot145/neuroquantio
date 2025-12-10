-- Create table to store user's subscribed AI services
CREATE TABLE public.user_services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    service_name TEXT NOT NULL,
    service_type TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    config JSONB DEFAULT '{}'::jsonb,
    UNIQUE(user_id, service_name)
);

-- Enable RLS
ALTER TABLE public.user_services ENABLE ROW LEVEL SECURITY;

-- Users can view their own services
CREATE POLICY "Users can view their own services"
ON public.user_services
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own services
CREATE POLICY "Users can insert their own services"
ON public.user_services
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own services
CREATE POLICY "Users can update their own services"
ON public.user_services
FOR UPDATE
USING (auth.uid() = user_id);

-- Users can delete their own services
CREATE POLICY "Users can delete their own services"
ON public.user_services
FOR DELETE
USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_services_updated_at
BEFORE UPDATE ON public.user_services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();