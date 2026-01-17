import { useState, useEffect } from 'react';

/**
 * Custom hook to manage the Splash Cursor easter egg
 * Activates when user types 'asmith' on the keyboard
 */
export function useSplashCursor() {
    const [isActive, setIsActive] = useState(false);
    const [typedKeys, setTypedKeys] = useState<string>('');

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            // Only track letter keys
            if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
                const newTypedKeys = (typedKeys + e.key.toLowerCase()).slice(-6); // Keep last 6 characters
                setTypedKeys(newTypedKeys);

                // Check if 'asmith' was typed
                if (newTypedKeys.includes('asmith')) {
                    setIsActive((prev) => !prev); // Toggle on/off
                    setTypedKeys(''); // Reset

                    // Show a subtle notification
                    if (!isActive) {
                        console.log('🎨 Splash Cursor activated! Move your mouse to create fluid art.');
                    } else {
                        console.log('👋 Splash Cursor deactivated.');
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [typedKeys, isActive]);

    return { isActive, toggle: () => setIsActive((prev) => !prev) };
}
