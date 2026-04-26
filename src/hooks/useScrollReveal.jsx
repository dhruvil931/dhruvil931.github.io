'use client';
import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('reveal-visible');
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);
    
    // Initial class for CSS to target
    element.classList.add('reveal-hidden');

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return ref;
}
