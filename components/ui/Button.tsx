import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  loading?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-neutral-white focus:ring-primary shadow-lg hover:shadow-xl',
    secondary: 'bg-neutral-900 hover:bg-neutral-800 text-neutral-white focus:ring-neutral-800 border border-neutral-800',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-neutral-white focus:ring-primary',
    ghost: 'text-neutral-600 hover:text-primary hover:bg-neutral-100 focus:ring-neutral-300',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        loading && 'cursor-wait',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="mr-2" size={20} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="ml-2" size={20} />}
        </>
      )}
    </button>
  )
}