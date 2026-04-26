'use client';
import { portfolioData } from '@/data/portfolioData';
import styles from './Skills.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Icon SVGs
const icons = {
  Languages: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Frontend: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon></svg>,
  Backend: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Database: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
  Tools: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
};

// Map specific brand colors to specific tech names
const skillColors = {
  "Java": "#f89820",
  "C++": "#60a5fa",
  "Python": "#ffc107",
  "React.js": "#61dafb",
  "JavaScript": "#f7df1e",
  "HTML5 & CSS3": "#e34f26",
  "HTML5": "#e34f26",
  "CSS3": "#1572b6",
  "Tailwind CSS": "#38b2ac",
  "Spring Boot": "#6db33f",
  "Spring Security": "#6db33f",
  "REST APIs": "#0ea5e9",
  "JWT": "#a855f7",
  "JWT / OAuth": "#a855f7",
  "MySQL": "#0284c7",
  "JPA/Hibernate": "#eab308",
  "SQL": "#475569",
  "Git & GitHub": "#f05032",
  "Git": "#f05032",
  "GitHub": "#ffffff",
  "Maven": "#c71585",
  "Postman": "#ff6c37",
  "IntelliJ IDEA": "#ec4899",
  "VS Code": "#0078d7"
};

export default function Skills() {
  const { skillsDetailed } = portfolioData;
  const revealRef = useScrollReveal();

  const renderSkillCategory = (title, items, icon, glowColor, gridArea, animIndex) => (
    <div className={`${styles.card} ${styles['floatingAnim' + animIndex]}`} style={{ gridArea }}>
      {/* Background ambient glow matching category color */}
      <div 
        className={styles.ambientGlow} 
        style={{ background: `radial-gradient(circle at 0% 0%, ${glowColor}40 0%, transparent 60%)` }}
      ></div>
      
      <div className={styles.cardHeader}>
        <div className={styles.iconBox} style={{ color: glowColor }}>
          {icon}
        </div>
        <h3 className={styles.categoryTitle} style={{ color: glowColor }}>{title.toUpperCase()}</h3>
      </div>
      
      <div className={styles.skillFlexbox}>
        {items.map((skill, index) => {
          // If detailed fallback matching isn't perfect, default to a neutral gray or white
          const brandColor = skillColors[skill.name] || '#a1a1aa';
          
          return (
            <div 
              className={styles.skillBadge} 
              key={index}
              style={{
                borderColor: `${brandColor}40`, /* 25% opacity border */
                backgroundColor: `${brandColor}10`, /* 6% opacity bg */
                color: brandColor
              }}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <div className="container reveal" ref={revealRef}>
        
        <div className={styles.sectionHeader}>
          <span className={styles.preTitle}>TECH STACK</span>
          <h2 className={styles.mainTitle}>Skills & Technologies</h2>
        </div>

        {/* CSS Grid matching the reference image layout */}
        <div className={styles.skillsGrid}>
          {renderSkillCategory("Programming Languages", skillsDetailed.languages, icons.Languages, "#f97316", "lang", 1)}
          {renderSkillCategory("Frontend", skillsDetailed.frontend, icons.Frontend, "#0ea5e9", "front", 2)}
          {renderSkillCategory("Backend", skillsDetailed.backend, icons.Backend, "#22c55e", "back", 3)}
          {renderSkillCategory("Database", skillsDetailed.database, icons.Database, "#3b82f6", "data", 2)}
          {renderSkillCategory("Tools & IDEs", skillsDetailed.tools, icons.Tools, "#ef4444", "tools", 1)}
        </div>
      </div>
    </section>
  );
}
