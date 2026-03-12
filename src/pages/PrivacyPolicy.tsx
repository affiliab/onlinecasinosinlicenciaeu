import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <article className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="text-xs font-caps text-primary mb-6">Última actualización: enero 2026</p>

      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Información que recopilamos</h2>
          <p>En OnlineCasinoSinLicencia.eu.com recopilamos información limitada de los visitantes de nuestro sitio web. Esta información puede incluir datos de navegación anónimos, como la dirección IP, el tipo de navegador, el sistema operativo y las páginas visitadas. No recopilamos datos personales identificables a menos que el usuario los proporcione voluntariamente a través de nuestro formulario de contacto.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. Uso de cookies</h2>
          <p>Nuestro sitio web utiliza cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas que nos ayudan a comprender cómo los visitantes interactúan con el contenido. Puedes gestionar tus preferencias de cookies desde la configuración de tu navegador. No utilizamos cookies de seguimiento publicitario de terceros.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. Cómo utilizamos la información</h2>
          <p>La información recopilada se utiliza exclusivamente para mejorar la experiencia del usuario en nuestro sitio, analizar tendencias de tráfico y optimizar nuestro contenido. No vendemos, alquilamos ni compartimos información personal con terceros con fines comerciales.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. Protección de datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger la información de nuestros usuarios contra acceso no autorizado, alteración, divulgación o destrucción. Nuestro sitio utiliza encriptación SSL para garantizar la seguridad de las comunicaciones.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Derechos del usuario</h2>
          <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), tienes derecho a acceder, rectificar, eliminar y portar tus datos personales. También puedes oponerte al tratamiento de tus datos o solicitar la limitación del mismo. Para ejercer estos derechos, puedes contactarnos a través de nuestra página de contacto.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Cambios en esta política</h2>
          <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de la última modificación actualizada. Te recomendamos revisarla periódicamente.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default PrivacyPolicy;
