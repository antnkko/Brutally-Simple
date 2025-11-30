import IconDot from '../components/IconDot';

export default function ProjectCard({ 
  title, 
  image, 
  services = [] 
}) {
  return (
    <section className="flex flex-col items-center justify-center h-[900px] w-full">
      <div className="flex flex-col items-center gap-[38px] px-[294px] w-full">
        {/* Project Logo */}
        <div className="relative w-[100px] h-[100px] rounded-[42px] squircle overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-[42px] squircle"
          />
        </div>
        
        {/* Project Title */}
        <h2 className="font-serif text-h1 text-brand-black text-center tracking-[-0.335px]">
          {title}
        </h2>
        
        {/* Services */}
        <div className="flex items-center gap-3 pt-[2px]">
          {services.map((service, index) => (
            <div key={service} className="flex items-center gap-3">
              {index > 0 && (
                <IconDot className="text-gray-20" />
              )}
              <span className="font-serif text-label text-gray-60 whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

