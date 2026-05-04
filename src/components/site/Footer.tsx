import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-semibold text-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Code2 className="h-4 w-4" />
          </span>
          ACCAS
        </div>
        <div>© {new Date().getFullYear()} ACCAS. We handle tech, you build your business.</div>
      </div>
    </footer>
  );
}
