import { useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useTypingEffect(text: string, speed: number = 100) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        // If user prefers reduced motion, show full text immediately
        if (prefersReducedMotion) {
            setDisplayedText(text);
            setIsComplete(true);
            return;
        }

        let timer: number | null = null;

        // Add initial delay before starting the typing animation
        const initialDelay = setTimeout(() => {
            let currentIndex = 0;
            setDisplayedText('');
            setIsComplete(false);

            timer = setInterval(() => {
                if (currentIndex < text.length) {
                    // Capture the character before setState to prevent closure issues
                    const char = text[currentIndex];
                    setDisplayedText((prev) => prev + char);
                    currentIndex++;
                } else {
                    setIsComplete(true);
                    if (timer) clearInterval(timer);
                }
            }, speed);
        }, 500);

        return () => {
            clearTimeout(initialDelay);
            if (timer) clearInterval(timer);
        };
    }, [text, speed, prefersReducedMotion]);

    return { displayedText, isComplete };
}

