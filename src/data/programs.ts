export interface Program {
  title: string;
  description: string;
  audience: string;
  outcomes: string[];
  icon: string;
}

export const programs: Program[] = [
  {
    title: "Entrepreneurship Bootcamps",
    description:
      "Intensive multi-day programs that take aspiring entrepreneurs from idea to actionable business plan through hands-on exercises, mentorship, and peer learning.",
    audience: "Aspiring entrepreneurs, university students, youth innovators",
    outcomes: [
      "Validated business models",
      "Pitch-ready presentations",
      "Mentor network connections",
    ],
    icon: "Rocket",
  },
  {
    title: "Startup Incubation Programs",
    description:
      "Structured programs providing early-stage startups with resources, mentorship, and support to develop and scale their ventures sustainably.",
    audience: "Early-stage startups, social enterprises",
    outcomes: [
      "Market-ready products",
      "Investment readiness",
      "Sustainable growth strategy",
    ],
    icon: "Lightbulb",
  },
  {
    title: "Youth Innovation Labs",
    description:
      "Creative spaces and programs designed to nurture innovation mindset among young people, combining design thinking with practical problem-solving.",
    audience: "Youth aged 16–30, community leaders",
    outcomes: [
      "Innovation prototypes",
      "Community impact projects",
      "Leadership development",
    ],
    icon: "Users",
  },
  {
    title: "Business Development Workshops",
    description:
      "Practical workshops focused on financial literacy, marketing strategy, operations management, and growth planning for SMEs and entrepreneurs.",
    audience: "SME owners, entrepreneurs, business managers",
    outcomes: [
      "Improved financial management",
      "Growth strategies",
      "Operational efficiency",
    ],
    icon: "TrendingUp",
  },
  {
    title: "Design Thinking Trainings",
    description:
      "Human-centered design workshops that teach participants to identify real problems, ideate solutions, prototype, and iterate based on user feedback.",
    audience: "Innovation teams, NGO staff, educators",
    outcomes: [
      "User-centered solutions",
      "Rapid prototyping skills",
      "Creative problem-solving toolkit",
    ],
    icon: "Palette",
  },
];
