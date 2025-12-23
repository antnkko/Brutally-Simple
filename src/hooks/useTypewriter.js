import { useState, useEffect } from 'react';

/**
 * Hook for typewriter effect that adds text character by character
 * @param {Object} options - Configuration options
 * @param {string} options.text - Text to type out
 * @param {number} options.speed - Milliseconds per character (default: 60)
 * @param {number} options.delay - Delay before starting in milliseconds (default: 0)
 * @param {boolean} options.enabled - Whether the typewriter should run (default: true)
 * @returns {string} - Current displayed text
 */
export function useTypewriter({ text = '', speed = 60, delay = 0, enabled = true }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!enabled || !text) {
      setDisplayedText('');
      return;
    }

    let timeoutId;
    let currentIndex = 0;

    const startTyping = () => {
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, speed);
        }
      };

      typeNextChar();
    };

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay, enabled]);

  return displayedText;
}





