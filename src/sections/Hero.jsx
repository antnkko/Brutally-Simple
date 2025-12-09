import Button from '../components/Button';
import { useTextScrollAnimation } from '../hooks/useScrollAnimation';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero({ enableAppearAnimation = true, onWorkWithUsClick }) {
  const { sectionRef, contentRef } = useTextScrollAnimation({
    pinDuration: "85%",  // Long enough for text to fully fade before media overlaps
  });

  const fadeInDuration = 630; // matches --appear-duration from CSS
  const typingSpeed = 80; // milliseconds per character
  const prefixDelay = 500; // additional delay after fade-in completes
  const prefixText = 'Make it ';

  const prefixTyped = useTypewriter({
    text: prefixText,
    speed: typingSpeed,
    delay: fadeInDuration + prefixDelay,
    enabled: enableAppearAnimation,
  });

  return (
    <section 
      id="hero"
      ref={sectionRef}
      className="flex flex-col items-center justify-center h-[85vh] w-full pointer-events-none"
    >
      <div 
        ref={contentRef}
        className="relative z-20 flex flex-col items-center gap-[25px] px-[294px] w-full will-change-transform pointer-events-auto"
      >
        <h1 
          {...(enableAppearAnimation && { 'data-appear': '1' })}
          className="font-serif text-h1 text-brand-black text-center tracking-[-0.335px]"
        >
          <span>{prefixTyped}</span>
          <span>Brutally Simple</span>
        </h1>
        <div {...(enableAppearAnimation && { 'data-appear': '3' })}>
          <Button variant="black" onClick={onWorkWithUsClick}>
            Work with us
          </Button>
        </div>
      </div>
    </section>
  );
}
