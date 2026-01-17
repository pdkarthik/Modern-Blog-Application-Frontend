import { useState } from "react";
import { Header } from "@/components/Header";
import { BlogList } from "@/components/BlogList";
import { BlogDetail } from "@/components/BlogDetail";
import { useBlogs, useBlog } from "@/hooks/useBlogs";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const { data: blogs, isLoading: blogsLoading, isError: blogsError } = useBlogs();
  const { data: selectedBlog, isLoading: blogLoading, isError: blogError } = useBlog(selectedBlogId);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-7rem)]">
          {/* Blog List Panel */}
          <div className="lg:col-span-4 xl:col-span-3 bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">All Blogs</h2>
              <p className="text-sm text-muted-foreground">
                {blogs?.length ?? 0} articles
              </p>
            </div>
            <ScrollArea className="h-[calc(100%-5rem)]">
              <div className="p-3">
                <BlogList
                  blogs={blogs}
                  isLoading={blogsLoading}
                  isError={blogsError}
                  selectedBlogId={selectedBlogId}
                  onSelectBlog={setSelectedBlogId}
                />
              </div>
            </ScrollArea>
          </div>

          {/* Blog Detail Panel */}
          <div className="lg:col-span-8 xl:col-span-9 bg-card rounded-xl border border-border overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-6">
                <BlogDetail
                  blog={selectedBlog}
                  isLoading={blogLoading}
                  isError={blogError}
                />
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
