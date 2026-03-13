import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Blog = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Blog"
            title="Insights & Reflections"
            description="Thoughts on entrepreneurship, innovation ecosystems, and building impact across Africa."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-hover group cursor-pointer"
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen size={12} />
                  {post.readTime} · {post.date}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
