import { useState, useRef, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className = '' }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl"
      style={{
        animation: isInView ? 'slideInUp 0.6s ease-out forwards' : 'none',
      }}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
        loading="lazy"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
          transformOrigin: 'center',
        }}
      />
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
