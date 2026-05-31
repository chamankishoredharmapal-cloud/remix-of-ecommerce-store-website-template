import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Monogram from "./Monogram";

const collections = [
  { label: "Heritage Pattu", href: "/category/pattu" },
  { label: "Wedding", href: "/category/wedding" },
  { label: "Contemporary", href: "/category/contemporary" },
  { label: "Organza", href: "/category/organza" },
  { label: "Linen", href: "/category/linen" },
];

const editorial = [
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about/our-story" },
];

const HopHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-jasmine/90 backdrop-blur-md border-b border-border/60">
      {/* Whisper bar */}
      <div className="bg-teal-deep text-jasmine text-[0.7rem] tracking-[0.32em] uppercase text-center py-2 font-light">
        Every saree carries a story · Woven for modern heirlooms
      </div>

      <div className="container flex items-center justify-between h-24">
        {/* Left: nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-[0.78rem] font-light text-ink tracking-[0.14em] uppercase w-1/3">
          {collections.slice(0, 3).map((c) => (
            <Link key={c.href} to={c.href} className="hover:text-teal transition-colors duration-500">
              {c.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Centre: logo */}
        <Link to="/" className="flex-1 lg:flex-none flex flex-col items-center justify-center" aria-label="House of Padmavati home">
          <Monogram variant="signature" className="h-14 md:h-16" />
          <span className="mt-1 font-serif text-[0.7rem] md:text-xs tracking-[0.42em] uppercase text-ink">
            House of Padmavati
          </span>
        </Link>

        {/* Right: utilities */}
        <div className="hidden lg:flex items-center gap-6 text-[0.78rem] font-light text-ink tracking-[0.14em] uppercase w-1/3 justify-end">
          {collections.slice(3).map((c) => (
            <Link key={c.href} to={c.href} className="hover:text-teal transition-colors duration-500">
              {c.label}
            </Link>
          ))}
          {editorial.map((c) => (
            <Link key={c.href} to={c.href} className="hover:text-teal transition-colors duration-500">
              {c.label}
            </Link>
          ))}
          <button aria-label="Search" className="hover:text-teal transition-colors"><Search className="w-4 h-4" /></button>
          <Link to="/account" aria-label="Account" className="hover:text-teal transition-colors"><User className="w-4 h-4" /></Link>
          <Link to="/cart" aria-label="Bag" className="hover:text-teal transition-colors flex items-center gap-1">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[0.7rem]">(0)</span>
          </Link>
        </div>

        <Link to="/cart" className="lg:hidden text-ink" aria-label="Bag">
          <ShoppingBag className="w-5 h-5" />
        </Link>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-jasmine animate-fade-in">
          <div className="container flex items-center justify-between h-20 border-b border-border">
            <div className="flex items-center gap-3">
              <Monogram variant="signature" className="h-10" />
              <span className="font-serif text-xs tracking-[0.32em] uppercase">House of Padmavati</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="container py-10 flex flex-col gap-5 font-serif text-3xl text-ink">
            {collections.map((c) => (
              <Link key={c.href} to={c.href} onClick={() => setOpen(false)} className="hover:text-teal transition-colors">
                {c.label}
              </Link>
            ))}
            <div className="h-px bg-border my-4" />
            {editorial.map((c) => (
              <Link key={c.href} to={c.href} onClick={() => setOpen(false)} className="text-xl">
                {c.label}
              </Link>
            ))}
            <Link to="/account" onClick={() => setOpen(false)} className="text-xl">Account</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HopHeader;
