import * as LucideIcons from "lucide-react";

export function DynamicIcon({ name, className = "w-6 h-6", ...props }) {
  const Icon = LucideIcons[name] || LucideIcons.Box;
  return <Icon className={className} {...props} />;
}
