import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const pageNames: Record<string, string> = {
  "": "Inicio",
  "es-es": "Inicio",
  "politica-de-privacidad": "Política de Privacidad",
  "juego-responsable": "Juego Responsable",
  "terminos-y-condiciones": "Términos y Condiciones",
  "sobre-nosotros": "Sobre nosotros",
  "contacto": "Contacto",
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0 || (segments.length === 1 && segments[0] === "es-es")) return null;

  const crumbs = [
    { label: "Inicio", href: "/" },
    ...segments.map((seg, i) => ({
      label: pageNames[seg] || seg,
      href: "/" + segments.slice(0, i + 1).join("/") + "/",
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.label,
      "item": `https://www.onlinecasinosinlicencia.eu.com${c.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="container py-3 text-xs text-muted-foreground">
        <ol className="flex items-center gap-1 flex-wrap">
          {crumbs.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={12} />}
              {i === crumbs.length - 1 ? (
                <span className="text-foreground">{c.label}</span>
              ) : (
                <Link to={c.href} className="hover:text-primary transition-colors">{c.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
