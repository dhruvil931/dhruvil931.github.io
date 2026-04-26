'use client';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import styles from './Contact.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { contact } = portfolioData;
  const revealRef = useScrollReveal();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          _subject: "New Message from Portfolio Website!"
        })
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <div className={`container reveal ${styles.contactContainer}`} ref={revealRef}>
        <div className={styles.contactHeader}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind or looking for a skilled developer to join your team? 
            Let's build something exceptional together.
          </p>
          <div className={styles.contactDetails}>
            <a href={`mailto:${contact.email}`} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{contact.email}</span>
              </div>
            </a>
            
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>{contact.phone}</span>
              </div>
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href={contact.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={contact.github} className={styles.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={contact.leetcode} className={styles.socialLink} target="_blank" rel="noopener noreferrer">LeetCode</a>
            <a href={contact.gfg} className={styles.socialLink} target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
          </div>
          <button 
            type="submit" 
            className={styles.submitBtn} 
            disabled={status === 'sending'}
            style={{
              backgroundColor: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : '',
            }}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error! Try Again' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
