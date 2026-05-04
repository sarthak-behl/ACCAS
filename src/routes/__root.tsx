import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ACCAS — Focus on your startup. We handle your tech." },
      { name: "description", content: "ACCAS is a software agency that takes complete ownership of your startup's technology so you can focus on growth." },
      { name: "author", content: "ACCAS" },
      { property: "og:title", content: "ACCAS — Focus on your startup. We handle your tech." },
      { property: "og:description", content: "ACCAS is a software agency that takes complete ownership of your startup's technology so you can focus on growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "ACCAS — Focus on your startup. We handle your tech." },
      { name: "twitter:description", content: "ACCAS is a software agency that takes complete ownership of your startup's technology so you can focus on growth." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0f13cc82-6b89-4556-b842-732d0620e1e9/id-preview-d7228d82--bfdb9fbc-85fb-48ad-a4f7-2c3ea9aa21e6.lovable.app-1777911267052.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0f13cc82-6b89-4556-b842-732d0620e1e9/id-preview-d7228d82--bfdb9fbc-85fb-48ad-a4f7-2c3ea9aa21e6.lovable.app-1777911267052.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
