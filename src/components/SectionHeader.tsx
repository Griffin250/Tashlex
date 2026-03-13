import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ label, title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {label && (
        <span className="text-accent font-semibold text-sm tracking-wider uppercase">{label}</span>
      )}
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
