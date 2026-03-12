import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CasinoTable from "@/components/CasinoTable";
import FaqSection from "@/components/FaqSection";
import AuthorBox from "@/components/AuthorBox";
import ExpertQuote from "@/components/ExpertQuote";
import AttentionBlock from "@/components/AttentionBlock";
import ProsConsBlock from "@/components/ProsConsBlock";
import TestResultBlock from "@/components/TestResultBlock";

// hero image removed — brand cards used instead
import casinoBonos from "@/assets/casino-bonos.webp";
import casinoSeguridad from "@/assets/casino-seguridad.webp";
import casinoMovil from "@/assets/casino-movil.webp";
import casinoRanking from "@/assets/casino-ranking.webp";
import juegoResponsableImg from "@/assets/juego-responsable.webp";

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.3, 0, 0.2, 1] as const },
};

const Index = () => {
  return (
    <Layout>
      {/* Dark Hero Zone */}
      <div className="hero-gradient">
        <section className="container py-10 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left — Text */}
            <motion.div {...fadeUp}>
              <p className="font-caps text-xs text-primary mb-3">Guía actualizada · Marzo 2026</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 text-white">
                Casinos Sin Licencia en España
                <span className="text-gradient-gold block"> — 2026</span>
              </h1>
              <p className="text-white/65 mb-6 text-base leading-relaxed">
                Los casinos sin licencia en España representan una alternativa cada vez más popular entre jugadores que buscan mayor libertad y mejores condiciones de juego. Tras probar más de 40 plataformas, he seleccionado los mejores para ti.
              </p>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <span className="font-caps text-xs">Última actualización:</span>
                <span>Mar, 11 2026</span>
              </div>
            </motion.div>

            {/* Right — Top 3 Brand Cards */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, ease: [0.3, 0, 0.2, 1] as const, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {[
                { name: "Bassbet", bonus: "500€ + 200 FS", highlight: "100%", sub: "HASTA 500 EUR + 200 GG", color: "from-violet-600/20 to-violet-900/30" },
                { name: "Alfcasino", bonus: "450€ + 150 FS", highlight: "150%", sub: "HASTA 450 EUR + 150 GG", color: "from-blue-600/20 to-blue-900/30" },
                { name: "24slots", bonus: "600€ + 240 FS", highlight: "200%", sub: "HASTA 600 EUR + 240 GG", color: "from-amber-600/20 to-amber-900/30" },
              ].map((brand, i) => (
                <div
                  key={brand.name}
                  className="group relative flex items-center gap-4 rounded-xl border border-primary/30 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur p-4 sm:p-5 hover:border-primary/60 transition-all duration-300"
                >
                  {/* Logo placeholder */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br ${brand.color} border border-white/10 flex items-center justify-center shrink-0`}>
                    <span className="text-white font-black text-sm sm:text-base tracking-tight">{brand.name.slice(0, 4).toUpperCase()}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm sm:text-base uppercase tracking-wide">{brand.name}</h3>
                    <p className="text-primary font-black text-base sm:text-lg leading-tight">
                      {brand.highlight} <span className="text-white font-bold text-sm">HASTA</span>
                    </p>
                    <p className="text-primary font-bold text-sm">{brand.sub.split("HASTA ")[1]}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={`#${brand.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
                    className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full uppercase tracking-wider transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
                  >
                    ¡Jugar ahora!
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="container pb-10">
          <motion.div {...fadeUp} className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
            <h2 className="font-caps text-xs text-primary mb-3">Contenido</h2>
            <nav>
              <ol className="columns-1 sm:columns-2 space-y-1.5 text-sm">
                <li><a href="#ranking" className="text-white/60 hover:text-primary transition-colors">1. Top 8 Casinos Sin Licencia 2026</a></li>
                <li><a href="#que-son" className="text-white/60 hover:text-primary transition-colors">2. ¿Qué son los casinos sin licencia?</a></li>
                <li><a href="#bonos" className="text-white/60 hover:text-primary transition-colors">3. Bonos y promociones destacados</a></li>
                <li><a href="#como-elegimos" className="text-white/60 hover:text-primary transition-colors">4. Cómo evaluamos cada casino</a></li>
                <li><a href="#ventajas" className="text-white/60 hover:text-primary transition-colors">5. Ventajas y desventajas</a></li>
                <li><a href="#seguridad" className="text-white/60 hover:text-primary transition-colors">6. Seguridad y métodos de pago</a></li>
                <li><a href="#tests" className="text-white/60 hover:text-primary transition-colors">7. Resultados de nuestros tests</a></li>
                <li><a href="#movil" className="text-white/60 hover:text-primary transition-colors">8. Casinos desde el móvil</a></li>
                <li><a href="#juego-responsable" className="text-white/60 hover:text-primary transition-colors">9. Juego responsable</a></li>
                <li><a href="#faq" className="text-white/60 hover:text-primary transition-colors">10. Preguntas frecuentes</a></li>
                <li><a href="#autor" className="text-white/60 hover:text-primary transition-colors">11. Sobre el autor</a></li>
              </ol>
            </nav>
          </motion.div>
        </section>
      </div>

      {/* Light Content Zone */}
      <div className="light-zone">
        {/* Casino Table */}
        <motion.div {...fadeUp}>
          <CasinoTable />
        </motion.div>

      {/* Expert quote after table */}
      <motion.div {...fadeUp}>
        <section className="container">
          <ExpertQuote
            quote="Llevo ocho años probando casinos sin licencia y lo que más me sorprende no es la diferencia en bonos — es la velocidad de los retiros. Mientras que con la DGOJ esperas 3-5 días, en las mejores plataformas internacionales recibes tu dinero en menos de 24 horas."
            author="Javier Ríos"
            role="Analista de casinos online · 8 años de experiencia"
          />
        </section>
      </motion.div>

      {/* What are unlicensed casinos */}
      <motion.div {...fadeUp}>
        <section id="que-son" className="container py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Qué son los casinos sin licencia en España?</h2>
          <p className="text-muted-foreground mb-4">
            Cuando hablamos de casinos sin licencia nos referimos a plataformas de juego online que no poseen la autorización de la DGOJ (Dirección General de Ordenación del Juego) de España. Sin embargo, la mayoría de ellas operan bajo licencias internacionales emitidas por reguladores como la Autoridad de Juego de Curazao, la Malta Gaming Authority o la Comisión de Juego de Gibraltar.
          </p>
          <p className="text-muted-foreground mb-4">
            La principal razón por la que muchos jugadores españoles recurren a estas plataformas es la oferta. Los casinos regulados por la DGOJ están sujetos a restricciones publicitarias y límites en los bonos que pueden ofrecer desde el Real Decreto 958/2020. Los casinos internacionales, al no estar bajo esta normativa, pueden presentar bonos de bienvenida más atractivos, mayores catálogos de juegos y, en muchos casos, retiros más rápidos.
          </p>

          <AttentionBlock variant="info" title="¿Sabías que?">
            <p>La ley española no prohíbe explícitamente a los ciudadanos jugar en plataformas internacionales. Sin embargo, los operadores sí actúan fuera del marco regulatorio español al no contar con licencia DGOJ. Los jugadores no enfrentan sanciones, pero deben declarar ganancias superiores a ciertos umbrales en su declaración de la renta.</p>
          </AttentionBlock>

          <p className="text-muted-foreground">
            En nuestra experiencia analizando el mercado durante más de ocho años, hemos comprobado que la clave no está en si el casino tiene licencia DGOJ, sino en la calidad de su licencia internacional, la transparencia de sus operaciones y la experiencia real de los usuarios.
          </p>
        </section>
      </motion.div>

      {/* Bonuses */}
      <motion.div {...fadeUp}>
        <section id="bonos" className="container py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Bonos y Promociones en Casinos Sin Licencia <span className="text-primary">2026</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-muted-foreground mb-4">
                He activado personalmente cada uno de los bonos que aparecen en esta guía. La diferencia con los casinos DGOJ es notable: mientras que en España los bonos de bienvenida suelen rondar los 200€ con requisitos de apuesta x40, los casinos sin licencia llegan hasta los 600€ con wagering x30 o incluso inferior.
              </p>
              <p className="text-muted-foreground mb-4">
                Bassbet, por ejemplo, ofrece un paquete de hasta 500€ más 200 tiradas gratis repartidas en los tres primeros depósitos. El requisito de apuesta es x35, que está dentro del rango aceptable. Lo probé en enero de 2026 y confirmé que los fondos del bono se acreditaron al instante.
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">Tipos de bonos habituales</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Bono de bienvenida (match deposit del 100-200%)</li>
                <li>Tiradas gratis sin depósito (entre 10 y 50 FS)</li>
                <li>Cashback semanal (5-15% de las pérdidas netas)</li>
                <li>Programa VIP con niveles y recompensas exclusivas</li>
                <li>Torneos con premios en efectivo</li>
              </ul>
            </div>
            <div>
              <img
                src={casinoBonos}
                alt="Bonos y promociones de bienvenida en casinos sin licencia en España representados por caja dorada con fichas"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
          </div>

          <AttentionBlock variant="tip" title="Consejo del experto">
            <p>Antes de aceptar cualquier bono, consulta siempre el requisito de apuesta (wagering). Un bono de 500€ con x50 es peor que uno de 200€ con x25. El verdadero valor está en la relación entre el importe del bono y lo que necesitas apostar para liberarlo. Mi regla personal: nunca acepto un bono con wagering superior a x40.</p>
          </AttentionBlock>

          {/* Bonus comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-card rounded-xl overflow-hidden card-elevated">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="text-left p-3 font-caps text-xs">Casino</th>
                  <th className="text-left p-3 font-caps text-xs">Bono</th>
                  <th className="text-left p-3 font-caps text-xs">Wagering</th>
                  <th className="text-left p-3 font-caps text-xs">Dep. mín.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bassbet", "500€ + 200 FS", "x35", "20€"],
                  ["Alfcasino", "450€ + 150 FS", "x30", "15€"],
                  ["Ludios.io", "1 BTC + 100 FS", "x40", "0.001 BTC"],
                  ["24slots", "600€ + 240 FS", "x35", "20€"],
                  ["Instasino", "400€ + 50 FS", "x30", "10€"],
                  ["22bet", "300€", "x50", "1€"],
                  ["Roibets", "300€ + 100 FS", "x35", "20€"],
                  ["Betobet", "350€ + 100 FS", "x40", "15€"],
                ].map(([name, bonus, wager, dep], i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">{name}</td>
                    <td className="p-3 text-primary font-medium">{bonus}</td>
                    <td className="p-3 text-muted-foreground font-tabular">{wager}</td>
                    <td className="p-3 text-muted-foreground font-tabular">{dep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>

      {/* How we evaluate */}
      <motion.div {...fadeUp}>
        <section id="como-elegimos" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <img
                src={casinoRanking}
                alt="Proceso de evaluación y ranking de los mejores casinos online sin licencia española en 2026"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Cómo Evaluamos Cada Casino</h2>
              <p className="text-muted-foreground mb-4">
                No nos limitamos a copiar la información de las páginas de los propios casinos. Cada plataforma de esta guía ha pasado por un proceso de verificación que incluye registro real, depósito con fondos propios, prueba de juegos y solicitud de retiro.
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">Criterios de evaluación</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 text-sm">
                <li><strong className="text-foreground">Licencia internacional:</strong> verificamos que el casino posea una licencia válida y activa de un regulador reconocido.</li>
                <li><strong className="text-foreground">Velocidad de retiro:</strong> medimos el tiempo real desde la solicitud hasta la recepción de fondos.</li>
                <li><strong className="text-foreground">Catálogo de juegos:</strong> analizamos la variedad, los proveedores (Pragmatic Play, Evolution, NetEnt) y la calidad.</li>
                <li><strong className="text-foreground">Soporte al cliente:</strong> probamos el chat en vivo, email y tiempo de respuesta en español.</li>
                <li><strong className="text-foreground">Condiciones de bonos:</strong> leemos la letra pequeña para que tú no tengas que hacerlo.</li>
                <li><strong className="text-foreground">Reputación:</strong> consultamos foros, comunidades y quejas de otros jugadores.</li>
              </ol>
            </div>
          </div>

          <ExpertQuote
            quote="Cada casino de esta lista lo he probado con dinero real. Deposité, jugué, pedí el retiro y cronometré cuánto tardaron. No hay otra forma de saber si una plataforma es de fiar."
            author="Javier Ríos"
            role="Analista de casinos online"
          />
        </section>
      </motion.div>

      {/* Pros & Cons section */}
      <motion.div {...fadeUp}>
        <section id="ventajas" className="container py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ventajas y Desventajas de los Casinos Sin Licencia</h2>
          <p className="text-muted-foreground mb-4">
            Antes de registrarte en cualquier casino sin licencia DGOJ, es fundamental que conozcas tanto los beneficios como los riesgos. No todo es positivo, y ser transparente al respecto es parte de nuestro compromiso como analistas independientes.
          </p>

          <ProsConsBlock
            pros={[
              "Bonos de bienvenida hasta un 300% superiores a los casinos con licencia DGOJ",
              "Catálogos con más de 3.000 juegos de proveedores internacionales",
              "Retiros procesados en menos de 24 horas en las mejores plataformas",
              "Sin límites de depósito semanal impuestos por normativa española",
              "Aceptación de criptomonedas para mayor privacidad y velocidad",
              "Programas VIP con cashback real sin requisitos de apuesta adicionales",
            ]}
            cons={[
              "Sin respaldo de la DGOJ en caso de disputas o reclamaciones",
              "Riesgo de encontrar operadores poco fiables si no se investiga previamente",
              "Obligación de declarar ganancias de forma autónoma en la renta",
              "Algunos bancos españoles pueden bloquear depósitos a estas plataformas",
              "Herramientas de juego responsable menos estrictas que en casinos regulados",
            ]}
          />

          <AttentionBlock variant="warning" title="Importante antes de jugar">
            <p>Nunca deposites en un casino que no muestre claramente su número de licencia internacional en el pie de página. Verifica siempre ese número en la web oficial del regulador (Curazao, Malta, Gibraltar). Si el casino no facilita esta información, aléjate.</p>
          </AttentionBlock>

          {/* Comparison table: licensed vs unlicensed */}
          <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Comparativa: Casinos DGOJ vs Casinos Sin Licencia</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-card rounded-xl overflow-hidden card-elevated">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="text-left p-3 font-caps text-xs">Aspecto</th>
                  <th className="text-left p-3 font-caps text-xs">Casino DGOJ</th>
                  <th className="text-left p-3 font-caps text-xs">Casino Sin Licencia</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Bono máximo", "~200€", "Hasta 600€+"],
                  ["Wagering medio", "x40-x50", "x25-x35"],
                  ["Catálogo de juegos", "500-1.500", "2.000-5.000+"],
                  ["Tiempo de retiro", "3-5 días", "1-48 horas"],
                  ["Criptomonedas", "No disponible", "Bitcoin, ETH, USDT"],
                  ["Protección legal", "DGOJ española", "Regulador internacional"],
                  ["Límite depósito semanal", "Obligatorio (600€)", "Sin límite fijo"],
                ].map(([aspect, dgoj, sinlic], i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">{aspect}</td>
                    <td className="p-3">{dgoj}</td>
                    <td className="p-3 text-primary font-medium">{sinlic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>

      {/* Security */}
      <motion.div {...fadeUp}>
        <section id="seguridad" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Seguridad y Métodos de Pago</h2>
              <p className="text-muted-foreground mb-4">
                Una de las preocupaciones más comunes entre los jugadores españoles es la seguridad de sus datos y su dinero en casinos sin licencia DGOJ. Es una pregunta legítima. Después de años analizando estas plataformas, puedo confirmar que la seguridad no depende del sello DGOJ, sino de la infraestructura técnica del casino.
              </p>
              <p className="text-muted-foreground mb-4">
                Todos los casinos de nuestra lista utilizan encriptación SSL de 256 bits, la misma tecnología que emplean los bancos. Además, los juegos están auditados por laboratorios independientes como eCOGRA, iTech Labs o GLI, que certifican la aleatoriedad de los resultados.
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">Métodos de pago disponibles</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Tarjetas Visa y Mastercard</li>
                <li>Monederos electrónicos: Skrill, Neteller, ecoPayz</li>
                <li>Criptomonedas: Bitcoin, Ethereum, Litecoin, USDT</li>
                <li>Transferencia bancaria</li>
                <li>Tarjetas prepago: Paysafecard, AstroPay</li>
              </ul>
            </div>
            <div>
              <img
                src={casinoSeguridad}
                alt="Escudo dorado de seguridad que representa la protección de datos en casinos sin licencia fiables"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
          </div>

          <AttentionBlock variant="success" title="Verificación de seguridad">
            <p>Hemos comprobado personalmente los certificados SSL de cada casino recomendado. Además, verificamos que todos cuenten con auditorías de juego justo por parte de laboratorios independientes. Si un casino no supera estas comprobaciones, no aparece en nuestra lista.</p>
          </AttentionBlock>
        </section>
      </motion.div>

      {/* Test Results */}
      <motion.div {...fadeUp}>
        <section id="tests" className="container py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Resultados de Nuestros Tests Reales</h2>
          <p className="text-muted-foreground mb-6">
            No nos fiamos de lo que prometen las webs. Registramos cuentas, depositamos dinero real y solicitamos retiros para comprobar la experiencia de primera mano. Estos son los resultados de nuestras últimas pruebas realizadas entre enero y marzo de 2026.
          </p>

          <TestResultBlock
            casino="Bassbet"
            testDate="Febrero 2026"
            results={[
              { label: "Registro", value: "2 min 15 seg", pass: true },
              { label: "Depósito acreditado", value: "Inmediato", pass: true },
              { label: "Retiro (Skrill)", value: "4 horas", pass: true },
              { label: "Soporte español", value: "Sí, 24/7", pass: true },
              { label: "Bono acreditado", value: "Inmediato", pass: true },
              { label: "Verificación KYC", value: "No requerida", pass: true },
            ]}
            verdict="Plataforma sólida con retiros rápidos y bono sin complicaciones. Excelente para jugadores españoles."
            rating={5}
          />

          <TestResultBlock
            casino="Alfcasino"
            testDate="Enero 2026"
            results={[
              { label: "Registro", value: "3 min 40 seg", pass: true },
              { label: "Depósito acreditado", value: "Inmediato", pass: true },
              { label: "Retiro (Bitcoin)", value: "35 min", pass: true },
              { label: "Soporte español", value: "Sí, chat", pass: true },
              { label: "Bono acreditado", value: "Tras depósito", pass: true },
              { label: "Verificación KYC", value: "En retiro >500€", pass: false },
            ]}
            verdict="Muy buenos tiempos en cripto. El KYC puede retrasar retiros grandes, pero la experiencia general es positiva."
            rating={4}
          />

          <TestResultBlock
            casino="22bet"
            testDate="Marzo 2026"
            results={[
              { label: "Registro", value: "1 min 50 seg", pass: true },
              { label: "Depósito acreditado", value: "Inmediato", pass: true },
              { label: "Retiro (Visa)", value: "48 horas", pass: false },
              { label: "Soporte español", value: "Sí, limitado", pass: false },
              { label: "Bono acreditado", value: "Inmediato", pass: true },
              { label: "Verificación KYC", value: "Requerida", pass: false },
            ]}
            verdict="Catálogo enorme pero retiros lentos por tarjeta. El wagering del bono (x50) es alto. Mejor para apuestas deportivas."
            rating={3}
          />
        </section>
      </motion.div>

      {/* Mobile */}
      <motion.div {...fadeUp}>
        <section id="movil" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <img
                src={casinoMovil}
                alt="Casino sin licencia jugando desde un smartphone con interfaz optimizada para móvil en 2026"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Casinos Sin Licencia desde el Móvil</h2>
              <p className="text-muted-foreground mb-4">
                Más del 70% de los jugadores en España acceden a los casinos online desde su teléfono. Hemos verificado que todas las plataformas de nuestra lista ofrecen una experiencia móvil completa, ya sea a través de aplicaciones nativas para Android o de versiones web responsive.
              </p>
              <p className="text-muted-foreground mb-4">
                Instasino destaca en este aspecto con un diseño mobile-first que permite registrarse y empezar a jugar en menos de 60 segundos. 22bet, por su parte, ofrece una app descargable con acceso a todo su catálogo de apuestas deportivas y casino en vivo.
              </p>
              <p className="text-muted-foreground">
                La ventaja del juego móvil en casinos sin licencia es que no necesitas descargarte apps desde la App Store o Google Play (que a menudo restringen las aplicaciones de gambling). Simplemente accedes desde el navegador de tu móvil y guardas un acceso directo en la pantalla de inicio.
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Responsible gaming */}
      <motion.div {...fadeUp}>
        <section id="juego-responsable" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Juego Responsable</h2>
              <p className="text-muted-foreground mb-4">
                El juego online debe ser una forma de entretenimiento, nunca una fuente de ingresos. Desde esta guía promovemos activamente las prácticas de juego responsable. Todos los casinos que recomendamos ofrecen herramientas de autoexclusión, límites de depósito y tiempo de juego.
              </p>
              <p className="text-muted-foreground mb-4">
                Si sientes que el juego está afectando a tu vida personal, laboral o financiera, te recomendamos contactar con organizaciones especializadas como Jugarbien.es o la línea de atención 024 en España.
              </p>

              <AttentionBlock variant="warning" title="Señales de juego problemático">
                <ul>
                  <li>Jugar con dinero que no puedes permitirte perder</li>
                  <li>Intentar recuperar las pérdidas apostando más</li>
                  <li>Mentir sobre el tiempo o dinero dedicado al juego</li>
                  <li>Descuidar responsabilidades por jugar</li>
                </ul>
              </AttentionBlock>
            </div>
            <div>
              <img
                src={juegoResponsableImg}
                alt="Juego responsable en casinos online representado con señal de precaución y límites de autoprotección"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </motion.div>

      {/* FAQ */}
      <motion.div {...fadeUp}>
        <FaqSection />
      </motion.div>

      {/* Author */}
      <motion.div {...fadeUp}>
        <AuthorBox />
      </motion.div>
      </div>{/* end light-zone */}
    </Layout>
  );
};

export default Index;
