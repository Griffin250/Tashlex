import SectionHeader from "@/components/SectionHeader";
import ImpactStats from "@/components/ImpactStats";
import { motion } from "framer-motion";
import { Award, Globe, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "International Training",
    description: "Delivered entrepreneurship training across Africa and internationally, including programs in Nepal through Hope Innovation Academy.",
  },
  {
    icon: Award,
    title: "Ecosystem Recognition",
    description: "Recognized in the Global Startup Awards as an ecosystem leader among Uganda regional finalists.",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description: "Thousands of young people empowered through innovation labs, bootcamps, and mentorship programs.",
  },
  {
    icon: Zap,
    title: "Startup Acceleration",
    description: "Mentored hundreds of startups and SMEs, helping them develop sustainable business models and achieve growth.",
  },
];

const Impact = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Results"
            title="Impact & Achievements"
            description="Measurable impact across entrepreneurship training, ecosystem building, and youth empowerment."
          />
        </div>
      </section>

      <ImpactStats />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-8 card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
