import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/config/portfolio";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center relative px-4 md:px-6">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative space-y-4 md:space-y-6 max-w-3xl mx-auto"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-6xl font-bold gradient-text tracking-tight"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Hi, I'm {portfolioConfig.personal.name}
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
        >
          {portfolioConfig.personal.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {portfolioConfig.personal.summary}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mt-8"
        >
          <Button 
            asChild
            size="lg"
            className="w-full md:w-auto transition-transform hover:scale-105"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="w-full md:w-auto transition-transform hover:scale-105"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-8"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}