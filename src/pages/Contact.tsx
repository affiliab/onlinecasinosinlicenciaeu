import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => (
  <Layout>
    <article className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <p className="text-xs font-caps text-primary mb-6">Estamos aquí para ayudarte</p>

      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <section>
          <p>Si tienes preguntas sobre nuestras reseñas, necesitas reportar información incorrecta o simplemente quieres compartir tu experiencia con alguno de los casinos que recomendamos, estaremos encantados de escucharte.</p>
        </section>

        <section className="bg-card rounded-xl p-6 card-elevated">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-primary" size={24} />
            <h2 className="text-xl font-bold text-foreground">Escríbenos</h2>
          </div>
          <p>Puedes contactarnos a través del correo electrónico:</p>
          <p className="text-primary font-medium mt-2">info@onlinecasinosinlicencia.eu.com</p>
          <p className="mt-3">Respondemos a todas las consultas en un plazo máximo de 48 horas laborables.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">¿Qué consultas atendemos?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Preguntas sobre los casinos de nuestro ranking.</li>
            <li>Reportes de información incorrecta o desactualizada.</li>
            <li>Sugerencias de casinos para evaluar.</li>
            <li>Consultas sobre juego responsable.</li>
            <li>Solicitudes de colaboración editorial.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Aviso importante</h2>
          <p>No somos un casino online ni una casa de apuestas. No gestionamos cuentas de juego, depósitos ni retiros. Si tienes un problema con un casino concreto, te recomendamos contactar directamente con su servicio de atención al cliente.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default Contact;
