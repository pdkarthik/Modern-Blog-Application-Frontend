import { Blog } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import { BlogCardSkeleton } from "./BlogCardSkeleton";
import { AlertCircle } from "lucide-react";

interface BlogListProps {
  blogs: Blog[] | undefined;
  isLoading: boolean;
  isError: boolean;
  selectedBlogId: number | null;
  onSelectBlog: (id: number) => void;
}

export function BlogList({
  blogs,
  isLoading,
  isError,
  selectedBlogId,
  onSelectBlog,
}: BlogListProps) {
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h3 className="font-semibold text-foreground mb-2">Failed to load blogs</h3>
        <p className="text-muted-foreground text-sm">
          Make sure the JSON server is running on port 3001
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-muted-foreground">No blogs yet. Create your first one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          isSelected={selectedBlogId === blog.id}
          onClick={() => onSelectBlog(blog.id)}
        />
      ))}
    </div>
  );
}
