import SectionHeader from "@/components/SectionHeader";
import ProgramCards from "@/components/ProgramCards";
import { programs } from "@/data/programs";

const Programs = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Initiatives"
            title="Programs & Initiatives"
            description="Comprehensive programs designed to build entrepreneurial capacity, foster innovation, and create lasting impact."
          />
          <ProgramCards programs={programs} />
        </div>
      </section>
    </main>
  );
};

export default Programs;
