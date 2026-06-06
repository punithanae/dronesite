import type { Service, Project, Testimonial, Stat, NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "DGCA Certified" },
];

export const SERVICES: Service[] = [
  {
    id: "aerial-photography",
    title: "Aerial Photography",
    description:
      "Stunning high-resolution aerial photographs that capture breathtaking perspectives of landscapes, properties, and events.",
    icon: "Camera",
    features: ["4K/8K Resolution", "RAW Format", "Same-day Delivery"],
  },
  {
    id: "cinematic-videography",
    title: "Cinematic Videography",
    description:
      "Professional cinematic drone footage with smooth movements, color grading, and post-production for films and commercials.",
    icon: "Video",
    features: ["4K 60fps", "Color Grading", "Licensed Music"],
  },
  {
    id: "survey-mapping",
    title: "Survey & Mapping",
    description:
      "Precise aerial surveying and 3D mapping services for land surveys, topographic mapping, and volumetric calculations.",
    icon: "Map",
    features: ["3D Mapping", "Orthomosaic", "Point Clouds"],
  },
  {
    id: "industrial-inspection",
    title: "Industrial Inspection",
    description:
      "Safe and efficient inspection of industrial facilities, power lines, pipelines, and hard-to-reach infrastructure.",
    icon: "Search",
    features: ["Thermal Imaging", "Zoom Inspection", "Detailed Reports"],
  },
  {
    id: "construction-monitoring",
    title: "Construction Monitoring",
    description:
      "Regular progress documentation and monitoring of construction sites with time-lapse videos and progress reports.",
    icon: "Building2",
    features: ["Progress Reports", "Time-lapse", "Site Analysis"],
  },
  {
    id: "real-estate-marketing",
    title: "Real Estate Marketing",
    description:
      "Showcase properties from stunning aerial angles that highlight features, surroundings, and neighborhood amenities.",
    icon: "Home",
    features: ["Virtual Tours", "Property Showcase", "Marketing Ready"],
  },
];

export const INDUSTRIES = [
  { name: "Construction", icon: "HardHat" },
  { name: "Real Estate", icon: "Building" },
  { name: "Infrastructure", icon: "Landmark" },
  { name: "Industrial", icon: "Factory" },
  { name: "Events", icon: "PartyPopper" },
  { name: "Agriculture", icon: "Sprout" },
];

export const WHY_CHOOSE_US = [
  {
    title: "DGCA Licensed & Insured",
    description: "Fully certified and insured drone operations meeting all regulatory requirements.",
    icon: "Shield",
  },
  {
    title: "Latest DJI Equipment",
    description: "State-of-the-art DJI drones with advanced cameras and stabilization systems.",
    icon: "Plane",
  },
  {
    title: "4K/8K Quality Footage",
    description: "Ultra-high resolution imagery that captures every detail with stunning clarity.",
    icon: "Sparkles",
  },
  {
    title: "On-Time Delivery",
    description: "Reliable project delivery within agreed timelines without compromising quality.",
    icon: "Clock",
  },
  {
    title: "Pan India Service",
    description: "Serving clients across India with nationwide coverage and local expertise.",
    icon: "MapPin",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your queries and requirements.",
    icon: "Headphones",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "High Rise Construction",
    category: "Construction",
    image: "/api/placeholder/800/600?text=Construction&bg=374151&color=ffffff",
    location: "Chennai",
  },
  {
    id: "2",
    title: "Luxury Villa Showcase",
    category: "Real Estate",
    image: "/api/placeholder/800/600?text=Real+Estate&bg=1e40af&color=ffffff",
    location: "Kanchipuram",
  },
  {
    id: "3",
    title: "Bridge Infrastructure",
    category: "Infrastructure",
    image: "/api/placeholder/800/600?text=Infrastructure&bg=065f46&color=ffffff",
    location: "Tamil Nadu",
  },
  {
    id: "4",
    title: "Industrial Complex",
    category: "Industrial",
    image: "/api/placeholder/800/600?text=Industrial&bg=7c2d12&color=ffffff",
    location: "SIPCOT",
  },
  {
    id: "5",
    title: "Thermal Power Plant",
    category: "Industrial",
    image: "/api/placeholder/800/600?text=Power+Plant&bg=581c87&color=ffffff",
    location: "Tamil Nadu",
  },
  {
    id: "6",
    title: "Corporate Event",
    category: "Events",
    image: "/api/placeholder/800/600?text=Events&bg=be185d&color=ffffff",
    location: "Chennai",
  },
  {
    id: "7",
    title: "Township Development",
    category: "Real Estate",
    image: "/api/placeholder/800/600?text=Township&bg=0369a1&color=ffffff",
    location: "Coimbatore",
  },
  {
    id: "8",
    title: "Agricultural Survey",
    category: "Agriculture",
    image: "/api/placeholder/800/600?text=Agriculture&bg=166534&color=ffffff",
    location: "Rural Tamil Nadu",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Patel",
    company: "Patel Constructions",
    role: "Managing Director",
    content:
      "Punithan's drone services have been instrumental in monitoring our construction projects. The quality of footage and professional delivery is exceptional. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Shah",
    company: "Elite Properties",
    role: "Marketing Head",
    content:
      "The aerial shots for our luxury property listings have significantly increased buyer interest. The cinematic quality sets our properties apart from the competition.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amit Desai",
    company: "Gujarat Power Corp",
    role: "Operations Manager",
    content:
      "Professional inspection services that saved us time and improved safety. The thermal imaging capability helped identify issues we couldn't see otherwise.",
    rating: 5,
  },
  {
    id: "4",
    name: "Neha Sharma",
    company: "Dream Weddings",
    role: "Event Planner",
    content:
      "Absolutely stunning coverage of our outdoor events. The drone footage added a magical touch that our clients absolutely loved. Will definitely book again!",
    rating: 5,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", url: "https://instagram.com/punithan875", icon: "Instagram" },
  { platform: "YouTube", url: "https://youtube.com/@AeroVista-j3k", icon: "Youtube" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/punithanfly", icon: "Linkedin" },
  { platform: "Facebook", url: "https://facebook.com/punithanfly", icon: "Facebook" },
];

export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 93616 23073",
  email: process.env.NEXT_PUBLIC_EMAIL || "contact@punithanfly.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+919361623073",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Chennai, Tamil Nadu, India",
  dgcaLicense: process.env.NEXT_PUBLIC_DGCA_LICENSE || "DGCA Approved Pilot",
};

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Construction",
  "Real Estate",
  "Infrastructure",
  "Industrial",
  "Events",
  "Agriculture",
];
