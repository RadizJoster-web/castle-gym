import { Link } from "react-router-dom";
import { menuList } from "../../../assets/menuList";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  return (
    <div>
      <h4 className="font-body text-primary mb-5">Navigation</h4>

      <ul className="space-y-3 font-body text-sm text-muted">
        {menuList.map((item, index) => (
          <li key={index}>
            <HashLink
              smooth
              to={item.url}
              className="hover:text-light transition-colors duration-200"
            >
              {item.label}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
