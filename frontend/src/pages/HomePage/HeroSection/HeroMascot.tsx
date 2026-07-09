export default function HeroMascot() {
  return (
    <div className="group relative flex justify-center w-full overflow-hidden">
      <img
        src="/images/hero-mascot.png"
        alt="Ironforge Gym Anime Mascot"
        className="
          w-[80%] sm:w-[70%] md:w-[60%] lg:w-full xl:w-[110%] 
          h-auto max-h-[45vh] sm:max-h-[52vh] md:max-h-[58vh] lg:max-h-[72vh] 
          object-contain object-bottom 
          
          /* 1. Ditambahkan scale-90 untuk mengecilkan gambar 10% */
          /* 2. Ditambahkan origin-bottom agar gambar tetap menempel di bawah saat mengecil */
          scale-90 origin-bottom
          
          /* State Awal */
          brightness-40 opacity-40 contrast-125 
          transition-all duration-500 ease-[var(--ease)]
          filter drop-shadow-[0_-4px_0px_rgba(255,255,255,0)]

          /* State Hover */
          group-hover:brightness-100 
          group-hover:opacity-100 
          group-hover:drop-shadow-[0_-8px_24px_rgba(255,255,255,0.35)]
        "
      />

      {/* Gradien Bawah */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-main via-main/80 to-transparent pointer-events-none" />
    </div>
  );
}
