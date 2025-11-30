import React, { Children, cloneElement, isValidElement } from 'react';
import Hero from './sections/Hero';
import ProjectCard from './sections/ProjectCard';
import MediaSection from './sections/MediaSection';
import Footer from './sections/Footer';

// Project images
const youngLionsImage = "/images/Young Lions.jpg";
const eveeImage = "/images/Evee.jpg";

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

export default function App() {
  return (
    <div className="bg-brand-white flex flex-col items-start w-full">
      <SectionsWrapper>
        {/* Hero Section */}
        <Hero />
        
        {/* First Media Section - Video type: sound button only in bottom-right */}
        <MediaSection type="video" />
        
        {/* Young Lions Competition */}
        <ProjectCard 
          title="Young Lions Competition"
          image={youngLionsImage}
          services={["Brand Strategy", "Copywriting", "Design"]}
        />
        
        {/* Second Media Section - Case Cover: Explore + Sound buttons centered */}
        <MediaSection type="case-cover" appearEarly={true} />
        
        {/* Evee. AI Interviewer */}
        <ProjectCard 
          title="Evee. AI Interviewer"
          image={eveeImage}
          services={["Brand Strategy", "Copywriting", "Film-making", "Design"]}
        />
        
        {/* Third Media Section - Case Cover: Explore + Sound buttons centered */}
        <MediaSection type="case-cover" appearEarly={true} />
        
        {/* Footer */}
        <Footer />
      </SectionsWrapper>
    </div>
  );
}

