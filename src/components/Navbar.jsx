'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <a href="#">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
              <rect width="32" height="32" rx="8" fill="var(--accent-color)" fillOpacity="0.15"/>
              <path d="M9 9V23" stroke="var(--accent-color)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M9 9H13.5C16.5376 9 19 11.4624 19 14.5V17.5C19 20.5376 16.5376 23 13.5 23H9" stroke="var(--accent-color)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M24 9L16.5 16L24 23" stroke="var(--accent-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ color: 'var(--fg-color)' }}>Dhruvil<span>.Dev</span></span>
          </a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button 
          className={styles.themeToggle} 
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
