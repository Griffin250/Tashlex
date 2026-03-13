import SectionHeader from "@/components/SectionHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Career"
            title="Experience"
            description="A track record of building entrepreneurship capacity and strengthening innovation ecosystems across Africa and beyond."
          />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>
    </main>
  );
};

export default Experience;
