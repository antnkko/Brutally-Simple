import Button from '../components/Button';
import IconOpen from '../components/IconOpen';
import IconVolumeOff from '../components/IconVolumeOff';

export default function MediaSection({ 
  showControls = true,
  image = null 
}) {
  return (
    <section className="flex items-center justify-center h-[900px] w-full">
      <div className="flex items-center justify-center gap-6 h-[900px] w-[1440px] overflow-hidden">
        <div className="relative flex-1 h-full min-h-px min-w-px bg-gray-10 rounded-[56px] squircle">
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

