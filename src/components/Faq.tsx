"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad container-max py-20 sm:py-28">
      <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes" />

      <div className="mx-auto mt-12 max-w-2xl space-y-3">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.pergunta} delay={i * 0.05} className="overflow-hidden rounded-2xl bg-white card-shadow">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-cocoa">{item.pergunta}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-berry transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              </h3>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-cocoa-soft">{item.resposta}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
