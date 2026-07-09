import { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { faqData } from "./faqData";

export default function FAQAccordion() {
  const [active, setActive] = useState(0);

  const toggle = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4">
      {faqData.map((item, index) => (
        <div
          key={item.id}
          className="rounded-2xl border border-border-color bg-card transition-all duration-300 hover:border-primary"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-6 text-left"
          >
            <h3 className="font-body text-lg font-semibold text-secondary pr-6">
              {item.question}
            </h3>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main border border-border-color text-primary">
              {active === index ? (
                <RiSubtractLine size={20} />
              ) : (
                <RiAddLine size={20} />
              )}
            </div>
          </button>

          <div
            className={`grid transition-all duration-300 ${
              active === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 font-body text-muted leading-7">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
