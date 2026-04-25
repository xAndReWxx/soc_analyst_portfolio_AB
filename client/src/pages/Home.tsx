import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import AchievementsSection from '@/components/AchievementsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ParticleBackground from '@/components/ParticleBackground';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Particle background */}
      <ParticleBackground />

      {/* Header/Navigation */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}
