import Button from '../components/Button';
import { useMediaScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { sectionRef, mediaRef } = useMediaScrollAnimation({
    startScale: 0.63,
    endScale: 1,
    triggerStart: "top 130%",
    triggerEnd: "top 26%",
  });

  return (
    <footer 
      ref={sectionRef}
      className="flex flex-col gap-3 min-h-screen w-full p-3 mt-[26vh]"
    >
      {/* Black Box */}
      <div 
        ref={mediaRef}
        className="flex-1 flex flex-col items-center bg-brand-black rounded-card squircle min-h-px min-w-px pt-0 pb-12 will-change-transform"
      >
        {/* Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[38px] w-full min-h-px min-w-px">
          {/* Headline */}
          <div className="font-serif text-h1 text-brand-white text-center tracking-[-0.335px]">
            <p>Say less.</p>
            <p>Mean more.</p>
          </div>
          
          {/* Button Container */}
          <div className="flex items-center gap-3">
            <Button variant="white" href="https://calendly.com/">
              Book a call
            </Button>
            <Button variant="white">
              Copy email
            </Button>
          </div>
        </div>
        
        {/* Socials Container */}
        <div className="flex items-center gap-6 font-serif text-label text-gray-50 tracking-[0.18px]">
          <span>Instagram</span>
          <span>LinkedIn</span>
        </div>
      </div>
      
      {/* Logo Container */}
      <button className="flex items-center justify-center w-full p-0">
        <span className="font-serif text-h1-mobile text-brand-black text-center tracking-[-0.25px] leading-[56px]">
          S.
        </span>
      </button>
    </footer>
  );
}
