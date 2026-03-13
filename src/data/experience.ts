export interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Master Trainer",
    organization: "Hope Innovation Academy",
    location: "Nepal",
    period: "2023 – Present",
    description:
      "Delivered professional development and entrepreneurship training programs supporting young innovators and community leaders.",
    highlights: [
      "Equipped participants with practical entrepreneurial tools and innovation frameworks",
      "Facilitated design thinking workshops for community-led ventures",
      "Mentored young innovators in building sustainable business models",
    ],
  },
  {
    title: "Entrepreneurship Trainer & Ecosystem Builder",
    organization: "Social Innovation Academy (SINA) Network",
    location: "Uganda",
    period: "2020 – Present",
    description:
      "Collaborates with innovation ecosystems that support youth-led social enterprises and community-driven entrepreneurship initiatives.",
    highlights: [
      "Trained cohorts of youth entrepreneurs in venture creation",
      "Developed curriculum for social enterprise development",
      "Strengthened partnerships across the SINA network",
    ],
  },
  {
    title: "Business Development Specialist",
    organization: "Independent Consultant",
    location: "East Africa",
    period: "2018 – Present",
    description:
      "Provides mentorship, training, and business development services for startups, SMEs, entrepreneurship programs, and youth innovation hubs.",
    highlights: [
      "Financial literacy and business model development",
      "Startup incubation and acceleration support",
      "Ecosystem capacity building across multiple countries",
    ],
  },
  {
    title: "Entrepreneurship Program Facilitator",
    organization: "UNICEF / ILO Entrepreneurship Programs",
    location: "Uganda",
    period: "2019 – 2022",
    description:
      "Contributed to entrepreneurship development initiatives focused on youth employment and economic empowerment.",
    highlights: [
      "Delivered training on financial literacy and business planning",
      "Supported youth transition from education to enterprise",
      "Collaborated with international development partners",
    ],
  },
];
