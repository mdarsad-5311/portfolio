import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import project1 from "../../assets/image.png";
import project2 from "../../assets/hosp.png";
import project3 from "../../assets/ecom.jpeg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website designed to showcase my skills, projects, and experience through a clean, responsive, and engaging interface with smooth animations.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Hospital ERP System",
    description: "A complete Hospital ERP System designed to manage hospital operations efficiently, including patient records, appointments, billing, staff management, and real-time reporting through a secure, responsive interface.",
    image: project2,
    tags: ["React", "JavaScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with product listings, advanced search and filters, shopping cart, secure checkout, and user account management, designed for fast and seamless online shopping.",
    image: project3,
    tags: ["Python", "Django", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container px-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-2xl font-bold text-sm uppercase tracking-wider  text-teal-500 blur-[0.3px]">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Featured <span className="text-teal-500 ">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A selection of my recent work showcasing my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 gradient-bg rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-auto aspect-video object-cover rounded-2xl shadow-2xl "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? "lg:order-2 lg:text-right" : "lg:order-1"}`}>
                <span className="text-primary text-sm font-medium text-teal-500">Featured Project</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full text-teal-500 bg-cyan-100 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
