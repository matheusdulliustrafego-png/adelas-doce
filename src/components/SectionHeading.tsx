import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left mx-0"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
            light ? "bg-white/15 text-cream" : "bg-pink-soft text-berry-dark"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15]",
          light ? "text-cream" : "text-cocoa"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", light ? "text-cream/85" : "text-cocoa-soft")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
