import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

const categoryColors: Record<string, string> = {
  FINANCE: "bg-category-finance",
  TECH: "bg-category-tech",
  HEALTH: "bg-category-health",
  TRAVEL: "bg-category-travel",
};

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const colorClass = categoryColors[category.toUpperCase()] || "bg-category-default";

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-primary-foreground",
        colorClass,
        className
      )}
    >
      {category}
    </span>
  );
}
