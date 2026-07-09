import { HiMenu, HiX } from "react-icons/hi";
import type { Dispatch, SetStateAction } from "react";
import { HashLink } from "react-router-hash-link";

export default function MobileNav({
  menuList,
  isOpen,
  setIsOpen,
}: {
  menuList: { label: string; url?: string }[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="lg:hidden">
      {/* TOMBOL HAMBURGER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-light text-2xl focus:outline-none relative z-50 flex items-center justify-center p-1"
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      <div
        className={`fixed top-[72px] left-0 right-0 bottom-0 w-full h-[calc(100vh-72px)] bg-main/98 backdrop-blur-md border-t border-border-color font-body px-6 py-8 flex flex-col justify-between transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* LINK NAVIGASI */}
        <ul className="flex flex-col items-center gap-5 text-lg text-muted">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="border-b border-border-color/30 pb-3 last:border-none"
            >
              <HashLink
                smooth
                to={item.url || "#"}
                className="block text-muted hover:text-light active:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* TOMBOL AKSI (BOTTOM ANCHOR) */}
        <div className="flex flex-col gap-3 font-semibold text-center text-sm mb-8">
          <HashLink
            to="/login"
            className="w-full py-3.5 text-light border border-border-color rounded-full hover:bg-hover active:bg-hover transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Log in
          </HashLink>
          <HashLink
            to="/register"
            className="w-full py-3.5 bg-primary text-main rounded-full hover:bg-primary-hover active:bg-primary-hover transition-colors shadow-[0_4px_20px_var(--color-primary)/15%]"
            onClick={() => setIsOpen(false)}
          >
            Register
          </HashLink>
        </div>
      </div>
    </div>
  );
}
