import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "mdarsadkgn5311@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9527635311" },
  { icon: MapPin, label: "Location", value: "NASHIK,INDIA" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mojepdno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };


  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-widest text-sm font-semibold text-teal-500">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Let’s Work{" "}
            <span className="text-teal-500">Together</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind? I’d love to hear from you. Send me a message
            and let’s create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-14">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-card shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl bg-teal-100 border-primary/20"
            >
              <CheckCircle className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Quick Response
              </h3>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. For urgent inquiries,
                feel free to call directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-md"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input
                  name="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div className="mb-7">
                <label className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                className="w-full text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
