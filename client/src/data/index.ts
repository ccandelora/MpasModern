// Police Department Clients
export const clients = [
  "Boston PD",
  "Cambridge PD",
  "Brookline PD",
  "Somerville PD",
  "Quincy PD",
  "Newton PD",
];

// Team/About Section
export const aboutPoints = [
  {
    id: 1,
    text: "30+ years of combined experience in law enforcement and accreditation",
  },
  {
    id: 2,
    text: "Specialized knowledge of Massachusetts-specific standards and requirements",
  },
  {
    id: 3,
    text: "Proven track record with departments of all sizes across the Commonwealth",
  },
  {
    id: 4,
    text: "Comprehensive approach from initial assessment through maintenance",
  },
];

// Services Section
export const services = [
  {
    id: 1,
    title: "Initial Assessment",
    description: "A comprehensive evaluation of your department's current policies, procedures, and practices compared to accreditation standards.",
    icon: "search",
    points: ["Gap analysis report", "Timeline development", "Resource requirements"],
    imageAlt: "Initial Assessment and Gap Analysis",
  },
  {
    id: 2,
    title: "Policy Development",
    description: "Creation and implementation of compliant policies tailored to your department's specific needs and community context.",
    icon: "file-text",
    points: ["Customized policy drafting", "Implementation guidance", "Regular updates"],
    imageAlt: "Policy Development and Implementation",
  },
  {
    id: 3,
    title: "Staff Training",
    description: "Comprehensive training programs to ensure all personnel understand accreditation requirements and their role in the process.",
    icon: "users",
    points: ["Accreditation manager training", "Department-wide education", "Role-specific instruction"],
    imageAlt: "Staff Training and Education",
  },
  {
    id: 4,
    title: "Documentation Systems",
    description: "Develop efficient systems for organizing, tracking, and maintaining the documentation needed to demonstrate compliance.",
    icon: "folder",
    points: ["Digital solutions", "File organization strategies", "Proof collection templates"],
    imageAlt: "Documentation and Evidence Management",
  },
  {
    id: 5,
    title: "Assessment Preparation",
    description: "Comprehensive preparation for both mock and official assessments to ensure successful outcomes.",
    icon: "clipboard-check",
    points: ["Mock assessments", "Staff interviews", "Facility preparations"],
    imageAlt: "Mock Assessment Preparation",
  },
  {
    id: 6,
    title: "Ongoing Support",
    description: "Long-term partnerships to ensure continued compliance through policy updates, ongoing training, and reaccreditation assistance.",
    icon: "refresh-cw",
    points: ["Maintenance programs", "Standard updates", "Reaccreditation assistance"],
    imageAlt: "Ongoing Compliance Support",
  },
];

// Process Steps
export const processSteps = [
  {
    id: 1,
    title: "Initial Assessment",
    description: "We conduct a thorough evaluation of your department's current policies and procedures, comparing them against accreditation standards to identify gaps.",
    points: ["Complete department review", "Standards comparison", "Gap analysis report"],
    imageAlt: "Initial assessment process",
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "We develop a customized roadmap for achieving accreditation, including timelines, resource allocation, and milestone targets.",
    points: ["Customized implementation plan", "Resource requirements identified", "Timeline development"],
    imageAlt: "Strategic planning session",
  },
  {
    id: 3,
    title: "Policy Development",
    description: "We create or revise policies to align with accreditation standards while reflecting your department's unique needs and community context.",
    points: ["Standard-compliant policy drafting", "Department-specific customization", "Review and revision process"],
    imageAlt: "Policy development",
  },
  {
    id: 4,
    title: "Implementation & Training",
    description: "We assist with policy rollout and provide comprehensive training to ensure all personnel understand and follow the new standards.",
    points: ["Phased implementation strategy", "Department-wide training", "Specialized team development"],
    imageAlt: "Implementation and training",
  },
  {
    id: 5,
    title: "Assessment & Ongoing Support",
    description: "We prepare your department for formal assessment and provide continued support to maintain accreditation status.",
    points: ["Mock assessment preparation", "Formal assessment guidance", "Ongoing compliance maintenance"],
    imageAlt: "Assessment and support",
  },
];

// Benefits
export const benefits = [
  {
    id: 1,
    title: "Enhanced Public Trust",
    description: "Build stronger community relationships through demonstrated commitment to professional standards and accountability.",
    icon: "shield",
  },
  {
    id: 2,
    title: "Reduced Liability",
    description: "Minimize risk through improved policies, better training, and consistent application of professional standards.",
    icon: "scale",
  },
  {
    id: 3,
    title: "Operational Excellence",
    description: "Optimize department operations through systematic review and implementation of industry best practices.",
    icon: "trending-up",
  },
  {
    id: 4,
    title: "Improved Morale",
    description: "Boost officer confidence and pride through participation in a prestigious professional recognition program.",
    icon: "users",
  },
];

// Resources - Updated with functional links
export const resources = [
  {
    id: 1,
    title: "MPAC Standards Overview",
    description: "Learn about mandatory and optional standards for certification and accreditation.",
    href: "https://masspoliceaccred.net/standards/",
    icon: "file-text", // Represents a general info page
  },
  {
    id: 2,
    title: "MPAC Program Document 1 (PDF)", 
    description: "Download official MPAC program documentation.",
    href: "https://public.powerdms.com/MPAC1/documents/2554717",
    icon: "book-open", // Good icon for a manual/document
  },
  {
    id: 3,
    title: "MPAC Program Document 2 (PDF)", 
    description: "Access additional official MPAC documents.",
    href: "https://public.powerdms.com/MPAC1/documents/2647827",
    icon: "clipboard-check", // Could relate to assessment/compliance
  },
  {
    id: 4,
    title: "List of Participating Agencies (PDF)",
    description: "View the current list of agencies participating in MPAC programs.",
    href: "https://masspoliceaccred.net/wp-content/uploads/2024/06/Participating-Agencies-6-26-24-CM.pdf",
    icon: "list-checks", // Good icon for a list
  },
  {
    id: 5,
    title: "MPAC Training & Events",
    description: "Find information on upcoming training sessions, webinars, and conferences.",
    href: "https://masspoliceaccred.net/training-events/",
    icon: "calendar", // Keep calendar icon
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "MPAS guided our department through the entire accreditation process with professionalism and expertise. Their personalized approach and in-depth knowledge of Massachusetts standards made all the difference.",
    author: "Chief Nathan Parker",
    position: "Medford Police Department",
    initials: "NP",
  },
  {
    id: 2,
    quote: "The policy development support we received from MPAS was outstanding. They didn't just help us meet standards, they helped us create policies that truly work for our community and officers.",
    author: "Deputy Chief Sarah Johnson",
    position: "Plymouth Police Department",
    initials: "SJ",
  },
  {
    id: 3,
    quote: "As a smaller department, we were concerned about resource constraints. MPAS worked within our budget and timeline, providing practical solutions that made accreditation achievable for us.",
    author: "Chief Michael Thompson",
    position: "Ipswich Police Department",
    initials: "MT",
  },
];

// Case Study
export const caseStudy = {
  title: "Worcester Police Department Case Study",
  description: "The Worcester Police Department partnered with MPAS to achieve full accreditation status after previous unsuccessful attempts. Through our comprehensive approach, we helped them transform their policies, documentation processes, and internal procedures.",
  stats: [
    { text: "Completed in 18 months", icon: "calendar-check" },
    { text: "52 policies updated", icon: "file-text" },
    { text: "450+ officers trained", icon: "users" },
  ],
  imageAlt: "Worcester Police Department",
};

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: "2023 Changes to Massachusetts Accreditation Standards",
    excerpt: "A comprehensive overview of the latest updates to the Massachusetts Police Accreditation Commission's standards and what they mean for your department.",
    date: "March 15, 2023",
    imageAlt: "2023 Changes to Massachusetts Accreditation Standards",
  },
  {
    id: 2,
    title: "Leveraging Technology in the Accreditation Process",
    excerpt: "Explore how modern digital tools can streamline documentation, improve compliance tracking, and enhance overall efficiency in your accreditation journey.",
    date: "February 27, 2023",
    imageAlt: "Leveraging Technology in the Accreditation Process",
  },
  {
    id: 3,
    title: "Building Public Trust Through Accreditation",
    excerpt: "How achieving accreditation can be leveraged as a powerful tool for improving community relations and demonstrating your commitment to excellence.",
    date: "January 18, 2023",
    imageAlt: "Building Public Trust Through Accreditation",
  },
];

// Contact Information
export const contactInfo = {
  address: "123 Main Street, Suite 405\nBoston, MA 02108",
  phone: "(617) 555-1234",
  email: "info@mpas.boston",
  hours: "Monday - Friday: 8:30 AM - 5:00 PM\nWeekend: By appointment only",
};

// Navigation Links
export const navigationLinks = [
  { text: "About", href: "#about" },
  { text: "Team", href: "#team" },
  { text: "Services", href: "#services" },
  { text: "Process", href: "#process" },
  { text: "Resources", href: "#resources" },
  { text: "Success Stories", href: "#testimonials" },
  { text: "Blog", href: "#blog" }
];

// Footer Links
export const footerServices = [
  { text: "Policy Development", href: "#services" },
  { text: "Accreditation Preparation", href: "#services" },
  { text: "Training & Education", href: "#services" },
  { text: "Compliance Auditing", href: "#services" },
];

// Form Fields
export const contactFormFields = [
  { id: "firstName", label: "First Name", type: "text", required: true, half: true },
  { id: "lastName", label: "Last Name", type: "text", required: true, half: true },
  { id: "email", label: "Email", type: "email", required: true, half: true },
  { id: "phone", label: "Phone", type: "tel", required: false, half: true },
  { id: "department", label: "Department/Agency", type: "text", required: true, half: false },
  { 
    id: "interest", 
    label: "I'm Interested In", 
    type: "select", 
    required: false,
    half: false,
    options: [
      { value: "select", label: "Please Select" },
      { value: "assessment", label: "Initial Assessment" },
      { value: "policy", label: "Policy Development" },
      { value: "training", label: "Staff Training" },
      { value: "documentation", label: "Documentation Systems" },
      { value: "assessment-prep", label: "Assessment Preparation" },
      { value: "ongoing", label: "Ongoing Support" },
      { value: "other", label: "Other Services" },
    ]
  },
  { id: "message", label: "Message", type: "textarea", required: false, half: false },
];

// SEO Data
export const seoData = {
  title: "Massachusetts Police Accreditation Solutions | Expert Consulting & Support",
  description: "MPAS provides specialized police accreditation consulting services to help law enforcement agencies across Massachusetts achieve and maintain accreditation standards.",
  keywords: "police accreditation, Massachusetts police, law enforcement standards, police consulting, MPCCJ, accreditation process",
  og: {
    title: "Massachusetts Police Accreditation Solutions",
    description: "Expert consulting services helping law enforcement agencies achieve and maintain accreditation standards.",
    url: "https://mpas.boston/",
    type: "website",
  }
};
