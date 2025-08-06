import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from "framer-motion";

export const StaggeredFade = ({ 
  text, 
  className = '',
  ...rest
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.04 },
    }),
  };

  const letters = text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      {...rest}
    >
      {letters.map((letter, i) => (
        <motion.span key={`${letter}-${i}`} variants={variants} custom={i}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};