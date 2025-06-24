import {
  RocketIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  ShirtIcon,
  UsersIcon,
} from "lucide-react";

export const careerData = {
  hero: {
    title: "Life At Evenica",
    description:
      "We're always interested in people who are ambitious, dedicated and love what they do.",
  },
  culture: {
    title: "Our Culture",
    content: [
      "At Evenica we're always interested in people who are ambitious, dedicated and love what they do. We have a mindset of growth and a culture of collaboration, passion and innovation.",
      "Our goal is to deliver exceptional user experiences within complex technology environments using top talent in a fun and dynamic way. We are excited to foster a workplace that allows people to meet challenges and provides the opportunity to make an impact in a growing business.",
    ],
    image: "/Evenica_Careers.png",
  },
  benefits: {
    title: "Our Benefits",
    items: [
      {
        icon: RocketIcon,
        title: "Flexible Work Options",
        description: "Remote and hybrid work arrangements",
      },
      {
        icon: GraduationCapIcon,
        title: "Career Development",
        description: "Continuous learning opportunities",
      },
      {
        icon: HeartPulseIcon,
        title: "Paid Benefits",
        description: "Comprehensive health coverage",
      },
      {
        icon: ShirtIcon,
        title: "Casual Dress",
        description: "Express your personal style",
      },
      {
        icon: UsersIcon,
        title: "Supportive Team",
        description: "Collaborative environment",
      },
    ],
  },
  jobs: {
    title: "Open Positions",
    openings: [
      {
        title: "Senior E-commerce Developer",
        department: "Engineering",
        type: "Full-time",
        location: "Remote",
      },
      {
        title: "UX/UI Designer",
        department: "Design",
        type: "Full-time",
        location: "Hybrid (Burlington)",
      },
      {
        title: "Digital Commerce Consultant",
        department: "Professional Services",
        type: "Full-time",
        location: "Remote",
      },
    ],
  },
  cta: {
    title: "Not seeing your role?",
    description:
      "We're always looking for talent. Share your resume and we'll contact you about future opportunities.",
    resumeEmail: "Please send your resume to careers@evenica.com",
  },
};
