import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="pt-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="pt-16">
      {/* Article Header */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-950/30 dark:to-orange-950/30">
        <div className="max-w-4xl mx-auto">
          <motion.button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-6 transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={18} />
            Back to Blog
          </motion.button>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground pt-2">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose dark:prose-invert max-w-none"
          >
            <div className="text-foreground leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.includes("**")) {
                  return (
                    <p key={idx} className="text-foreground">
                      <strong>{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                      {paragraph.replace(/\*\*(.*?)\*\*/g, "")}
                    </p>
                  );
                }
                return (
                  <p key={idx} className="text-foreground text-base leading-8">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.article>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-3">
              <span className="inline-block px-3 py-1 bg-card text-foreground text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, idx) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    className="block group h-full"
                  >
                    <div className="bg-background rounded-lg p-6 card-hover transition-all duration-300 h-full flex flex-col">
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-3">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{relatedPost.readTime}</span>
                        <span>·</span>
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to explore more?</h2>
          <p className="text-white/90 mb-6 text-lg">
            Discover more insights and join the conversation about entrepreneurship, innovation, and impact.
          </p>
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
