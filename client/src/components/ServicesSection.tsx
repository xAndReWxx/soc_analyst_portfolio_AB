interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Threat Detection',
    description: 'Advanced log analysis to identify suspicious patterns and potential security threats',
    icon: '🎯',
    features: ['Anomaly Detection', 'Pattern Recognition', 'Log Correlation', 'Threat Hunting'],
  },
  {
    title: 'Alert Triage',
    description: 'Rapid assessment and prioritization of security alerts to reduce false positives',
    icon: '⚡',
    features: ['Alert Analysis', 'Severity Assessment', 'False Positive Reduction', 'Prioritization'],
  },
  {
    title: 'Incident Investigation',
    description: 'Thorough investigation of security incidents to determine scope and impact',
    icon: '🔍',
    features: ['Root Cause Analysis', 'Timeline Reconstruction', 'Evidence Preservation', 'Documentation'],
  },
  {
    title: 'Incident Response',
    description: 'Coordinated response to security incidents to minimize damage and restore systems',
    icon: '🛡️',
    features: ['Containment', 'Eradication', 'Recovery', 'Post-Incident Review'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#00f0ff' }}>Services</span> Offered
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 md:p-7 rounded-xl transition-all duration-300 group"
              style={{
                background: 'rgba(15, 15, 20, 0.6)',
                border: '1px solid rgba(26, 26, 36, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26, 26, 36, 0.5)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon and title */}
              <div className="flex items-start gap-4 mb-5">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#00f0ff' }}>{service.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #00f0ff, #7a00ff)' }}
                    />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Accent bar */}
              <div
                className="mt-5 h-0.5 rounded-full transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, #00f0ff, #7a00ff)',
                  opacity: 0.15,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
