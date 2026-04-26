'use client';
import { portfolioData } from '@/data/portfolioData';
import styles from './Projects.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const { projects } = portfolioData;
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.projectsSection}`} id="projects">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section-title">Notable Projects</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              className={styles.projectCard} 
              key={project.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                
                <ul className={styles.featureList}>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <ul className={styles.cardTech}>
                    {project.techStack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <div className={styles.cardLinks}>
                    <a href={project.github} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href={project.link} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
