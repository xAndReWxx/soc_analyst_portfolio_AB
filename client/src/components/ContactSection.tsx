import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';

// Custom Discord SVG icon since lucide-react doesn't have one
function DiscordIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function ContactSection() {
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Discord',
      icon: DiscordIcon,
      url: 'https://discord.com/users/647006927028748298',
      color: '#00f0ff',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/andrew-bahgat/',
      color: '#00f0ff',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:andrewbahgatt@gmail.com',
      color: '#00f0ff',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span style={{ color: '#00f0ff' }}>secure your systems</span> before attackers do.
          </h2>
          <div
            className="w-12 h-0.5 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Contact content */}
        <div
          className="p-8 md:p-12 rounded-xl transition-all duration-300"
          style={{
            background: 'rgba(15, 15, 20, 0.6)',
            border: '1px solid rgba(26, 26, 36, 0.5)',
          }}
        >
          <div className="text-center space-y-8">
            {/* Contact text */}
            <div className="space-y-3">
              <p className="text-base md:text-lg text-muted-foreground">
                I'm always interested in discussing SOC operations, threat detection, and incident response opportunities.
              </p>
              <p className="text-sm text-muted-foreground">
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovering(link.name)}
                    onMouseLeave={() => setIsHovering(null)}
                    className="group relative transition-all duration-300"
                    title={link.name}
                  >
                    {/* Icon container */}
                    <div
                      className="p-4 rounded-xl transition-all duration-300"
                      style={{
                        border: isHovering === link.name
                          ? `1px solid rgba(0, 240, 255, 0.3)`
                          : '1px solid rgba(26, 26, 36, 0.5)',
                        boxShadow: isHovering === link.name
                          ? '0 0 25px rgba(0, 240, 255, 0.1)'
                          : 'none',
                        background: isHovering === link.name
                          ? 'rgba(0, 240, 255, 0.06)'
                          : 'transparent',
                        transform: isHovering === link.name ? 'translateY(-2px)' : 'translateY(0)',
                      }}
                    >
                      <Icon
                        className="w-5 h-5 transition-all duration-300"
                        style={{
                          color: isHovering === link.name ? link.color : '#808088',
                        }}
                      />
                    </div>

                    {/* Label */}
                    <span
                      className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap transition-opacity duration-300"
                      style={{
                        color: link.color,
                        opacity: isHovering === link.name ? 1 : 0,
                      }}
                    >
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Or send me an email directly:{' '}
                <span style={{ color: '#00f0ff', fontWeight: 600 }}>andrewbahgatt@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-10 text-center pt-6"
          style={{ borderTop: '1px solid rgba(26, 26, 36, 0.3)' }}
        >
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2025 Andrew Bahgat. All rights reserved. — SOC Analyst Portfolio
          </p>
        </div>
      </div>
    </section>
  );
}
