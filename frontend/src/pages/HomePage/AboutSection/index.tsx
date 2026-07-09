
const aboutStats = [
  {
    value: "2019",
    label: "Established",
  },
  {
    value: "3",
    label: "Branches",
  },
  {
    value: "24",
    label: "Certified Coaches",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-20 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="order-1 lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/images/taking a rock.png"
              alt="Athlete lifting a heavy dumbbell"
              className="w-full h-auto object-contain"
            />

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-main via-main/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Content */}
        <div className="order-2 lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>Short Profile</span>
          </div>

          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase leading-none tracking-wide text-secondary">
            Built by Strength Coaches, Not Businessmen
          </h2>

          <p className="mt-6 max-w-2xl font-body text-base lg:text-lg text-muted leading-8">
            Since 2019, Ironforge has provided a dedicated environment for
            serious strength training. Every detail, from calibrated weight
            plates to certified coaches, is designed to help members train
            safely, improve consistently, and achieve measurable results.
          </p>

          <div className="mt-10 grid w-full grid-cols-3 border-t border-border-color/40 pt-8">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl text-primary">
                  {stat.value}
                </span>

                <span className="mt-2 font-body text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
