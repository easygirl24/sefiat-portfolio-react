
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 transition ${
      isActive
        ? "bg-brand-light text-brand"
        : "text-ink hover:bg-brand-light hover:text-brand"
    }`;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-4"
      >
        Skip to main content
      </a>

      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link to="/" className="text-2xl font-extrabold">
          Sefiat<span className="text-brand"> Opeyemi.</span>
        </Link>

        
<div className="relative flex items-center gap-3 md:gap-4">
  {/* Hamburger button: mobile only */}
  <button
    type="button"
    onClick={() => setMenuOpen((open) => !open)}
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
    aria-controls="main-navigation"
    className="rounded-lg border border-gray-200 p-2 text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand md:hidden"
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  {/* Navigation links */}
  <nav
    id="main-navigation"
    aria-label="Main navigation"
    className={`${
      menuOpen ? "flex" : "hidden"
    } absolute right-0 top-14 z-50 min-w-48 flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-lg md:static md:flex md:min-w-0 md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
  >
    <NavLink
      to="/"
      end
      onClick={() => setMenuOpen(false)}
      className={navClass}
    >
      Home
    </NavLink>

    <NavLink
      to="/about"
      onClick={() => setMenuOpen(false)}
      className={navClass}
    >
      About
    </NavLink>

    <NavLink
      to="/projects"
      onClick={() => setMenuOpen(false)}
      className={navClass}
    >
      Projects
    </NavLink>

    <NavLink
      to="/contact"
      onClick={() => setMenuOpen(false)}
      className={navClass}
    >
      Contact
    </NavLink>
  </nav>
</div>


        <a
          href="https://github.com/easygirl24"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
        >
          GitHub ↗
        </a>
        <a
          href="https://docs.google.com/document/d/1Y9KRwZjMkjr80ITmRt-uw7bFzo7WY06cvNHBDZSJc6E/edit?tab=t.0"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
        >
          View Resume ↗
        </a>
      </header>

      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <footer className="mt-12 bg-ink px-6 py-8 text-center text-sm text-white">
        <p>© {new Date().getFullYear()} Lawal Sefiat Opeyemi</p>
        <a
          href="mailto:lawalsefiat@gmail.com"
          className="mt-2 inline-block underline hover:text-accent-yellow"
        >
          lawalsefiat@gmail.com
        </a>
      </footer>
    </div>
  );
}

export default App;
