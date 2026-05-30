-- =============================================
-- PUNITHAN DRONE PILOT - SUPABASE DATABASE SETUP
-- =============================================
-- Run this SQL in your Supabase SQL Editor to create the required tables

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- CONSULTATIONS TABLE
-- =============================================
-- Stores all consultation/booking requests from the website

CREATE TABLE IF NOT EXISTS public.consultations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    service TEXT NOT NULL,
    location TEXT,
    preferred_date DATE,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_consultations_status ON public.consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON public.consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultations_email ON public.consultations(email);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================
-- Enable RLS for secure access

ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert from authenticated and anon users (for public form)
CREATE POLICY "Allow public insert" ON public.consultations
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Policy: Allow select only for authenticated users (admin access)
CREATE POLICY "Allow authenticated select" ON public.consultations
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy: Allow update only for authenticated users (admin access)
CREATE POLICY "Allow authenticated update" ON public.consultations
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- =============================================
-- UPDATED_AT TRIGGER
-- =============================================
-- Automatically update the updated_at timestamp

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_consultations_updated_at ON public.consultations;

CREATE TRIGGER update_consultations_updated_at
    BEFORE UPDATE ON public.consultations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- OPTIONAL: VIEWS FOR DASHBOARD
-- =============================================

-- View: Recent consultations summary
CREATE OR REPLACE VIEW public.recent_consultations AS
SELECT
    id,
    name,
    email,
    phone,
    service,
    status,
    created_at
FROM public.consultations
ORDER BY created_at DESC
LIMIT 50;

-- View: Consultation statistics
CREATE OR REPLACE VIEW public.consultation_stats AS
SELECT
    COUNT(*) as total_consultations,
    COUNT(*) FILTER (WHERE status = 'new') as new_consultations,
    COUNT(*) FILTER (WHERE status = 'contacted') as contacted,
    COUNT(*) FILTER (WHERE status = 'scheduled') as scheduled,
    COUNT(*) FILTER (WHERE status = 'completed') as completed,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as this_week,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as this_month
FROM public.consultations;

-- =============================================
-- GRANT PERMISSIONS
-- =============================================

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT ON public.consultations TO anon;
GRANT ALL ON public.consultations TO authenticated;
GRANT SELECT ON public.recent_consultations TO authenticated;
GRANT SELECT ON public.consultation_stats TO authenticated;

-- =============================================
-- SAMPLE DATA (Optional - for testing)
-- =============================================
-- Uncomment to insert sample data for testing

/*
INSERT INTO public.consultations (name, phone, email, service, location, preferred_date, message, status)
VALUES
    ('Rahul Sharma', '+91 98765 43210', 'rahul@example.com', 'aerial-photography', 'Ahmedabad', '2024-02-15', 'Need aerial shots for my new villa project', 'new'),
    ('Priya Patel', '+91 87654 32109', 'priya@example.com', 'construction-monitoring', 'Gandhinagar', '2024-02-20', 'Monthly progress tracking for high-rise construction', 'contacted'),
    ('Amit Singh', '+91 76543 21098', 'amit@example.com', 'cinematic-videography', 'Surat', '2024-02-25', 'Wedding videography with drone shots', 'scheduled');
*/

-- =============================================
-- SUCCESS MESSAGE
-- =============================================
-- If you see this, the setup was successful!

SELECT 'Database setup completed successfully!' as message;
