import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useInViewMotion = (options = { amount: 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -80px 0px',
    amount: options.amount
  });

  return { ref, isInView };
};
