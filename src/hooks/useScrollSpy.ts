import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently in view for navigation highlighting.
 * Uses Intersection Observer for performance.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                {
                    rootMargin: `-${offset}px 0px -50% 0px`,
                    threshold: 0,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds, offset]);

    return activeSection;
}
