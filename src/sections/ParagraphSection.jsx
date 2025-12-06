import { useTextScrollAnimation, useBlurFadeIn } from '../hooks/useScrollAnimation';

export default function ParagraphSection({ 
  title = "Title", 
  text = "Text",
  enableBlurFadeIn = true, // Enable blur fade-in by default (used on case study pages)
}) {
  const { sectionRef, contentRef } = useTextScrollAnimation({
    pinDuration: "85%",
  });

  // Blur fade-in for scroll entrance (only when enabled)
  const { ref: blurRef, isVisible } = useBlurFadeIn({ threshold: 0.2 });

  const blurClasses = enableBlurFadeIn 
    ? `blur-fade-in ${isVisible ? 'is-visible' : ''}` 
    : '';

  return (
    <section 
      ref={(el) => {
        sectionRef.current = el;
        if (enableBlurFadeIn) blurRef.current = el;
      }}
      className={`flex flex-col items-center justify-center h-[85vh] w-full pointer-events-none ${blurClasses}`}
    >
      <div 
        ref={contentRef}
        className="flex flex-col gap-[26px] w-[400px] will-change-transform pointer-events-auto"
      >
        <h3 className="font-serif text-h2 text-brand-black">
          {title}
        </h3>
        <p className="font-display text-body text-gray-60">
          {text}
        </p>
      </div>
    </section>
  );
}
