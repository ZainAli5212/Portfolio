import NavHeader from "@/components/layout/nav-header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <NavHeader />
      <Hero />
      <main className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-32 pb-16 md:pb-32">
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}