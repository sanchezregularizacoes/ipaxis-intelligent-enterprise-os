import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const ipaxisFaviconUrl =
  "https://ipaxis-evolve.lovable.app/__l5e/assets-v1/055d954e-5b56-4ba3-8716-faee36b5a246/ipaxis-mark.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IPAXIS — Sistema operacional inteligente para empresas" },
      {
        name: "description",
        content:
          "CRM, IA, Automação, Financeiro, BI e Workflows em uma única plataforma. Elimine sistemas fragmentados e opere com inteligência de dados.",
      },
      { name: "author", content: "IPAXIS" },
      { property: "og:title", content: "IPAXIS — Sistema operacional inteligente para empresas" },
      {
        property: "og:description",
        content:
          "CRM, IA, Automação, Financeiro, BI e Workflows em uma única plataforma. Elimine sistemas fragmentados e opere com inteligência de dados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IPAXIS — Sistema operacional inteligente para empresas" },
      { name: "twitter:description", content: "CRM, IA, Automação, Financeiro, BI e Workflows em uma única plataforma. Elimine sistemas fragmentados e opere com inteligência de dados." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8eb5fd7-54b5-43f4-91d4-4c137dada27c/id-preview-610d3a2f--0dafbc66-8857-4fdf-91f8-2325ece69259.lovable.app-1784653539335.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8eb5fd7-54b5-43f4-91d4-4c137dada27c/id-preview-610d3a2f--0dafbc66-8857-4fdf-91f8-2325ece69259.lovable.app-1784653539335.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: ipaxisFaviconUrl, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
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
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
