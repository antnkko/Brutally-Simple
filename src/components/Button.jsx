import { Squircle } from '@squircle-js/react';

export default function Button({ 
  children, 
  variant = "black", 
  href,
  className = "",
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-[14px] px-6 pt-[11px] pb-[12px] font-extrabold-display text-button tracking-[0px]";
  
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
  
  // Capsule with more pronounced continuous corner smoothing
  const squircleProps = {
    cornerRadius: 9999,
    cornerSmoothing: 1,
    className: combinedClassName,
  };
  
  if (href) {
    return (
      <Squircle as="a" href={href} {...squircleProps} {...props}>
        {content}
      </Squircle>
    );
  }
  
  return (
    <Squircle as="button" {...squircleProps} {...props}>
      {content}
    </Squircle>
  );
}
