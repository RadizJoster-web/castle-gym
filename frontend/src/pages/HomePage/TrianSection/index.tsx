export default function TrianSection() {
  return (
    <section className="relative w-full px-6 py-16 md:px-12 lg:px-20 bg-main">
      {/* Container utama berbentuk card besar (seperti di gambar) */}
      <div className="w-full max-w-7xl mx-auto bg-card rounded-2xl border border-border-color p-12 md:p-16 lg:p-20 text-center flex flex-col items-center gap-6">
        {/* Heading Utama - Menggunakan font-display (Bebas Neue) */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-secondary tracking-wide uppercase font-bold leading-tight">
          YOUR FIRST TRAINING SESSION AWAITS
        </h2>

        {/* Teks Deskripsi - Menggunakan font-body (Inter) & text-muted */}
        <p className="font-body text-base md:text-lg text-muted max-w-2xl leading-relaxed mt-2">
          Sign up today and get a free 1-day trial at any of our branches.
        </p>

        {/* AREA CTA BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-body text-sm font-semibold mt-6 w-full sm:w-auto">
          {/* Tombol Utama (Primary) - Kuning Volt */}
          <a
            href="#join"
            className="w-full sm:w-auto px-10 py-3.5 bg-primary text-main rounded-full text-center font-bold hover:bg-primary-hover transition-colors duration-200 shadow-lift"
          >
            Join as Member
          </a>

          {/* Tombol Sekunder (Outline) */}
          <a
            href="#shop"
            className="w-full sm:w-auto px-10 py-3.5 text-secondary border border-border-color rounded-full text-center hover:bg-main transition-colors duration-200"
          >
            Visit Online Store
          </a>
        </div>
      </div>
    </section>
  );
}
