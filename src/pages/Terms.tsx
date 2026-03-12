import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <article className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
      <p className="text-xs font-caps text-primary mb-6">Última actualización: enero 2026</p>

      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Aceptación de los términos</h2>
          <p>Al acceder y utilizar el sitio web OnlineCasinoSinLicencia.eu.com, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguno de los términos, te rogamos que no utilices nuestro sitio.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. Naturaleza del contenido</h2>
          <p>Este sitio web tiene carácter exclusivamente informativo. Las reseñas, comparativas y opiniones publicadas se basan en nuestro análisis independiente y experiencia personal. No somos un casino online ni una casa de apuestas. No aceptamos depósitos, apuestas ni gestionamos cuentas de juego.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. Contenido para mayores de edad</h2>
          <p>Todo el contenido de este sitio está dirigido a personas mayores de 18 años. Al utilizar nuestro sitio web, confirmas que tienes la edad legal para acceder a información sobre juego online en tu jurisdicción.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. Exención de responsabilidad</h2>
          <p>La información publicada en este sitio se proporciona "tal cual" y "según disponibilidad". Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos la exactitud, integridad o vigencia de todos los datos. Las condiciones de los casinos (bonos, métodos de pago, etc.) pueden cambiar sin previo aviso.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Propiedad intelectual</h2>
          <p>Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de OnlineCasinoSinLicencia.eu.com o de sus respectivos titulares y está protegido por las leyes de propiedad intelectual. Queda prohibida la reproducción total o parcial sin autorización expresa.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Legislación aplicable</h2>
          <p>Estos Términos y Condiciones se rigen por la legislación vigente. Cualquier disputa que surja en relación con el uso de este sitio web se someterá a los tribunales competentes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en esta página. El uso continuado del sitio después de los cambios constituye la aceptación de los nuevos términos.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default Terms;
