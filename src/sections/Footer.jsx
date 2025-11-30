import Button from '../components/Button';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 h-[1040px] w-full p-3">
      {/* Black Box */}
      <div className="flex-1 flex flex-col items-center bg-brand-black rounded-card min-h-px min-w-px pt-0 pb-12">
        {/* Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[38px] w-full min-h-px min-w-px">
          {/* Headline */}
          <div className="font-serif text-h1-mobile text-brand-white text-center tracking-[-0.25px] leading-[56px]">
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

