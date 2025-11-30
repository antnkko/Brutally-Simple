export default function IconOpen({ className = "" }) {
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <path d="M6 12V18H12" stroke="currentColor" strokeWidth="3"/>
      <path d="M18 12V6H12" stroke="currentColor" strokeWidth="3"/>
    </svg>
  );
}
