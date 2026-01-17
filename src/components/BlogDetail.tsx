import { Blog } from "@/types/blog";
import { CategoryBadge } from "./CategoryBadge";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogDetailProps {
  blog: Blog | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function BlogDetail({ blog, isLoading, isError }: BlogDetailProps) {
  if (isError) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
          <p className="text-destructive font-medium mb-2">Failed to load blog</p>
          <p className="text-muted-foreground text-sm">Please try again later</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">Select a blog</h2>
          <p className="text-muted-foreground">
            Choose a blog from the list to read the full content
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="animate-fade-in">
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.category.map((cat) => (
              <CategoryBadge key={cat} category={cat} />
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="px-1">
        <time className="text-sm text-muted-foreground mb-4 block">
          {format(new Date(blog.date), "MMMM d, yyyy")}
        </time>
        <p className="text-muted-foreground italic mb-6 border-l-4 border-primary pl-4">
          {blog.description}
        </p>
        <div className="prose prose-neutral max-w-none">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </p>
        </div>
      </div>
    </article>
  );
}

function BlogDetailSkeleton() {
  return (
    <div className="animate-pulse">
      <Skeleton className="h-64 md:h-80 rounded-lg mb-6" />
      <div className="px-1">
        <Skeleton className="h-4 w-32 mb-4" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-3/4 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
