
const LoadingSpinner = ({ size = 'md', text = '' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const strokeClasses = {
    sm: 'stroke-[3]',
    md: 'stroke-[3]',
    lg: 'stroke-[2.5]',
    xl: 'stroke-[2]'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`${strokeClasses[size]} text-stone-600 dark:text-stone-400`}
        >
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeOpacity="0.25"
          />
          <path 
            d="M12 2a10 10 0 0 1 10 10" 
            stroke="currentColor" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {text && (
        <p className="text-sm text-stone-500 dark:text-[#8b949e]">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
