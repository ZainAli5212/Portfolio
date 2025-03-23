import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { portfolioConfig } from "@/config/portfolio";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", data);
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Failed to send message';
        throw new Error(errorMessage);
      }
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: portfolioConfig.personal.email,
      href: `mailto:${portfolioConfig.personal.email}`,
    },
    portfolioConfig.personal.phone && {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: portfolioConfig.personal.phone,
      href: `tel:${portfolioConfig.personal.phone.replace(/\D/g, '')}`,
    },
    portfolioConfig.personal.location && {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: portfolioConfig.personal.location,
    },
  ].filter(Boolean);

  const socialLinks = [
    {
      icon: <SiGithub className="w-5 h-5" />,
      label: "GitHub",
      href: portfolioConfig.personal.social.github,
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: portfolioConfig.personal.social.linkedin,
    },
    {
      icon: <SiInstagram className="w-5 h-5" />,
      label: "Instagram",
      href: portfolioConfig.personal.social.instagram,
    },
  ];

  return (
    <section id="contact" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Me</h2>

        <div className="space-y-6">
          {/* Get in Touch Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-background/60">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

                {/* Contact Details */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((contact, index) => (
                    contact && (
                      <div
                        key={contact.label}
                        className="flex items-center gap-3"
                      >
                        <div className="text-primary">{contact.icon}</div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              className="hover:text-primary transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p>{contact.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/80 hover:bg-primary/10 border border-border/40 transition-colors"
                    >
                      {social.icon}
                      <span className="text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-background/60">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full relative overflow-hidden group"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          Sending...
                        </span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}