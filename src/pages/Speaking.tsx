import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Mic, GraduationCap, Users, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const topics = [
  "Entrepreneurship Ecosystems in Africa",
  "Youth Innovation and Job Creation",
  "Design Thinking for Startups",
  "Startup Ecosystem Development",
  "Building Sustainable Businesses in Emerging Markets",
  "Social Enterprise and Community-Driven Innovation",
];

const formats = [
  { icon: Mic, title: "Conference Speaking", description: "Keynotes and panel discussions at international conferences and summits." },
  { icon: Presentation, title: "Workshop Facilitation", description: "Hands-on workshops for organizations, universities, and innovation hubs." },
  { icon: GraduationCap, title: "University Lectures", description: "Guest lectures on entrepreneurship, innovation, and business development." },
  { icon: Users, title: "Corporate Training", description: "Customized training programs for organizations and development partners." },
];

const Speaking = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Speaking"
            title="Speaking & Workshops"
            description="Available for keynotes, workshops, and training engagements worldwide."
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Topics</h3>
              <div className="space-y-3">
                {topics.map((topic, i) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card card-hover"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-foreground font-medium">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Formats</h3>
              <div className="space-y-4">
                {formats.map((format, i) => {
                  const Icon = format.icon;
                  return (
                    <motion.div
                      key={format.title}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-4 p-4 rounded-lg bg-card card-hover"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <Icon className="text-secondary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground">{format.title}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a Speaking Engagement <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Speaking;
