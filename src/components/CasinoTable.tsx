import { Star } from "lucide-react";

interface Casino {
  rank: number;
  name: string;
  bonus: string;
  rating: number;
  games: string;
  payout: string;
  features: string[];
}

const casinos: Casino[] = [
  { rank: 1, name: "Bassbet", bonus: "Hasta 500€ + 200 FS", rating: 4.9, games: "3500+", payout: "0-24h", features: ["Sin verificación", "Crypto"] },
  { rank: 2, name: "Alfcasino", bonus: "Hasta 450€ + 150 FS", rating: 4.8, games: "3000+", payout: "0-24h", features: ["VIP Club", "En vivo"] },
  { rank: 3, name: "Ludios.io", bonus: "Hasta 1 BTC + 100 FS", rating: 4.8, games: "4000+", payout: "Instantáneo", features: ["Solo Crypto", "Anónimo"] },
  { rank: 4, name: "Roibets", bonus: "Hasta 300€ + 100 FS", rating: 4.7, games: "2800+", payout: "0-48h", features: ["Apuestas deportivas", "En vivo"] },
  { rank: 5, name: "Instasino", bonus: "Hasta 400€ + 50 FS", rating: 4.7, games: "2500+", payout: "0-24h", features: ["Registro rápido", "Móvil"] },
  { rank: 6, name: "22bet", bonus: "Hasta 300€", rating: 4.6, games: "3200+", payout: "0-72h", features: ["Multideporte", "App móvil"] },
  { rank: 7, name: "24slots", bonus: "Hasta 600€ + 240 FS", rating: 4.6, games: "5000+", payout: "0-48h", features: ["Torneos", "Cashback"] },
  { rank: 8, name: "Betobet", bonus: "Hasta 350€ + 100 FS", rating: 4.5, games: "2000+", payout: "0-48h", features: ["Apuestas", "Casino en vivo"] },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={14}
        className={s <= Math.floor(rating) ? "fill-primary text-primary" : "text-muted-foreground"}
      />
    ))}
    <span className="text-sm font-tabular text-primary ml-1">{rating}</span>
  </div>
);

const CasinoTable = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mejores casinos sin licencia en España 2026",
    "itemListElement": casinos.map((c) => ({
      "@type": "ListItem",
      "position": c.rank,
      "name": c.name,
      "url": `https://www.onlinecasinosinlicencia.eu.com/#${c.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`,
    })),
  };

  return (
    <section id="ranking" className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Top 8 Casinos Sin Licencia en España <span className="text-primary">2026</span>
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Nuestro equipo ha analizado más de 40 plataformas. A continuación, presentamos las que cumplen con nuestros criterios de seguridad, variedad de juegos y rapidez en los pagos.
      </p>

      <div className="space-y-4">
        {casinos.map((c) => (
          <article
            key={c.rank}
            id={c.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
            className="bg-card rounded-xl p-4 sm:p-6 card-elevated border border-border hover:border-primary/40 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 sm:w-48">
                <span className="text-2xl font-bold text-primary font-tabular">#{c.rank}</span>
                <div>
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <StarRating rating={c.rating} />
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs font-caps">Bono</span>
                  <span className="font-medium text-primary">{c.bonus}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs font-caps">Juegos</span>
                  <span className="font-medium font-tabular">{c.games}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs font-caps">Pago</span>
                  <span className="font-medium">{c.payout}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:w-44">
                {c.features.map((f) => (
                  <span key={f} className="text-xs bg-accent px-2 py-1 rounded-md text-accent-foreground">{f}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CasinoTable;
