import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ThemeToggle from "../theme-toggle";
import { portfolioConfig } from "@/config/portfolio";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-lg font-semibold hover:text-primary transition-colors">
            Portfolio
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth"
                  });
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <Button asChild className="hidden md:inline-flex">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}