import Header from "./Header";
import Navigation from "./Navigation";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="border-t border-border-color bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-14 items-start">
          <div className="space-y-4">
            <Header />
            <p className="mt-4 font-body text-muted leading-7 max-w-sm">
              Premium fitness center dedicated to helping you achieve strength,
              endurance, and a healthier lifestyle.
            </p>
          </div>

          <Navigation />
          <Contact />
          <SocialMedia />
        </div>

        <Copyright />
      </div>
    </footer>
  );
}
