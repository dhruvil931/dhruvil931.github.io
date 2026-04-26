import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--fg-secondary)', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} Dhruvil Kapadiya. Crafted with precision.</p>
      </footer>
    </main>
  );
}
