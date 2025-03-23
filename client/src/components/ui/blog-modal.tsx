import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  date: string;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  date,
}) => {
  if (!isOpen) return null;

  const processBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const parseParagraph = (paragraph: string, index: number) => {
    const line = paragraph.trim();
    if (!line) return null;

    // Code blocks
    if (line.startsWith("```")) {
      const [firstLine, ...rest] = line.split("\n");
      const language = firstLine.slice(3).trim();
      const codeContent = rest.join("\n").replace(/```$/, "").trim();

      return (
        <pre key={index} className="relative group my-4 overflow-hidden">
          {language && (
            <div className="absolute right-4 top-2 text-xs text-muted-foreground/60 bg-card px-2 py-1 rounded">
              {language}
            </div>
          )}
          <code className={cn(
            "block bg-accent/30 rounded-lg p-6",
            "font-mono text-sm overflow-x-auto",
            "border border-border/10",
            "whitespace-pre"
          )}>
            {codeContent}
          </code>
        </pre>
      );
    }

    // Headings
    if (line.startsWith("#")) {
      const headingMatch = line.match(/^(#+)\s(.+)$/);
      if (!headingMatch) return null;
      
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      
      // Ensure level is between 1 and 6 (valid HTML heading levels)
      const safeLevel = Math.min(Math.max(level, 1), 6);
      const Component = `h${safeLevel}` as keyof JSX.IntrinsicElements;
      
      return (
        <Component 
          key={index} 
          className={cn(
            "font-bold text-foreground",
            level === 1 && "text-3xl mb-6",
            level === 2 && "text-2xl mb-4",
            level === 3 && "text-xl mb-3"
          )}
        >
          {processBoldText(text)}
        </Component>
      );
    }

    // Bullet lists
    if (line.startsWith("- ")) {
      return (
        <ul key={index} className="mb-4 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1.5">•</span>
            <span className="text-muted-foreground flex-1">
              {processBoldText(line.slice(2))}
            </span>
          </li>
        </ul>
      );
    }

    // Normal paragraph
    return (
      <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
        {processBoldText(line)}
      </p>
    );
  };

  const preprocessContent = (content: string): string[] => {
    if (!content) return [];
    
    const lines = content.split("\n");
    const processedLines: string[] = [];
    let currentBlock: string[] = [];
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          currentBlock = [line];
        } else {
          currentBlock.push(line);
          processedLines.push(currentBlock.join("\n"));
          currentBlock = [];
          inCodeBlock = false;
        }
      } else if (inCodeBlock) {
        currentBlock.push(line);
      } else {
        processedLines.push(line);
      }
    }

    // Handle unclosed code blocks
    if (currentBlock.length > 0) {
      processedLines.push(currentBlock.join("\n"));
    }

    return processedLines;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-20"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-card rounded-xl shadow-2xl w-[95%] max-w-5xl mx-auto z-50">
        <div className="flex items-center justify-between p-6 border-b border-border/10">
          <h2 className="text-2xl font-bold gradient-text">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto max-h-[80vh] custom-scrollbar">
          <p className="text-sm font-medium text-muted-foreground mb-6">
            {date}
          </p>
          <div className="blog-content">
            {preprocessContent(content).map((paragraph, idx) => 
              parseParagraph(paragraph, idx)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
