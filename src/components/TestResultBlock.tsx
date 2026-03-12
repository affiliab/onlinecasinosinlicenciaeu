import { CheckCircle, Clock, Star } from "lucide-react";

interface TestResultBlockProps {
  casino: string;
  testDate: string;
  results: { label: string; value: string; pass: boolean }[];
  verdict: string;
  rating: number;
}

const TestResultBlock = ({ casino, testDate, results, verdict, rating }: TestResultBlockProps) => (
  <div className="my-8 rounded-xl bg-card border border-border p-5 card-elevated">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" />
        <h4 className="font-bold text-foreground">Resultado del test: {casino}</h4>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        <span>Probado: {testDate}</span>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
      {results.map((r, i) => (
        <div key={i} className="rounded-lg bg-accent/50 p-3">
          <p className="text-xs text-muted-foreground mb-1">{r.label}</p>
          <p className={`text-sm font-semibold ${r.pass ? "text-emerald-400" : "text-red-400"}`}>
            {r.value}
          </p>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
      <p className="text-sm text-muted-foreground"><strong className="text-foreground">Veredicto:</strong> {verdict}</p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`} />
        ))}
        <span className="text-sm font-bold text-primary ml-1">{rating}/5</span>
      </div>
    </div>
  </div>
);

export default TestResultBlock;
