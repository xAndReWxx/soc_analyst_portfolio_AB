import { useState } from 'react';

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    id: 'tryhackme-soc',
    title: 'TryHackMe SOC Level 1',
    issuer: 'TryHackMe',
    description: 'Completed comprehensive SOC analyst training covering log analysis, alert triage, and incident response',
    icon: '🎖️',
    date: '2026',
  },
  {
    id: 'depi-program',
    title: 'DEPI Program Graduate',
    issuer: 'DEPI',
    description: 'Completed intensive cybersecurity training program with focus on practical incident response and SOC operations',
    icon: '📚',
    date: '2026',
  },
  {
    id: 'cyberdefenders',
    title: 'CyberDefenders Certified',
    issuer: 'CyberDefenders',
    description: 'Earned certification through hands-on threat detection and analysis challenges',
    icon: '🛡️',
    date: '2025',
  },
  {
    id: 'amit-diploma',
    title: 'AMIT SOC Diploma',
    issuer: 'AMIT',
    description: 'Advanced SOC analyst diploma covering enterprise security monitoring and threat intelligence',
    icon: '🏆',
    date: '2025',
  },
];

export default function AchievementsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#00f0ff' }}>Certifications</span> & Achievements
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              onMouseEnter={() => setHoveredId(achievement.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="p-6 rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              style={{
                background: 'rgba(15, 15, 20, 0.6)',
                border: hoveredId === achievement.id
                  ? '1px solid rgba(0, 240, 255, 0.25)'
                  : '1px solid rgba(26, 26, 36, 0.5)',
                boxShadow: hoveredId === achievement.id
                  ? '0 0 25px rgba(0, 240, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.3)'
                  : 'none',
                transform: hoveredId === achievement.id ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{achievement.icon}</div>

              {/* Title */}
              <h3 className="text-base font-bold mb-2" style={{ color: '#00f0ff' }}>{achievement.title}</h3>

              {/* Issuer */}
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#7a00ff' }}>
                {achievement.issuer}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {achievement.description}
              </p>

              {/* Date */}
              <p className="text-xs text-muted-foreground">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
