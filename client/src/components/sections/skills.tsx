import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Skills</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {Object.entries(portfolioConfig.skills).map(([category, items], index) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full border border-border/40 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={badgeVariants}
                        whileHover="hover"
                        custom={skillIndex}
                      >
                        <Badge 
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}