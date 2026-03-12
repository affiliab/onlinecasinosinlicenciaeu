import Layout from "@/components/Layout";

const AboutUs = () => (
  <Layout>
    <article className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Sobre Nosotros</h1>
      <p className="text-xs font-caps text-primary mb-6">Quiénes somos y por qué existimos</p>

      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Nuestra misión</h2>
          <p>OnlineCasinoSinLicencia.eu.com nace de la necesidad de ofrecer información veraz, actualizada e independiente sobre los casinos online que operan fuera de la regulación DGOJ en España. Nuestro equipo está formado por analistas con más de ocho años de experiencia en la industria del iGaming.</p>
          <p className="mt-3">Sabemos que encontrar un casino fiable puede ser complicado, especialmente cuando se trata de plataformas sin licencia española. Por eso, dedicamos cientos de horas cada mes a probar, verificar y documentar la experiencia real de cada plataforma que recomendamos.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Nuestro proceso</h2>
          <p>Cada casino que aparece en nuestra guía ha sido sometido a un proceso de evaluación riguroso:</p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Registro con datos reales y verificación del proceso completo.</li>
            <li>Depósito con fondos propios para comprobar métodos de pago.</li>
            <li>Prueba de al menos 20 juegos diferentes de distintos proveedores.</li>
            <li>Solicitud de retiro para medir tiempos y posibles complicaciones.</li>
            <li>Evaluación del servicio de atención al cliente en español.</li>
            <li>Seguimiento continuo durante al menos 30 días.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Independencia editorial</h2>
          <p>Nuestras reseñas y rankings se basan exclusivamente en nuestra experiencia y análisis. Aunque podemos recibir compensación cuando los usuarios se registran en los casinos a través de nuestro sitio, esto nunca influye en nuestras valoraciones. Un casino con una mala experiencia de usuario nunca aparecerá en nuestra lista, independientemente de las condiciones comerciales.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">El equipo</h2>
          <p><strong className="text-foreground">Javier Ríos</strong> - Analista principal. Más de 8 años de experiencia en el sector del juego online. Responsable de las evaluaciones y el ranking mensual.</p>
          <p className="mt-2"><strong className="text-foreground">María Gómez</strong> - Editora de contenidos. Especialista en regulación del juego online en Europa.</p>
          <p className="mt-2"><strong className="text-foreground">Carlos Mendoza</strong> - Analista técnico. Experto en seguridad y métodos de pago digitales.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contacto</h2>
          <p>¿Tienes preguntas, sugerencias o quieres reportar un problema con alguno de los casinos que recomendamos? No dudes en escribirnos a través de nuestra página de contacto. Respondemos a todas las consultas en un plazo máximo de 48 horas laborables.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default AboutUs;
