import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-16">
    <div className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <div>
          <span className="text-lg font-bold text-foreground block mb-1">♠ Casinos</span>
          <span className="text-sm font-bold text-primary block mb-3">Sin Licencia</span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Guía experta independiente sobre casinos online sin licencia en España. Análisis actualizado en 2026.
          </p>
        </div>
        <div>
          <h4 className="font-caps text-xs text-primary mb-3">Páginas</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre-nosotros/" className="text-muted-foreground hover:text-primary transition-colors">Sobre nosotros</Link></li>
            <li><Link to="/contacto/" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            <li><Link to="/juego-responsable/" className="text-muted-foreground hover:text-primary transition-colors">Juego Responsable</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-caps text-xs text-primary mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/politica-de-privacidad/" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
            <li><Link to="/terminos-y-condiciones/" className="text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>© 2026 OnlineCasinoSinLicencia.eu.com — Todos los derechos reservados.</p>
        <p className="mt-1">Este sitio tiene carácter informativo. Juega con responsabilidad. +18</p>
      </div>
    </div>
  </footer>
);

export default Footer;
