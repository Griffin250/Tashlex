import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import SectionHeader from "@/components/SectionHeader";
import ProgramCards from "@/components/ProgramCards";
import { programs } from "@/data/programs";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const expertise = [
  "Entrepreneurship Training",
  "Business Development",
  "Startup Mentorship",
  "Innovation Ecosystems",
  "Youth Empowerment",
  "Design Thinking",
];

const Home = () => {
  return (
    <main>
      <Hero />

      {/* Expertise strip */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <ImpactStats />

      {/* Programs preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="What I Do"
            title="Programs & Initiatives"
            description="Comprehensive programs designed to empower entrepreneurs and strengthen innovation ecosystems."
          />
          <ProgramCards programs={programs.slice(0, 3)} />
          <div className="text-center mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Insights" title="Latest Thoughts" />
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-hover"
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-3">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen size={12} />
                  {post.readTime} · {post.date}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Read All Insights <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Impactful?</h2>
          <p className="text-secondary-foreground/80 mb-8">
            Whether you're an organization seeking training, a startup needing mentorship, or an ecosystem builder looking to collaborate — let's connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
