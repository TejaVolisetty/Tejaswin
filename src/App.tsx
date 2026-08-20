/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SectionId } from './types';
import { Navbar } from './components/Navbar';
import { SideNavRail } from './components/SideNavRail';
import { FooterBar } from './components/FooterBar';
import { SakuraCanvas } from './components/SakuraCanvas';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

const SECTIONS_ORDER: SectionId[] = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'certifications',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [sakuraEnabled, setSakuraEnabled] = useState(true);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const handleNavigate = useCallback((sectionId: SectionId) => {
    setActiveSection(sectionId);
    isProgrammaticScroll.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);
  }, []);

  const handleNextSection = useCallback(() => {
    const currentIndex = SECTIONS_ORDER.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % SECTIONS_ORDER.length;
    handleNavigate(SECTIONS_ORDER[nextIndex]);
  }, [activeSection, handleNavigate]);

  const handlePrevSection = useCallback(() => {
    const currentIndex = SECTIONS_ORDER.indexOf(activeSection);
    const prevIndex = (currentIndex - 1 + SECTIONS_ORDER.length) % SECTIONS_ORDER.length;
    handleNavigate(SECTIONS_ORDER[prevIndex]);
  }, [activeSection, handleNavigate]);

  // Scroll-Spy with IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isProgrammaticScroll.current) return;

      // Find the entry that has the highest intersection ratio
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by intersectionRatio descending
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topSectionId = visibleEntries[0].target.id as SectionId;
        if (topSectionId && SECTIONS_ORDER.includes(topSectionId)) {
          setActiveSection(topSectionId);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: [0.15, 0.4, 0.7],
      rootMargin: '-10% 0px -40% 0px',
    });

    SECTIONS_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in form inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        // Allow standard scroll or step navigation
        const currentIndex = SECTIONS_ORDER.indexOf(activeSection);
        if (currentIndex < SECTIONS_ORDER.length - 1) {
          handleNavigate(SECTIONS_ORDER[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const currentIndex = SECTIONS_ORDER.indexOf(activeSection);
        if (currentIndex > 0) {
          handleNavigate(SECTIONS_ORDER[currentIndex - 1]);
        }
      } else if (e.key >= '1' && e.key <= '7') {
        const num = parseInt(e.key, 10) - 1;
        if (num >= 0 && num < SECTIONS_ORDER.length) {
          handleNavigate(SECTIONS_ORDER[num]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, handleNavigate]);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0c16] text-[#e8e9f3] flex flex-col justify-between overflow-x-hidden selection:bg-rose-600 selection:text-white">
      {/* Falling Sakura Cherry Blossom Canvas */}
      <SakuraCanvas enabled={sakuraEnabled} />

      {/* Top Fixed Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        sakuraEnabled={sakuraEnabled}
        onToggleSakura={() => setSakuraEnabled(!sakuraEnabled)}
      />

      {/* Left Stepper Rail */}
      <SideNavRail
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onNextSection={handleNextSection}
      />

      {/* Continuous Vertical Scroll Sections */}
      <main className="flex-1 w-full relative z-10 flex flex-col">
        <HomeSection onNavigate={handleNavigate} />
        <AboutSection onNavigate={handleNavigate} />
        <SkillsSection onNavigate={handleNavigate} />
        <ProjectsSection onNavigate={handleNavigate} />
        <ExperienceSection onNavigate={handleNavigate} />
        <CertificationsSection onNavigate={handleNavigate} />
        <ContactSection onNavigate={handleNavigate} />
      </main>

      {/* Bottom Footer / Status Ticker */}
      <FooterBar
        activeSection={activeSection}
        onNextSection={handleNextSection}
      />
    </div>
  );
}
