import { Blog } from "@/types/blog";
import { CategoryBadge } from "./CategoryBadge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface BlogCardProps {
  blog: Blog;
  isSelected: boolean;
  onClick: () => void;
}

export function BlogCard({ blog, isSelected, onClick }: BlogCardProps) {
  return (
    <article
      onClick={onClick}
      className={cn(
        "p-4 rounded-lg cursor-pointer transition-all duration-200 border",
        "hover:bg-card-hover hover:shadow-sm",
        isSelected
          ? "bg-card border-primary/30 shadow-sm ring-1 ring-primary/20"
          : "bg-card border-transparent"
      )}
    >
      <div className="flex flex-wrap gap-2 mb-2">
        {blog.category.map((cat) => (
          <CategoryBadge key={cat} category={cat} />
        ))}
      </div>
      <h3 className="font-semibold text-foreground mb-1.5 line-clamp-2 text-base">
        {blog.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
        {blog.description}
      </p>
      <time className="text-xs text-muted-foreground">
        {format(new Date(blog.date), "MMM d, yyyy")}
      </time>
    </article>
  );
}
