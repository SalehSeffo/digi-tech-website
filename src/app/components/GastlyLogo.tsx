import { DigiTechIcon } from './DigiTechIcon';

interface GastlyLogoProps {
  size?: number;
  variant?: 'primary' | 'slate' | 'orange' | 'dark-reversed' | 'black-reversed';
  className?: string;
}

/**
 * @deprecated Use DigiTechIcon instead. This component is kept for backward compatibility.
 */
export function GastlyLogo({ size = 64, className = '' }: GastlyLogoProps) {
  return <DigiTechIcon size={size} className={className} />;
}
