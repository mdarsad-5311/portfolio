import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Imran Khan",
    role: "Designing Manager, Creative Solutions",
    content:
      "Arsad delivered an exceptional product that exceeded our expectations. His attention to detail and commitment to quality made our project a huge success.",
    rating: 5,
  },
  {
    name: "Awais Khan",
    role: "CEO, White Arrow Technologies",
    content:
      "Working with Arsad was a pleasure. He understood our requirements perfectly and delivered a beautiful, functional application on time and within budget.",
    rating: 5,
  },
  {
    name: "Nuras Yemeni",
    role: "Founder, SmartSpaces",
    content:
      "Arsad's technical expertise combined with his design sensibility made him the perfect partner for our project.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} id="testimonials" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-500 uppercase text-sm tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Clients <span className="text-teal-500">Say</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="relative bg-card rounded-2xl p-10 shadow-xl ">

            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-teal-100" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-teal-500 text-teal-500"
                />
              ))}
            </div>

            {/* Content */}
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-center leading-relaxed mb-8"
            >
              “{testimonials[index].content}”
            </motion.p>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold">{testimonials[index].name}</p>
              <p className="text-muted-foreground text-sm">
                {testimonials[index].role}
              </p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-teal-500" : "w-2 bg-muted"
                    }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            >
              <ChevronLeft className="w-6 h-6 text-teal-100 hover:text-teal-500" />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <ChevronRight className="w-6 h-6 text-teal-100 hover:text-teal-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
