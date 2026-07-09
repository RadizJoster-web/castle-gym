import FAQHeader from "./FAQHeader";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <FAQHeader />
        <FAQAccordion />
      </div>
    </section>
  );
}
