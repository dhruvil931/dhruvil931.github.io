"use client";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import styles from "./Hero.module.css";

export default function Hero() {
  const { hero } = portfolioData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section className={styles.heroSection} id="home">
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content Area with Initial Load Stagger */}
        <div
          className={`${styles.content} ${mounted ? styles.animateContent : ""}`}
        >
          <p className={styles.greeting}>Hi, I am</p>
          <h1 className={styles.name}>{hero.name}</h1>
          <h2 className={styles.role}>{hero.role}</h2>
          <p className={styles.valueStatement}>{hero.valueStatement}</p>
          <div className={styles.ctaGroup}>
            <a
              href="https://drive.google.com/file/d/1l8SxfK8v5o3o1qSpxUkUtxSUtDybExVO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              {hero.cta1}
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              {hero.cta2}
            </a>
          </div>
        </div>

        {/* Right Side Visual Area (Abstract Glassmorphism) */}
        <div
          className={`${styles.visualArea} ${mounted ? styles.animateVisual : ""}`}
        >
          <div className={styles.abstractVisual}>
            <div className={styles.glowSphere}></div>

            <div className={`${styles.glassCard} ${styles.card1}`}>
              <div className={styles.cardIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div className={styles.cardText}>
                <h4>Scalable Backend</h4>
                <p>Java & Spring Boot</p>
              </div>
            </div>

            <div className={`${styles.glassCard} ${styles.card2}`}>
              <div className={styles.cardIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                </svg>
              </div>
              <div className={styles.cardText}>
                <h4>Dynamic Frontend</h4>
                <p>React & JS Ecosystem</p>
              </div>
            </div>

            <div className={`${styles.glassCard} ${styles.card3}`}>
              <div className={styles.cardIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div className={styles.cardText}>
                <h4>Optimized Data</h4>
                <p>MySQL & JPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
