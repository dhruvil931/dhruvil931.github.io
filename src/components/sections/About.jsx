'use client';
import { portfolioData } from '@/data/portfolioData';
import styles from './About.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { about } = portfolioData; // Still taking title from data
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.aboutSection}`} id="about">
      <div className="container reveal" ref={revealRef}>
        
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainTitle}>{about.title}</h2>
        </div>

        <div className={styles.aboutGrid}>
          
          {/* Main Bio Card */}
          <div className={`${styles.glassCard} ${styles.bioCard}`}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.description}>
              I am a dedicated Computer Engineering student at <strong>LDRP Institute of Technology and Research</strong> with a strong passion for software development.
              <br/><br/>
              My expertise lies in <span className={styles.highlight}>Java Full Stack Web Development</span>, seamlessly bridging robust <strong>Spring Boot</strong> backend architectures with dynamic, interactive <strong>React</strong> frontends. 
              <br/><br/>
              I thrive on rapid prototyping, solving complex problems with Data Structures and Algorithms, and designing normalized relational databases to build highly scalable, end-to-end solutions.
            </p>
          </div>

          {/* Bento Stats / Mini Cards */}
          <div className={styles.bentoGrid}>
            
            <div className={`${styles.glassCard} ${styles.bentoItem}`}>
              <div className={styles.bentoIcon}>🎓</div>
              <h4>Education</h4>
              <p>Computer Engineering at LDRP-ITR</p>
            </div>
            
            <div className={`${styles.glassCard} ${styles.bentoItem}`}>
              <div className={styles.bentoIcon}>👨‍💻</div>
              <h4>LeetCode</h4>
              <p>Consistently solving algorithmic challenges to sharpen my problem-solving skills.</p>
            </div>

            <div className={`${styles.glassCard} ${styles.bentoItem} ${styles.bentoWide}`}>
              <div className={styles.bentoIcon}>💡</div>
              <h4>GeeksforGeeks</h4>
              <p>Strengthening core Computer Science fundamentals and mastering Data Structures and Algorithms.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
