import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Smartphone, Rocket, Database, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance.",

  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps using React Native that deliver native-like experiences on iOS and Android.",
 
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality to create engaging interfaces.",
  
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js, Python, and modern database technologies.",
 
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Speed up your existing applications with code optimization, caching strategies, and CDN implementation.",
  
  },
  {
    icon: Shield,
    title: "Technical Consulting",
    description:
      "Expert advice on technology choices, architecture decisions, and best practices for your projects.",
  }
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-500 uppercase tracking-widest text-sm font-medium">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-teal-500">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Professional development services tailored to bring your ideas to life with quality and efficiency.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-500 mb-6">
                <service.icon className="text-white w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p> 
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
