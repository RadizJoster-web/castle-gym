export default function HeroContent() {
  return (
    <div className="flex flex-col items-start">
      {/* Top Badge */}
      <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted">
        <span>3 Branches in Jabodetabek</span>
        <span className="text-primary">•</span>
        <span>Open Since 05.00</span>
      </div>

      {/* Main Heading */}
      <h1 className="mt-5 font-display font-bold uppercase text-left leading-none tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        <span className="text-secondary">RAISE YOUR GOAL</span>
        <br />
        <span className="text-secondary">
          NOT YOUR <span className="text-primary">EXCUSE</span>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-xl font-body text-base md:text-lg xl:text-xl leading-7 text-muted">
        Castle GYM is a premium fitness center that provides a comprehensive
        workout experience. Our state-of-the-art facilities, expert trainers,
        and diverse classes are designed to help you achieve your fitness goals
        effectively and efficiently. Join us today and take the first step
        toward a healthier, stronger version of yourself.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row font-body text-sm font-semibold">
        <a
          href="#register"
          className="w-full sm:w-auto px-8 py-3.5 bg-primary text-main rounded-full text-center font-bold hover:bg-primary-hover transition-colors duration-200"
        >
          Become a Member
        </a>

        <a
          href="#shop"
          className="w-full sm:w-auto px-8 py-3.5 border border-card rounded-full text-center text-secondary hover:bg-card transition-colors duration-200"
        >
          Shop Equipment
        </a>
      </div>
    </div>
  );
}
