import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}