import React from "react";
import { Link } from "react-scroll";

export default function Navber() {
  const links = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
