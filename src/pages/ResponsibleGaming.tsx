import Layout from "@/components/Layout";

const ResponsibleGaming = () => (
  <Layout>
    <article className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Juego Responsable</h1>
      <p className="text-xs font-caps text-primary mb-6">Nuestro compromiso con el juego seguro</p>

      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Nuestro compromiso</h2>
          <p>En OnlineCasinoSinLicencia.eu.com creemos firmemente que el juego online debe ser siempre una actividad recreativa. Nuestro objetivo es proporcionar información objetiva y útil para que los jugadores tomen decisiones informadas, y parte de esa responsabilidad implica promover hábitos de juego saludables.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Consejos para jugar de forma responsable</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Establece un presupuesto antes de empezar a jugar y cúmplelo.</li>
            <li>No juegues con dinero que necesitas para gastos esenciales.</li>
            <li>Fija límites de tiempo para tus sesiones de juego.</li>
            <li>No intentes recuperar las pérdidas aumentando las apuestas.</li>
            <li>El juego no es una forma de ganar dinero; considéralo entretenimiento.</li>
            <li>No juegues bajo los efectos del alcohol o en momentos de estrés emocional.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Herramientas de autoprotección</h2>
          <p>La mayoría de los casinos que recomendamos ofrecen herramientas de autoprotección que incluyen:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Límites de depósito diarios, semanales y mensuales.</li>
            <li>Límites de pérdida y de sesión.</li>
            <li>Períodos de enfriamiento y autoexclusión temporal.</li>
            <li>Autoexclusión permanente de la plataforma.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">¿Necesitas ayuda?</h2>
          <p>Si crees que el juego está afectando negativamente a tu vida, no estás solo. Existen organizaciones profesionales que pueden ayudarte:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong className="text-foreground">Jugarbien.es</strong> - Plataforma oficial de la DGOJ para el juego responsable en España.</li>
            <li><strong className="text-foreground">Línea 024</strong> - Teléfono de atención a la conducta suicida, disponible las 24 horas.</li>
            <li><strong className="text-foreground">FEJAR</strong> - Federación Española de Jugadores de Azar Rehabilitados.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Menores de edad</h2>
          <p>El juego online está estrictamente prohibido para menores de 18 años. Todos los casinos que recomendamos implementan procesos de verificación de edad. Si compartes tu dispositivo con menores, te recomendamos utilizar herramientas de control parental para bloquear el acceso a sitios de juego.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default ResponsibleGaming;
