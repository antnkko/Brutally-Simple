import Button from '../components/Button';
import { useTextScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero({ enableAppearAnimation = true, onWorkWithUsClick }) {
  const { sectionRef, contentRef } = useTextScrollAnimation({
    pinDuration: "85%",  // Long enough for text to fully fade before media overlaps
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
          Make it Brutally Simple.
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
