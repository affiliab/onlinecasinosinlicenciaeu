import { Quote } from "lucide-react";

interface ExpertQuoteProps {
  quote: string;
  author: string;
  role: string;
}

const ExpertQuote = ({ quote, author, role }: ExpertQuoteProps) => (
  <blockquote className="relative my-8 rounded-xl border-l-4 border-primary bg-card p-6 card-elevated">
    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary opacity-60" />
    <p className="text-foreground italic leading-relaxed text-base mb-3">
      "{quote}"
    </p>
    <footer className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-primary">
        {author.split(" ").map(n => n[0]).join("")}
      </div>
      <div>
        <cite className="not-italic font-semibold text-foreground text-sm">{author}</cite>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </footer>
  </blockquote>
);

export default ExpertQuote;
