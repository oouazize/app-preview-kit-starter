import * as LucideIcons from "lucide-react"

interface IconProps {
  name: string
  className?: string
}

export function IconRenderer({ name, className = "w-6 h-6" }: IconProps) {
  const IconComponent = (LucideIcons as any)[name]

  if (!IconComponent) {
    return <div className={className} />
  }

  return <IconComponent className={className} />
}
