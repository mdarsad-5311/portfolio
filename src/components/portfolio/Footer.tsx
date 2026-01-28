import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/mdarsad-5311", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mdarsad5311/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mdarsadkgn5311@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-card">

      {/* Gradient Top Border */}
      <div className="bg-card border-t-border border-t-2 " />

      <div className="container py-12 px-25">
        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="#home"
              className="text-2xl font-display font-bold text-teal-500"
            >
              Portfolio
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              Building digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-teal-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-teal-500 hover:bg-teal-500/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 pt-6 text-center  border-t-border border-t-2 ">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Md Arsad. Made with
            <Heart className="h-4 w-4 text-teal-500 fill-teal-500/80" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};
