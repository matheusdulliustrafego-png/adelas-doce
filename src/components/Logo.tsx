import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/delas-doces-logo.png"
      alt="Delas Doces — Delícias Gourmet"
      width={636}
      height={635}
      priority
      className={cn("h-12 w-12 select-none rounded-full object-contain", className)}
    />
  );
}
