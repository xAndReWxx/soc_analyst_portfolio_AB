import { useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Ahmed Hassan',
    role: 'SOC Manager',
    company: 'CyberSecure Solutions',
    content:
      'Andrew demonstrates exceptional analytical thinking and attention to detail. His ability to correlate logs and identify patterns is impressive for someone at his career stage. He consistently turns raw security data into actionable intelligence.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 'testimonial-2',
    name: 'Fatima Al-Mansouri',
    role: 'Security Lead',
    company: 'TechDefense Inc',
    content:
      'What stands out about Andrew is his problem-solving mindset. He doesn\'t just report alerts—he investigates root causes and provides context. His documentation and communication skills make incident response seamless.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 'testimonial-3',
    name: 'Mohamed Karim',
    role: 'Threat Intelligence Analyst',
    company: 'SecureNet',
    content:
      'Andrew\'s dedication to continuous learning is remarkable. He stays updated with the latest threats and tools. His collaborative approach and willingness to help teammates make him a valuable addition to any SOC team.',
    rating: 5,
    avatar: '👨‍💻',
  },
];

export default function TestimonialsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Feedback</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span style={{ color: '#00f0ff' }}>People Say</span>
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="p-6 md:p-7 rounded-xl transition-all duration-300 flex flex-col h-full"
              style={{
                background: 'rgba(15, 15, 20, 0.6)',
                border: hoveredId === testimonial.id
                  ? '1px solid rgba(0, 240, 255, 0.25)'
                  : '1px solid rgba(26, 26, 36, 0.5)',
                boxShadow: hoveredId === testimonial.id
                  ? '0 0 25px rgba(0, 240, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.3)'
                  : 'none',
                transform: hoveredId === testimonial.id ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{ fill: '#f59e0b', color: '#f59e0b' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-4"
                style={{ borderTop: '1px solid rgba(26, 26, 36, 0.3)' }}
              >
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#00f0ff' }}>{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
