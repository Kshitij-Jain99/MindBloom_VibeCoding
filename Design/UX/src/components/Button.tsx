import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  icon,
  className = ''
}) => {
  const baseClasses = 'flex items-center justify-center rounded-full py-4 px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-[#5a4a42] text-white hover:bg-[#4a3a32] focus:ring-[#5a4a42]',
    secondary: 'bg-[#f8a978] text-[#5a4a42] hover:bg-[#f69c62] focus:ring-[#f8a978]',
    outline: 'border-2 border-[#5a4a42] text-[#5a4a42] hover:bg-[#f8f5f2] focus:ring-[#5a4a42]'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>;
};
export default Button;