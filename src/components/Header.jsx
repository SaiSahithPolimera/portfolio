import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-1 rounded-md transition-all duration-300 ${
      isActive 
        ? 'bg-black text-white dark:bg-[#f9fafb] dark:text-[#0a0e14]' 
        : 'text-stone-500 hover:text-black hover:bg-stone-100 dark:text-[#9ca3af] dark:hover:text-[#f9fafb] dark:hover:bg-[#374151]'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition-all duration-300 ${
      isActive 
        ? 'bg-black text-white dark:bg-[#f9fafb] dark:text-[#0a0e14]' 
        : 'text-stone-500 hover:text-black hover:bg-stone-100 dark:text-[#9ca3af] dark:hover:text-[#f9fafb] dark:hover:bg-[#374151]'
    }`;

  return (
    <header className="sticky top-0 z-10 header-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-lg md:text-xl font-semibold tracking-tight text-black dark:text-[#f9fafb]">
            Sai Sahith Polimera
          </NavLink>
          
          <div className="hidden md:flex items-center gap-4">
            <nav>
              <ul className="flex items-center space-x-2 text-sm font-medium">
                <li>
                  <NavLink to="/" className={navLinkClass}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/notes" className={navLinkClass}>Notes</NavLink>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-stone-500 hover:text-black hover:bg-stone-100 dark:text-[#9ca3af] dark:hover:text-[#f9fafb] dark:hover:bg-[#374151] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-48 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-[#0a0e14] border-t border-stone-200 dark:border-[#30363d]">
            <NavLink 
              to="/" 
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              projects
            </NavLink>
            <NavLink 
              to="/blog" 
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              blog
            </NavLink>
            <NavLink 
              to="/notes" 
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              notes
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

