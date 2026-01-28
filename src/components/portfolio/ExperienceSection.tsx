import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Nerdtech Softwares LLP",
    period: "2023 - Present",
    description:
      "Leading development of enterprise SaaS products, mentoring junior developers, and architecting scalable web applications using modern technologies.",
    achievements: [
      "Reduced deployment time by 60%",
      "Led team of 5 developers",
      "Architected microservices migration",
    ],
  },

];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-teal-500 font-semibold">
            Career Path
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Work <span className="text-teal-500">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-border" />

          <div className="space-y-20 pl-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <span className="absolute -left-[42px] top-6 w-4 h-4 rounded-full bg-teal-500 shadow-md" />

                {/* Card */}
                <div className="bg-card border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-teal-500" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-500" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs rounded-full  text-teal-500 bg-cyan-100 border font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
