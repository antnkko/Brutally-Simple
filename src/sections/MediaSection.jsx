import Button from '../components/Button';
import IconOpen from '../components/IconOpen';
import IconVolumeOff from '../components/IconVolumeOff';
import { useMediaScrollAnimation, useMediaWithFadeOutAnimation } from '../hooks/useScrollAnimation';

/**
 * MediaSection component with different layout types:
 * - "video": Sound button only, positioned in bottom-right (for hero section media)
 * - "case-cover": Explore + Sound buttons, centered at bottom (for project case media)
 */
export default function MediaSection({ 
  type = "case-cover", // "video" | "case-cover"
  image = null,
  appearEarly = false,
  fadeOut = false
}) {
  // Use fade-out animation for sections that need to fade before footer
  const animationHook = fadeOut ? useMediaWithFadeOutAnimation : useMediaScrollAnimation;
  
  // Last section (fadeOut) should fade out later, but scale in normally
  const getAnimationConfig = () => {
    if (fadeOut) {
      return {
        triggerStart: "top 130%",   // Scale in as it enters (same as appearEarly)
        triggerEnd: "top 70%",
        fadeStart: "top 0%",        // Fade out starts later
        fadeEnd: "top -100%",
      };
    }
    if (appearEarly) {
      return { triggerStart: "top 130%", triggerEnd: "top 70%" };
    }
    return { triggerStart: "top 95%", triggerEnd: "top 40%" };
  };

  const { sectionRef, mediaRef } = animationHook({
    startScale: 0.85,
    endScale: 1,
    ...getAnimationConfig(),
  });

  return (
    <section 
      ref={sectionRef}
      className="flex items-center justify-center min-h-screen w-full -mt-[10vh]"
    >
      <div className="flex items-center justify-center w-[1440px] gap-6 overflow-hidden">
        <div 
          ref={mediaRef}
          className="relative w-full h-[900px] bg-gray-10 rounded-[56px] squircle will-change-transform"
        >
          {/* Image placeholder or actual image */}
          {image && (
            <img 
              src={image} 
              alt="Case study"
              className="absolute inset-0 w-full h-full object-cover rounded-[56px] squircle"
            />
          )}
          
          {/* Video type: Sound button only in bottom-right */}
          {type === "video" && (
            <button className="absolute bottom-12 right-12 flex items-center justify-center w-[52px] h-[52px] bg-gray-20 rounded-full overflow-hidden">
              <IconVolumeOff className="text-brand-black" />
            </button>
          )}
          
          {/* Case Cover type: Explore + Sound buttons centered at bottom */}
          {type === "case-cover" && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <Button 
                variant="black" 
                icon={<IconOpen className="text-brand-white" />}
              >
                Explore
              </Button>
              <button className="flex items-center justify-center w-[52px] h-[52px] bg-gray-20 rounded-full overflow-hidden">
                <IconVolumeOff className="text-brand-black" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
