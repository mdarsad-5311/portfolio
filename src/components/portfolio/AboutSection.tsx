import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";
import profileImg from "../../assets/image (2).png";

const highlights = [
  { icon: Code2, label: "Clean Code", value: "5+ Years" },
  { icon: Palette, label: "UI/UX Design", value: "50+ Projects" },
  { icon: Zap, label: "Fast Delivery", value: "99% On-time" },
  { icon: Users, label: "Happy Clients", value: "100+" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container px-25">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500 blur-[0.3px] ">About Me</span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Passionate Developer &<br />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Creative Problem Solver</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-4 gradient-bg rounded-2xl blur-2xl opacity-30" />
              <img
                src={profileImg}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-teal-500 text-teal-500 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-teal-500 text-teal-500 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-4 text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience crafting
              digital experiences that make a difference. My journey in tech started with curiosity
              and has evolved into a career dedicated to building innovative solutions.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              I specialize in React, TypeScript, Node.js, and modern cloud technologies.
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or mentoring aspiring developers.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border/50 shadow-sm"
                >
                  <item.icon className="h-6 w-6 text-primary mb-2 text-teal-500" />
                  <p className="text-2xl font-display font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
