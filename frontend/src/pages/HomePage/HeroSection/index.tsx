import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroMascot from "./HeroMascot";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 py-12 lg:px-10 lg:py-20 border-b-3 border-b-card"
    >
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Mascot */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-6 lg:justify-end">
            <HeroMascot />
          </div>

          {/* Content */}
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6">
            <HeroContent />
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}
