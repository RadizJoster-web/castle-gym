import { useState } from "react";
import { menuList } from "../../../assets/menuList";
import { HashLink } from "react-router-hash-link";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-main border-b border-border-color sticky top-0 z-50 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO AREA */}
        <div className="flex items-center gap-2">
          {/* Dot Indicator Hijau Volt */}
          <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]"></span>
          <HashLink
            smooth
            to="/#hero"
            className="tracking-wide leading-[0.95] uppercase text-2xl text-secondary font-bold"
          >
            castle gym
          </HashLink>
        </div>

        <DesktopNav menuList={menuList} />
        <MobileNav menuList={menuList} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
