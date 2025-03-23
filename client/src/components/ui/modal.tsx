
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  date: string;
}

export function Modal({ isOpen, onClose, title, content, date }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 z-50 w-[95%] md:w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 mx-auto space-y-4 rounded-lg border bg-background p-6 shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
                <p className="text-sm text-muted-foreground">{date}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">{content}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
