import { AlertTriangle, Info, ShieldCheck, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type AttentionVariant = "warning" | "info" | "success" | "tip";

interface AttentionBlockProps {
  variant?: AttentionVariant;
  title: string;
  children: React.ReactNode;
}

const config: Record<AttentionVariant, { icon: typeof Info; borderClass: string; iconClass: string; bgClass: string }> = {
  warning: {
    icon: AlertTriangle,
    borderClass: "border-l-amber-500",
    iconClass: "text-amber-500",
    bgClass: "bg-amber-500/5",
  },
  info: {
    icon: Info,
    borderClass: "border-l-sky-500",
    iconClass: "text-sky-500",
    bgClass: "bg-sky-500/5",
  },
  success: {
    icon: ShieldCheck,
    borderClass: "border-l-emerald-500",
    iconClass: "text-emerald-500",
    bgClass: "bg-emerald-500/5",
  },
  tip: {
    icon: Lightbulb,
    borderClass: "border-l-primary",
    iconClass: "text-primary",
    bgClass: "bg-primary/5",
  },
};

const AttentionBlock = ({ variant = "info", title, children }: AttentionBlockProps) => {
  const { icon: Icon, borderClass, iconClass, bgClass } = config[variant];

  return (
    <aside
      className={cn(
        "my-8 rounded-xl border-l-4 p-5 card-elevated",
        borderClass,
        bgClass,
      )}
      role="note"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={cn("w-5 h-5 shrink-0", iconClass)} />
        <h4 className="font-bold text-foreground text-sm">{title}</h4>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:mt-2 [&_ul]:space-y-1">
        {children}
      </div>
    </aside>
  );
};

export default AttentionBlock;
