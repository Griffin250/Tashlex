import { motion } from "framer-motion";
import { Rocket, Lightbulb, Users, TrendingUp, Palette } from "lucide-react";
import type { Program } from "@/data/programs";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Lightbulb,
  Users,
  TrendingUp,
  Palette,
};

interface Props {
  programs: Program[];
}

const ProgramCards = ({ programs }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program, i) => {
        const Icon = iconMap[program.icon] || Rocket;
        return (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 card-hover group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon className="text-accent" size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{program.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{program.description}</p>
            <div className="mb-4">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Target Audience</span>
              <p className="text-sm text-foreground/80 mt-1">{program.audience}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Key Outcomes</span>
              <ul className="mt-1 space-y-1">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProgramCards;
