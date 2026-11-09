import { useEffect, useRef } from 'preact/hooks';
import type { ComponentChildren, JSX } from 'preact';

type Props = {
  children: ComponentChildren;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
};

export function Reveal({ children, className = '', as = 'div', delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as never}
      class={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
