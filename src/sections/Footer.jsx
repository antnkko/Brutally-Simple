import { useState } from 'react';
import Button from '../components/Button';
import { useMediaScrollAnimation, useBlurFadeIn } from '../hooks/useScrollAnimation';

export default function Footer({ enableBlurFadeIn = false, onLogoClick }) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('x@brutally.simple');
    } catch (e) {
      // Fallback for older browsers or when clipboard access is denied
      console.log('Clipboard write failed:', e);
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const { sectionRef, mediaRef } = useMediaScrollAnimation({
    startScale: 0.63,
    endScale: 1,
    triggerStart: "top 130%",
    triggerEnd: "top 26%",
  });

  // Blur fade-in for scroll entrance (only when enabled)
  const { ref: blurRef, isVisible } = useBlurFadeIn({ threshold: 0.1 });

  const blurClasses = enableBlurFadeIn 
    ? `blur-fade-in ${isVisible ? 'is-visible' : ''}` 
    : '';

  return (
    <footer 
      id="footer"
      ref={(el) => {
        sectionRef.current = el;
        if (enableBlurFadeIn) blurRef.current = el;
      }}
      className={`flex flex-col gap-3 min-h-screen w-full p-3 mt-[26vh] ${blurClasses}`}
    >
      {/* Black Box */}
      <div 
        ref={mediaRef}
        className="flex-1 flex flex-col items-center bg-brand-black rounded-[36px] min-h-px min-w-px pt-0 pb-12 will-change-transform"
      >
        {/* Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[25px] w-full min-h-px min-w-px">
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
            <div 
              className="btn-bounce-wrapper"
              key={emailCopied ? 'copied' : isHovered ? 'email' : 'default'}
            >
              <Button 
                variant="white" 
                onClick={handleCopyEmail}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="blur-morph-text">
                  <span>{emailCopied ? 'Email copied' : isHovered ? 'x@brutally.simple' : 'Copy email'}</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Socials Container */}
        <div className="flex items-center gap-6 font-serif text-label tracking-[0.18px]">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            onMouseEnter={() => setHoveredSocial('instagram')}
            onMouseLeave={() => setHoveredSocial(null)}
            className={`cursor-pointer transition-colors duration-350 ${
              hoveredSocial === 'instagram'
                ? 'text-brand-yellow'
                : hoveredSocial === 'linkedin'
                ? 'text-gray-80'
                : 'text-gray-50'
            }`}
          >
            Instagram
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            onMouseEnter={() => setHoveredSocial('linkedin')}
            onMouseLeave={() => setHoveredSocial(null)}
            className={`cursor-pointer transition-colors duration-350 ${
              hoveredSocial === 'linkedin'
                ? 'text-brand-yellow'
                : hoveredSocial === 'instagram'
                ? 'text-gray-80'
                : 'text-gray-50'
            }`}
          >
            LinkedIn
          </a>
        </div>
      </div>
      
      {/* Logo Container */}
      <button className="flex items-center justify-center w-full p-0" onClick={onLogoClick}>
        <span className="font-serif text-h1-mobile text-brand-black text-center tracking-[-0.25px] leading-[56px]">
          S.
        </span>
      </button>
    </footer>
  );
}
