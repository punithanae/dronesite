import { z } from "zod";

export const consultationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
  recaptchaToken: z.string().min(1, "reCAPTCHA verification required"),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;

export const serviceOptions = [
  { value: "aerial-photography", label: "Aerial Photography" },
  { value: "cinematic-videography", label: "Cinematic Videography" },
  { value: "survey-mapping", label: "Survey & Mapping" },
  { value: "industrial-inspection", label: "Industrial Inspection" },
  { value: "construction-monitoring", label: "Construction Monitoring" },
  { value: "real-estate-marketing", label: "Real Estate Marketing" },
  { value: "event-coverage", label: "Event Coverage" },
  { value: "agriculture", label: "Agriculture Drone Services" },
  { value: "other", label: "Other" },
] as const;
