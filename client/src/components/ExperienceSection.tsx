interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

const timelineEntries: TimelineEntry[] = [
  {
    title: 'DEPI Cybersecurity Incident Response Program',
    organization: 'Digital Egypt Pioneers Initiative',
    period: '2024 - 2025',
    description: 'Comprehensive training in incident response, threat analysis, and SOC operations with hands-on labs and real-world scenarios.',
    type: 'education',
  },
  {
    title: 'AMIT SOC Diploma',
    organization: 'AMIT Learning',
    period: '2024',
    description: 'Advanced Security Operations Center training covering SIEM platforms, log analysis, alert triage, and incident investigation.',
    type: 'education',
  },
  {
    title: 'NTI Linux Internship',
    organization: 'National Telecom Institute',
    period: '2023 - 2024',
    description: 'Intensive Linux system administration and networking fundamentals internship, building core infrastructure knowledge.',
    type: 'experience',
  },
  {
    title: 'Bachelor of Computer Engineering',
    organization: 'University',
    period: '2020 - 2024',
    description: 'Comprehensive computer engineering degree with focus on networking, systems, and cybersecurity principles.',
    type: 'education',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#00f0ff' }}>Experience</span> & Education
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #00f0ff, #7a00ff, #00f0ff)',
              opacity: 0.2,
            }}
          />

          {/* Timeline entries */}
          <div className="space-y-10 md:space-y-14">
            {timelineEntries.map((entry, index) => (
              <div key={index} className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full transform -translate-x-[5px] md:-translate-x-1.5 md:translate-y-8"
                  style={{
                    background: '#00f0ff',
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.4)',
                  }}
                />

                {/* Content */}
                <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div
                    className="p-6 md:p-7 rounded-xl transition-all duration-300 group"
                    style={{
                      background: 'rgba(15, 15, 20, 0.6)',
                      border: '1px solid rgba(26, 26, 36, 0.5)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.2)';
                      e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(26, 26, 36, 0.5)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: entry.type === 'education'
                            ? 'rgba(122, 0, 255, 0.12)'
                            : 'rgba(0, 240, 255, 0.12)',
                          color: entry.type === 'education' ? '#7a00ff' : '#00f0ff',
                        }}
                      >
                        {entry.type === 'education' ? '📚 Education' : '💼 Experience'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#00f0ff' }}>{entry.title}</h3>

                    {/* Organization and period */}
                    <p className="text-sm text-muted-foreground mb-3">
                      {entry.organization} • <span style={{ color: '#7a00ff' }}>{entry.period}</span>
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
