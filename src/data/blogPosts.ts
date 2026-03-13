export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building the Next Generation of African Entrepreneurs",
    excerpt:
      "Africa's entrepreneurial potential is vast and largely untapped. Discover how targeted training programs and ecosystem support are nurturing a new wave of innovative founders across the continent.",
    category: "Entrepreneurship",
    date: "February 2025",
    readTime: "6 min read",
  },
  {
    id: "2",
    title: "Why Entrepreneurship Training Must Focus on Practical Skills",
    excerpt:
      "Theory alone doesn't build businesses. Explore why hands-on, experiential learning approaches are essential for developing entrepreneurs who can navigate real-world challenges.",
    category: "Training",
    date: "January 2025",
    readTime: "5 min read",
  },
  {
    id: "3",
    title: "The Role of Innovation Hubs in Youth Empowerment",
    excerpt:
      "Innovation hubs are more than co-working spaces. They serve as critical infrastructure for youth development, providing mentorship, resources, and community.",
    category: "Youth Empowerment",
    date: "December 2024",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "Design Thinking for Social Enterprise Development",
    excerpt:
      "How human-centered design methodologies can help social entrepreneurs create solutions that truly address community needs and achieve sustainable impact.",
    category: "Innovation",
    date: "November 2024",
    readTime: "5 min read",
  },
  {
    id: "5",
    title: "Strengthening Startup Ecosystems in Emerging Markets",
    excerpt:
      "What does it take to build a thriving startup ecosystem from the ground up? Lessons from East Africa's growing innovation landscape.",
    category: "Ecosystems",
    date: "October 2024",
    readTime: "8 min read",
  },
];
