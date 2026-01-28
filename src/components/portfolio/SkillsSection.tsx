import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Vue.js", level: 75 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Python", level: 80 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 75 },
        ],
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git", level: 95 },
            { name: "Docker", level: 80 },
            { name: "AWS", level: 75 },
            { name: "CI/CD", level: 85 },
            { name: "Figma", level: 70 },
        ],
    },
];

export const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="skills"
            ref={ref} className="py-20 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-teal-500 text-sm uppercase tracking-widest font-medium">
                        My Skills
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Technologies I{" "}
                        <span className="text-teal-500">Work With</span>
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                            className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft"
                        >
                            <h3 className="text-lg font-semibold text-teal-600 mb-6">
                                {category.title}
                            </h3>

                            <div className="space-y-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm font-medium mb-2">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>

                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={
                                                    isInView ? { width: `${skill.level}%` } : {}
                                                }
                                                transition={{
                                                    duration: 1,
                                                    delay:
                                                        0.2 +
                                                        catIndex * 0.15 +
                                                        skillIndex * 0.08,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
