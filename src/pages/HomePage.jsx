import { Children, cloneElement, isValidElement, useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import ProjectCard from '../sections/ProjectCard';
import MediaSection from '../sections/MediaSection';
import Footer from '../sections/Footer';

// Project images
const youngLionsImage = "/images/Young Lions.jpg";
const eveeImage = "/images/Evee.jpg";

// Wrapper that automatically applies fadeOut to the last MediaSection before Footer
function SectionsWrapper({ children, isScrollBlurred }) {
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
  // and passing isScrollBlurred to middle sections (not Hero or Footer)
  return childArray.map((child, index) => {
    if (!isValidElement(child)) return child;
    
    const isMiddleSection = child.type !== Footer && child.type !== Hero;
    const additionalProps = {};
    
    if (index === lastMediaIndex) {
      additionalProps.fadeOut = true;
    }
    
    if (isMiddleSection) {
      additionalProps.isScrollBlurred = isScrollBlurred;
    }
    
    if (Object.keys(additionalProps).length > 0) {
      return cloneElement(child, { ...additionalProps, key: index });
    }
    
    return child;
  });
}

export default function HomePage() {
  const location = useLocation();
  const [isScrollBlurred, setIsScrollBlurred] = useState(false);
  const [heroAppearKey, setHeroAppearKey] = useState(0);
  const [contentKey, setContentKey] = useState(0);

  // Detect when returning from case study and trigger re-animation
  useEffect(() => {
    if (location.state?.fromCaseStudy) {
      // Increment key to force re-animation of all data-appear elements
      setContentKey(prev => prev + 1);
      setHeroAppearKey(prev => prev + 1);
      // Clear the state to prevent re-triggering on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleScrollToFooter = useCallback(() => {
    const footer = document.getElementById('footer');
    if (!footer) return;

    // Activate blur effect
    setIsScrollBlurred(true);

    // Estimate scroll duration and unblur early
    const scrollDistance = Math.abs(footer.getBoundingClientRect().top);
    const estimatedDuration = Math.min(Math.max(scrollDistance / 2, 400), 1200);
    
    setTimeout(() => {
      setIsScrollBlurred(false);
    }, Math.max(estimatedDuration - 66, 0));

    // Scroll to footer
    footer.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleScrollToHero = useCallback(() => {
    // Activate blur effect
    setIsScrollBlurred(true);

    // Estimate scroll duration
    const scrollDistance = window.scrollY;
    const estimatedDuration = Math.min(Math.max(scrollDistance / 2, 400), 1200);
    
    // Unblur early
    setTimeout(() => {
      setIsScrollBlurred(false);
    }, Math.max(estimatedDuration - 66, 0));
    
    // Trigger hero appear animation a bit before scroll ends
    setTimeout(() => {
      setHeroAppearKey(prev => prev + 1);
    }, Math.max(estimatedDuration - 150, 0)); // 150ms before scroll ends

    // Scroll to very top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-brand-white flex flex-col items-start w-full">
      <SectionsWrapper isScrollBlurred={isScrollBlurred}>
        {/* Hero Section */}
        <Hero appearKey={heroAppearKey} onWorkWithUsClick={handleScrollToFooter} />
        
        {/* First Media Section - Video type: sound button only in bottom-right */}
        <MediaSection type="video" dataAppear="2" />
        
        {/* Young Lions Competition */}
        <ProjectCard 
          title="Young Lions Competition"
          image={youngLionsImage}
          services={["Brand Strategy", "Copywriting", "Design"]}
        />
        
        {/* Second Media Section - Case Cover: Explore + Sound buttons centered */}
        <MediaSection type="case-cover" appearEarly={true} projectSlug="young-lions" />
        
        {/* Evee. AI Interviewer */}
        <ProjectCard 
          title="Evee. AI Interviewer"
          image={eveeImage}
          services={["Brand Strategy", "Copywriting", "Film-making", "Design"]}
        />
        
        {/* Third Media Section - Case Cover: Explore + Sound buttons centered */}
        <MediaSection type="case-cover" appearEarly={true} projectSlug="evee" />
        
        {/* Footer */}
        <Footer onLogoClick={handleScrollToHero} />
      </SectionsWrapper>
    </div>
  );
}

