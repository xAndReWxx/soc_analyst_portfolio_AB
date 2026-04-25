import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  objective: string;
  tools: string[];
  investigation: string;
  outcome: string;
  icon: string;
  githubUrl?: string;
  projectUrl?: string;
}

const projects: Project[] = [
  {
    id: 'smart-security',
    title: 'Smart Security System Investigation',
    objective: 'Build and analyze a smart access control system',
    tools: ['ESP32-CAM', 'OpenCV', 'React', 'Python', 'Telegram API'],
    investigation: 'Monitored authentication logs, detected anomalies, analyzed access behavior patterns',
    outcome: 'Real-time alerts and improved visibility of security events',
    icon: '🔐',
    githubUrl: '#',
    projectUrl: '#',
  },
  {
    id: 'network-traffic',
    title: 'Network Traffic Analysis Simulation',
    objective: 'Detect suspicious network activity',
    tools: ['Wireshark', 'tcpdump'],
    investigation: 'Packet capture, anomaly detection, traffic inspection',
    outcome: 'Identified abnormal patterns and improved detection skills',
    icon: '🌐',
    githubUrl: '#',
    projectUrl: '#',
  },
  {
    id: 'siem-lab',
    title: 'SIEM Log Analysis Lab',
    objective: 'Simulate SOC alert triage and investigation',
    tools: ['Splunk', 'Wazuh', 'ELK'],
    investigation: 'Log correlation, alert triage, incident identification',
    outcome: 'Strengthened real-world SOC workflow skills',
    icon: '📊',
    githubUrl: '#',
    projectUrl: '#',
  },
];

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)' }}
      />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#00f0ff' }}>Investigations</span> & Projects
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }}
          />
        </div>

        {/* Projects Grid — items-start so cards don't stretch to fill row height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="rounded-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                style={{
                  background: 'rgba(15, 15, 20, 0.6)',
                  border: isHovered || isExpanded
                    ? '1px solid rgba(0, 240, 255, 0.25)'
                    : '1px solid rgba(26, 26, 36, 0.5)',
                  boxShadow: isHovered || isExpanded
                    ? '0 0 30px rgba(0, 240, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.3)'
                    : 'none',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  minHeight: '450px',
                }}
              >
                {/* Card header — clickable to toggle expand */}
                <div
                  className="p-6 md:p-7 cursor-pointer"
                  style={{ borderBottom: '1px solid rgba(26, 26, 36, 0.5)' }}
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{project.icon}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300"
                      style={{
                        color: '#00f0ff',
                        opacity: 0.6,
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#00f0ff' }}>{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.objective}</p>
                </div>

                {/* Card body */}
                <div className="p-6 md:p-7 space-y-4 flex-1 flex flex-col">
                  {/* Tools */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#7a00ff' }}>Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full transition-all duration-200"
                          style={{
                            background: 'rgba(122, 0, 255, 0.08)',
                            color: '#7a00ff',
                            border: '1px solid rgba(122, 0, 255, 0.2)',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable content — always rendered, animated via CSS */}
                  <div
                    style={{
                      maxHeight: isExpanded ? '300px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                    }}
                  >
                    <div
                      className="space-y-4 pt-4"
                      style={{ borderTop: '1px solid rgba(26, 26, 36, 0.5)' }}
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#00f0ff' }}>Investigation</p>
                        <p className="text-sm text-muted-foreground">{project.investigation}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#00f0ff' }}>Outcome</p>
                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div
                    className="flex gap-3 pt-4 mt-auto"
                    style={{ borderTop: '1px solid rgba(26, 26, 36, 0.3)' }}
                  >
                    <a
                      href={project.projectUrl}
                      className="flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        color: '#00f0ff',
                        background: 'rgba(0, 240, 255, 0.04)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.04)';
                        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        border: '1px solid rgba(122, 0, 255, 0.3)',
                        color: '#7a00ff',
                        background: 'rgba(122, 0, 255, 0.04)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(122, 0, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(122, 0, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(122, 0, 255, 0.04)';
                        e.currentTarget.style.borderColor = 'rgba(122, 0, 255, 0.3)';
                      }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
