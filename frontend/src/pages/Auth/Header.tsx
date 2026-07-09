export default function Header() {
  return (
    <div className="relative w-full max-w-xl flex flex-col justify-center h-full z-10">
      {/* Background Decorative Glows */}
      <div className="absolute -top-20 -left-20 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      {/* Badge */}
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span>Member Area</span>
      </div>

      {/* Title */}
      <h1 className="mt-5 font-display uppercase text-left leading-none tracking-wide text-3xl md:text-5xl ">
        <span className="text-secondary">let's start your</span>
        <br />
        <span className="text-primary">Journey</span>
      </h1>

      {/* Description */}
      <p className="mt-6 font-inter text-sm sm:text-base leading-relaxed text-muted max-w-md">
        Manage your gym experience with ease. From tracking your active period
        to checking your workout stats, everything you need is right at your
        fingertips.
      </p>
    </div>
  );
}
