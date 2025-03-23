import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioConfig } from "@/config/portfolio";

export default function About() {
  return (
    <section id="about" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">About Me</h2>

        <Card className="hover-card-effect border border-border/40 shadow-md bg-gradient-to-br from-background to-accent/10">
          <CardContent className="p-6 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                {portfolioConfig.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}, {edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                {portfolioConfig.personal.summary}
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}