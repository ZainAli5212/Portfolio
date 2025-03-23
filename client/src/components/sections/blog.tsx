import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { format } from "date-fns";
import { BlogModal } from "@/components/ui/blog-modal";
import { useState } from "react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof portfolioConfig.blogPosts[0] | null>(null);

  return (
    <section id="blog" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Blog</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioConfig.blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-card-effect h-full border border-border/40 shadow-sm group">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedPost(post)}
                    className="w-full sm:w-auto bg-primary/5 hover:bg-primary/10 text-primary hover:text-primary border-primary/20 hover:border-primary/30 font-medium transition-all duration-200 hover:scale-105"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BlogModal
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title || ""}
        content={selectedPost?.content || ""}
        date={selectedPost?.publishedAt || ""}
      />
    </section>
  );
}