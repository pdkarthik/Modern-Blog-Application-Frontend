import { CreateBlogDialog } from "./CreateBlogDialog";
import { BookOpen } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="CA Monk Logo"
              className="h-9 w-auto"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
          )}
          <h1 className="text-xl font-bold text-foreground">CA Monk</h1>
        </div>
        <CreateBlogDialog />
      </div>
    </header>
  );
}
