export default function Button({ 
  children, 
  variant = "black", 
  href,
  className = "",
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-[8px] rounded-full pt-[11px] pb-[12px] font-extrabold-display text-button tracking-[0.18px] overflow-hidden";
  
  // Asymmetric padding: less on right when icon is present
  const paddingStyles = icon ? "pl-[24px] pr-[18px]" : "px-[24px]";
  
  const variants = {
    black: "bg-brand-black text-brand-white",
    white: "bg-brand-white text-brand-black",
    gray: "bg-gray-20 text-brand-black",
  };
  
  const combinedClassName = `${baseStyles} ${paddingStyles} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        <span>{children}</span>
        {icon && <span className="-mt-[1px]">{icon}</span>}
      </a>
    );
  }
  
  return (
    <button className={combinedClassName} {...props}>
      <span>{children}</span>
      {icon && <span className="-mt-[1px]">{icon}</span>}
    </button>
  );
}

