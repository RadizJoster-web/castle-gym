import { gymStats } from "../../../assets/gymStats";

export default function HeroStats() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 border border-border-color bg-card/40 rounded-xl overflow-hidden backdrop-blur-sm mt-4">
      {gymStats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 flex flex-col gap-3 justify-between ${
            index !== gymStats.length - 1
              ? "border-b md:border-b-0 md:border-r border-border-color"
              : ""
          }`}
        >
          {/* Header Card Status */}
          <div
            className={`flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-primary`}
          >
            <span className={`w-1.5 h-1.5 rounded-full bg-primary`}></span>
            {stat.badge}
          </div>

          {/* Value Stat */}
          <div
            className={`font-display text-3xl sm:text-4xl tracking-wide uppercase mt-1 text-secondary`}
          >
            {stat.value}
          </div>

          {/* Description Stat */}
          <p className="font-inter text-xs text-muted">{stat.desc}</p>
        </div>
      ))}
    </div>
  );
}
