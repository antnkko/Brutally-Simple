import Hero from './sections/Hero';
import ProjectCard from './sections/ProjectCard';
import MediaSection from './sections/MediaSection';
import Footer from './sections/Footer';

// Project images
const youngLionsImage = "/images/Young Lions.jpg";
const eveeImage = "/images/Evee.jpg";

export default function App() {
  return (
    <div className="bg-brand-white flex flex-col items-start w-full">
      {/* Hero Section */}
      <Hero />
      
      {/* First Media Section - with controls */}
      <MediaSection showControls={true} />
      
      {/* Young Lions Competition */}
      <ProjectCard 
        title="Young Lions Competition"
        image={youngLionsImage}
        services={["Brand Strategy", "Copywriting", "Design"]}
      />
      
      {/* Second Media Section - without controls */}
      <MediaSection showControls={false} />
      
      {/* Evee. AI Interviewer */}
      <ProjectCard 
        title="Evee. AI Interviewer"
        image={eveeImage}
        services={["Brand Strategy", "Copywriting", "Film-making", "Design"]}
      />
      
      {/* Third Media Section - without controls */}
      <MediaSection showControls={false} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

