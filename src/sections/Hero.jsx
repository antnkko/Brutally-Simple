import Button from '../components/Button';
import { useTextScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { sectionRef, contentRef } = useTextScrollAnimation({
    pinDuration: "85%",  // Long enough for text to fully fade before media overlaps
  });

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col items-center justify-center h-[85vh] w-full pointer-events-none"
    >
      <div 
        ref={contentRef}
        className="relative z-20 flex flex-col items-center gap-[38px] px-[294px] w-full will-change-transform pointer-events-auto"
      >
        <h1 className="font-serif text-h1 text-brand-black text-center tracking-[-0.335px]">
          Make it Brutally Simple.
        </h1>
        <Button variant="black">
          Work with us
        </Button>
      </div>
    </section>
  );
}
