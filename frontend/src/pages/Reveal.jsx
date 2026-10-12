// Reveal.jsx
// Replicates the original .reveal / IntersectionObserver scroll animation
// Wrap any element: <Reveal><ServiceCard /></Reveal>

import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';

export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function Reveal({ children, delay = 0, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Box
      ref={ref}
      opacity={visible ? 1 : 0}
      transform={visible ? 'translateY(0)' : 'translateY(20px)'}
      transition={`opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`}
      {...rest}
    >
      {children}
    </Box>
  );
}
