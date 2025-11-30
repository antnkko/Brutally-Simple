import Button from '../components/Button';
import IconOpen from '../components/IconOpen';
import IconVolumeOff from '../components/IconVolumeOff';
import { useMediaScrollAnimation, useMediaWithFadeOutAnimation } from '../hooks/useScrollAnimation';

export default function MediaSection({ 
  showControls = true,
  image = null,
  appearEarly = false,
  fadeOut = false
}) {
  // Use fade-out animation for sections that need to fade before footer
  const animationHook = fadeOut ? useMediaWithFadeOutAnimation : useMediaScrollAnimation;
  
  const { sectionRef, mediaRef } = animationHook({
    startScale: 0.85,
    endScale: 1,
    // Project case media appears earlier, hero media uses standard timing
    triggerStart: appearEarly ? "top 130%" : "top 95%",
    triggerEnd: appearEarly ? "top 70%" : "top 40%",
  });

  return (
    <section 
      ref={sectionRef}
      className="flex items-center justify-center min-h-screen w-full -mt-[10vh]"
    >
      <div className="flex items-center justify-center w-[1440px] p-6">
        <div 
          ref={mediaRef}
          className="relative w-full bg-gray-10 rounded-[56px] squircle will-change-transform aspect-[16/10]"
        >
          {/* Image placeholder or actual image */}
          {image && (
            <img 
              src={image} 
              alt="Case study"
              className="absolute inset-0 w-full h-full object-cover rounded-[56px] squircle"
            />
          )}
          
          {/* Button Controls */}
          {showControls && (
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
