import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Son legales los casinos sin licencia en España?",
    a: "Los casinos sin licencia de la DGOJ operan bajo regulaciones de otras jurisdicciones como Curazao, Malta o Gibraltar. No están regulados por la autoridad española, pero millones de jugadores los utilizan. La responsabilidad recae en el usuario, ya que en España no se persigue al jugador individual."
  },
  {
    q: "¿Cómo sé si un casino sin licencia es seguro?",
    a: "Verifica que el casino tenga licencia de algún regulador internacional, utilice encriptación SSL, ofrezca métodos de pago reconocidos y cuente con reseñas positivas de otros jugadores. Nuestro equipo comprueba todos estos factores antes de recomendar cualquier plataforma."
  },
  {
    q: "¿Puedo usar criptomonedas en casinos sin licencia?",
    a: "Sí, de hecho muchos casinos sin licencia aceptan Bitcoin, Ethereum, Litecoin y otras criptomonedas. Plataformas como Ludios.io operan exclusivamente con cripto, ofreciendo mayor anonimato y retiros instantáneos."
  },
  {
    q: "¿Los bonos de casinos sin licencia son mejores que los de casinos con licencia DGOJ?",
    a: "Generalmente sí. Los casinos sin licencia española no están sujetos a las restricciones publicitarias del Real Decreto 958/2020, por lo que pueden ofrecer bonos de bienvenida más generosos, tiradas gratis y programas de fidelidad más atractivos."
  },
  {
    q: "¿Cómo retiro mis ganancias de un casino sin licencia?",
    a: "Los métodos varían según la plataforma, pero los más comunes incluyen transferencia bancaria, tarjetas Visa/Mastercard, monederos electrónicos como Skrill o Neteller, y criptomonedas. Los tiempos de retiro van desde instantáneos hasta 72 horas dependiendo del método elegido."
  },
  {
    q: "¿Tengo que pagar impuestos por mis ganancias en casinos sin licencia?",
    a: "Según la legislación fiscal española, todas las ganancias del juego deben declararse en la renta anual. Esto aplica independientemente de si el casino tiene licencia DGOJ o no. Consulta con un asesor fiscal para tu caso particular."
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <section id="faq" className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Preguntas Frecuentes sobre Casinos Sin Licencia
      </h2>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div key={i} className="bg-card rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left text-foreground font-medium hover:text-primary transition-colors"
              aria-expanded={openIdx === i}
            >
              <span className="pr-4">{f.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-muted-foreground transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.3, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
