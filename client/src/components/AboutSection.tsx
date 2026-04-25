export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Subtle section divider gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#00f0ff' }}>About</span> Mission
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Content */}
        <div className="space-y-5 text-base md:text-lg leading-relaxed">
          <p className="text-muted-foreground">
            I'm a Junior SOC Analyst driven by the challenge of turning raw security data into actionable intelligence. My journey began with hands-on training through <span style={{ color: '#00f0ff', fontWeight: 600 }}>TryHackMe SOC Level 1</span> and <span style={{ color: '#00f0ff', fontWeight: 600 }}>CyberDefenders</span> labs, where I developed a deep understanding of how security operations centers function in real-world scenarios.
          </p>

          <p className="text-muted-foreground">
            My analytical mindset is built on a foundation of <span style={{ color: '#00f0ff', fontWeight: 600 }}>Linux administration</span> and <span style={{ color: '#00f0ff', fontWeight: 600 }}>networking fundamentals</span>. I approach each alert with investigative rigor—correlating logs, identifying patterns, and distinguishing signal from noise. I've worked with industry-standard SIEM platforms and understand the critical importance of rapid, accurate threat assessment.
          </p>

          <p className="text-muted-foreground">
            What sets me apart is my commitment to continuous learning and my ability to communicate complex security findings clearly. I don't just read logs—I turn them into actionable security intelligence that drives incident response decisions.
          </p>

          {/* Key highlight */}
          <div
            className="p-6 md:p-8 rounded-xl mt-8 transition-all duration-300"
            style={{
              background: 'rgba(15, 15, 20, 0.6)',
              border: '1px solid rgba(26, 26, 36, 0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(26, 26, 36, 0.5)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <p style={{ color: '#00f0ff', fontWeight: 600, fontStyle: 'italic', fontSize: '1.1rem' }}>
              "I don't just read logs — I turn them into actionable security intelligence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
