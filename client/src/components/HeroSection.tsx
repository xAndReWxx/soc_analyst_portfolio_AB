import { useState } from 'react';
import TerminalAnimation from './TerminalAnimation';

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  const scrollToInvestigations = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Subtle background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 240, 255, 0.08) 25%, rgba(0, 240, 255, 0.08) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.08) 75%, rgba(0, 240, 255, 0.08) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 240, 255, 0.08) 25%, rgba(0, 240, 255, 0.08) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.08) 75%, rgba(0, 240, 255, 0.08) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(122, 0, 255, 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        <div className="space-y-8 md:space-y-10">
          {/* Terminal Animation */}
          <div
            className="glass-card p-5 md:p-7 rounded-xl border border-border/50"
            style={{
              background: 'rgba(15, 15, 20, 0.6)',
            }}
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
            </div>
            <TerminalAnimation />
          </div>

          {/* Name - Andrew Bahgat */}
          <div className="text-center space-y-4">
            <p className="text-xs md:text-sm font-medium text-muted-foreground tracking-[0.3em] uppercase">Welcome to</p>
            <h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              style={{
                background: 'linear-gradient(135deg, #00f0ff 0%, #7a00ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Andrew Bahgat
            </h1>
            <p
              className="text-sm md:text-base font-medium tracking-widest uppercase"
              style={{ color: '#00f0ff', opacity: 0.8 }}
            >
              Junior SOC Analyst
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-5 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
              Detecting, analyzing, and responding to{' '}
              <span style={{ color: '#00f0ff' }}>threats</span> before they become incidents.
            </h2>

            {/* Subheading */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specializing in log analysis, alert triage, and incident response using industry-standard tools like Splunk, QRadar, and Wazuh.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2 text-center">
            <button
              onClick={scrollToInvestigations}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative px-8 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 overflow-hidden"
              style={{
                color: isHovering ? '#050507' : '#00f0ff',
                background: isHovering
                  ? 'linear-gradient(135deg, #00f0ff 0%, #00d4e0 100%)'
                  : 'transparent',
                border: isHovering ? '1px solid transparent' : '1px solid rgba(0, 240, 255, 0.4)',
                boxShadow: isHovering
                  ? '0 0 40px rgba(0, 240, 255, 0.3), 0 8px 32px rgba(0, 240, 255, 0.2)'
                  : '0 0 15px rgba(0, 240, 255, 0.1)',
                transform: isHovering ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              View Investigations
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 flex justify-center">
            <div className="animate-bounce opacity-40">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#00f0ff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
