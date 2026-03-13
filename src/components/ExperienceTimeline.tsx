import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import type { Experience } from "@/data/experience";

interface Props {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: Props) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="bg-card rounded-xl p-6 card-hover">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                <p className="text-secondary font-semibold mb-2">{exp.organization}</p>
                <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-foreground/80">• {h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
