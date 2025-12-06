import { Children, cloneElement, isValidElement } from 'react';
import { useNavigate } from 'react-router-dom';
import IconCross from '../components/IconCross';
import ProjectCard from '../sections/ProjectCard';
import MediaSection from '../sections/MediaSection';
import ParagraphSection from '../sections/ParagraphSection';
import Footer from '../sections/Footer';

// Project image
const youngLionsImage = "/images/Young Lions.jpg";

// Wrapper that automatically applies fadeOut to the last MediaSection before Footer
function SectionsWrapper({ children }) {
  const childArray = Children.toArray(children);
  
  // Find the index of Footer
  const footerIndex = childArray.findIndex(
    (child) => isValidElement(child) && child.type === Footer
  );
  
  // Find the last MediaSection before Footer
  let lastMediaIndex = -1;
  for (let i = footerIndex - 1; i >= 0; i--) {
    const child = childArray[i];
    if (isValidElement(child) && child.type === MediaSection) {
      lastMediaIndex = i;
      break;
    }
  }
  
  // Clone children, adding fadeOut to the last MediaSection before Footer
  return childArray.map((child, index) => {
    if (index === lastMediaIndex && isValidElement(child)) {
      return cloneElement(child, { fadeOut: true, key: index });
    }
    return child;
  });
}

export default function YoungLionsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-brand-white flex flex-col items-start w-full relative">
      {/* Close Button - Fixed top-right */}
      <button 
        className="fixed top-[46px] right-[46px] z-50 flex items-center justify-center w-[52px] h-[52px] bg-gray-10 rounded-full overflow-hidden hover:bg-gray-20 transition-colors"
        onClick={() => navigate('/')}
      >
        <IconCross className="text-brand-black" />
      </button>

      <SectionsWrapper>
        {/* Hero Section - Project Card */}
        <ProjectCard 
          title="Young Lions Competition"
          image={youngLionsImage}
          services={["Brand Strategy", "Copywriting", "Design"]}
          enableAppearAnimation={true}
        />
        
        {/* Video Media Section */}
        <MediaSection type="video" dataAppear="4" />
        
        {/* First Paragraph Section */}
        <ParagraphSection 
          title="Title"
          text="Text"
          enableBlurFadeIn={false}
        />
        
        {/* Two-Column Image Layout */}
        <MediaSection layout="two-column" type="image" appearEarly={true} />
        
        {/* Second Paragraph Section */}
        <ParagraphSection 
          title="Title"
          text="Text"
          enableBlurFadeIn={false}
        />
        
        {/* Footer */}
        <Footer />
      </SectionsWrapper>
    </div>
  );
}
