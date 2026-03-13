import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

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
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="block group h-full">
                  <article className="bg-card rounded-xl p-6 card-hover group cursor-pointer h-full flex flex-col transition-all duration-300">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen size={12} />
                      {post.readTime} · {post.date}
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
