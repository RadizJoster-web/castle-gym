import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#e4ff4e]"></span>

      <Link
        to={"/"}
        className="tracking-wide leading-[0.95] uppercase text-2xl text-secondary font-bold"
      >
        castle gym
      </Link>
    </div>
  );
}
