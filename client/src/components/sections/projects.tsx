import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {portfolioConfig.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full p-6 border border-border/40 bg-card shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {project.tech.map((tech) => (
                      <motion.div
                        key={tech}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                      >
                        <Badge 
                          variant="secondary"
                          className="transition-all hover:scale-110"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="w-full sm:w-auto transition-transform hover:scale-105"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      asChild
                      className="w-full sm:w-auto transition-transform hover:scale-105"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}