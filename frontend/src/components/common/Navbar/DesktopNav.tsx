import { HashLink } from "react-router-hash-link";

export default function DesktopNav({
  menuList,
}: {
  menuList: { label: string; url?: string }[];
}) {
  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-muted">
        {menuList.map((item, index) => (
          <li key={index}>
            <HashLink
              smooth
              to={item.url || "#"}
              className="hover:text-light transition-colors duration-200"
            >
              {item.label}
            </HashLink>
          </li>
        ))}
      </ul>

      {/* DESKTOP BUTTONS */}
      <div className="hidden lg:flex items-center gap-4 font-body text-sm font-semibold">
        <HashLink
          smooth
          to="/login"
          className="px-6 py-2.5 text-light border border-border-color rounded-full hover:bg-hover transition-colors duration-200"
        >
          Log in
        </HashLink>
        <HashLink
          smooth
          to="/register"
          className="px-6 py-2.5 bg-primary text-main rounded-full hover:bg-primary-hover transition-colors duration-200 shadow-sm"
        >
          Register
        </HashLink>
      </div>
    </>
  );
}
