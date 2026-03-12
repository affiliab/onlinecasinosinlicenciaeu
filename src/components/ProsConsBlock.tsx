import { ThumbsUp, ThumbsDown } from "lucide-react";

interface ProsConsBlockProps {
  pros: string[];
  cons: string[];
}

const ProsConsBlock = ({ pros, cons }: ProsConsBlockProps) => (
  <div className="my-8 grid sm:grid-cols-2 gap-4">
    {/* Pros */}
    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 card-elevated">
      <div className="flex items-center gap-2 mb-3">
        <ThumbsUp className="w-5 h-5 text-emerald-400" />
        <h4 className="font-bold text-emerald-400 text-sm font-caps">Ventajas</h4>
      </div>
      <ul className="space-y-2">
        {pros.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Cons */}
    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 card-elevated">
      <div className="flex items-center gap-2 mb-3">
        <ThumbsDown className="w-5 h-5 text-red-400" />
        <h4 className="font-bold text-red-400 text-sm font-caps">Desventajas</h4>
      </div>
      <ul className="space-y-2">
        {cons.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-red-400 mt-0.5 shrink-0">✗</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProsConsBlock;
