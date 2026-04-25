import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);

  // Navbar order matches the page section order exactly
  // "Contact" removed from nav; "Education" removed (it's part of Experience section)
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      const sections = navItems
        .filter(item => item.id !== 'home')
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter(item => item.element !== null);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 backdrop-blur-2xl'
          : 'py-3 backdrop-blur-md'
      }`}
      style={{
        background: scrolled
          ? 'rgba(5, 5, 7, 0.85)'
          : 'rgba(5, 5, 7, 0.5)',
        borderBottom: scrolled
          ? '1px solid rgba(0, 240, 255, 0.08)'
          : '1px solid transparent',
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo only — no name text */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center flex-shrink-0 group"
        >
          <span
            className="text-xl font-bold tracking-wider transition-all duration-300 group-hover:scale-110"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(135deg, #00f0ff 0%, #7a00ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AB
          </span>
        </button>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredNavId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredNavId(item.id)}
                onMouseLeave={() => setHoveredNavId(null)}
                className="relative px-3 py-2 text-sm font-medium transition-all duration-300 group whitespace-nowrap"
                style={{
                  color: isActive ? '#00f0ff' : isHovered ? '#e0e0e8' : '#808088',
                }}
              >
                <span className="relative z-10">{item.label}</span>

                {/* Active / Hover pill background */}
                <span
                  className="absolute inset-0 rounded-lg transition-all duration-300"
                  style={{
                    background: isActive
                      ? 'rgba(0, 240, 255, 0.06)'
                      : isHovered
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'transparent',
                  }}
                />

                {/* Bottom indicator — visible on active, slides in on hover */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: isActive ? '60%' : isHovered ? '40%' : '0%',
                    background: 'linear-gradient(90deg, #00f0ff, #7a00ff)',
                    opacity: isActive ? 1 : 0.5,
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* Get In Touch button (desktop) */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300"
            style={{
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: '#00f0ff',
              background: 'rgba(0, 240, 255, 0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 240, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 240, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex-shrink-0 p-2 rounded-lg transition-all duration-300"
          style={{
            color: '#00f0ff',
            background: isMenuOpen ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isMenuOpen ? '500px' : '0',
          opacity: isMenuOpen ? 1 : 0,
        }}
      >
        <nav className="container max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium transition-all duration-300 px-4 py-2.5 rounded-lg relative"
                style={{
                  color: isActive ? '#00f0ff' : '#808088',
                  background: isActive ? 'rgba(0, 240, 255, 0.06)' : 'transparent',
                }}
              >
                {item.label}

                {/* Mobile active indicator */}
                {isActive && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full"
                    style={{
                      background: 'linear-gradient(180deg, #00f0ff, #7a00ff)',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
