"use client";
import { portfolioData } from "@/data/portfolioData";
import styles from "./Education.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Education() {
  const { education, activities } = portfolioData;
  const eduReveal = useScrollReveal();
  const actReveal = useScrollReveal();

  return (
    <section className={`section ${styles.eduSection}`} id="education">
      <div className="container">
        <div ref={eduReveal} className={`reveal ${styles.sectionBlock}`}>
          <h2 className="section-title">Education</h2>
          <div className={styles.cardList}>
            {education.map((edu, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <span className={styles.duration}>{edu.duration}</span>
                </div>
                <h4 className={styles.institution}>
                  {edu.institution} | {edu.location}
                </h4>
                <p className={styles.coursework}>
                  <strong>Coursework:</strong> {edu.coursework}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={actReveal}
          className={`reveal ${styles.sectionBlock}`}
          style={{ marginTop: "5rem" }}
        >
          <h2 className="section-title">Certifications & Activities</h2>

          <div className={styles.cardList}>
            {activities.map((act, index) => (
              <a
                href={act.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                key={index}
              >
                <h3 className={styles.degree}>{act.title}</h3>
                <h4 className={styles.institution}>{act.organization}</h4>
                <p className={styles.coursework}>{act.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
