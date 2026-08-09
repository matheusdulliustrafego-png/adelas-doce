import StrawberryIcon from "@/components/icons/StrawberryIcon";
import { cn } from "@/lib/utils";

const POSITIONS = [
  "left-[4%] top-[12%] h-8 w-8 animate-sway",
  "right-[6%] top-[22%] h-10 w-10 animate-sway-slow",
  "left-[10%] bottom-[16%] h-6 w-6 animate-sway-slow",
  "right-[12%] bottom-[10%] h-9 w-9 animate-sway",
];

export default function FloatingStrawberries({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {POSITIONS.map((pos, i) => (
        <StrawberryIcon key={i} className={cn("absolute text-berry/25", pos)} />
      ))}
    </div>
  );
}
