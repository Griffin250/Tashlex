import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Target, Heart, Globe, Lightbulb, Users, BookOpen, TrendingUp } from "lucide-react";
import isaacPhoto from "@/assets/isaac-photo.png";

const coreExpertise = [
  { icon: BookOpen, label: "Entrepreneurship Training" },
  { icon: TrendingUp, label: "Business Development Services" },
  { icon: Users, label: "Startup Mentorship" },
  { icon: Globe, label: "Innovation Ecosystem Development" },
  { icon: Heart, label: "Youth Empowerment Programs" },
  { icon: Lightbulb, label: "Design Thinking Facilitation" },
  { icon: Target, label: "SME Growth Strategy" },
];

const About = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="About" title="Who I Am" />

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="prose max-w-none">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Isaac Tashlex is an entrepreneurship trainer and innovation ecosystem builder based in Uganda. He works with universities, NGOs, innovation hubs, and development organizations to empower young people and startups with the skills, mindset, and tools required to build sustainable ventures.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  He has contributed to entrepreneurship programs across Africa and internationally, including delivering professional development training through Hope Innovation Academy and supporting social innovation initiatives connected to the Social Innovation Academy network.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His mission is to nurture the next generation of entrepreneurs capable of solving real-world problems through innovation, leadership, and enterprise development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-xl p-6 card-hover">
                <h3 className="font-heading text-lg font-bold text-foreground mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  {coreExpertise.map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="text-accent" size={18} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
