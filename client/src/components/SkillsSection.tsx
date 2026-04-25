import { useState } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'SIEM',
    skills: ['Splunk', 'QRadar', 'Wazuh', 'ELK Stack'],
    icon: '📊',
  },
  {
    title: 'Network Analysis',
    skills: ['Wireshark', 'tcpdump'],
    icon: '🌐',
  },
  {
    title: 'Endpoint Monitoring',
    skills: ['Sysmon', 'Microsoft Defender'],
    icon: '🖥️',
  },
  {
    title: 'Threat Intelligence',
    skills: ['VirusTotal', 'AbuseIPDB'],
    icon: '🔍',
  },
  {
    title: 'Core Skills',
    skills: ['Log Analysis', 'Alert Triage', 'Incident Investigation', 'Threat Detection', 'Incident Response'],
    icon: '⚡',
  },
];

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#00f0ff' }}>Skills</span> & Capabilities
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="p-6 md:p-7 rounded-xl transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(15, 15, 20, 0.6)',
                border: hoveredIndex === index
                  ? '1px solid rgba(0, 240, 255, 0.25)'
                  : '1px solid rgba(26, 26, 36, 0.5)',
                boxShadow: hoveredIndex === index
                  ? '0 0 30px rgba(0, 240, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.3)'
                  : 'none',
                transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold" style={{ color: '#00f0ff' }}>{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 text-muted-foreground transition-colors duration-200"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#7a00ff' }}
                    />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Accent bar */}
              <div
                className="mt-5 h-0.5 rounded-full transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, #00f0ff, #7a00ff)',
                  opacity: hoveredIndex === index ? 0.8 : 0.15,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
