export default function Button({ 
  children, 
  variant = "black", 
  href,
  className = "",
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-[14px] px-6 pt-[11px] pb-[12px] font-extrabold-display text-button tracking-[0px] cursor-pointer rounded-full";
  
  const variants = {
    black: "bg-brand-black text-brand-white",
    white: "bg-brand-white text-brand-black",
    gray: "bg-gray-20 text-brand-black",
  };
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
  
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
