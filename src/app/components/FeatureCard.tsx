import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
