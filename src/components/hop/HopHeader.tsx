import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Monogram from "./Monogram";

const collections = [
  { label: "Heritage Pattu", href: "/category/pattu" },
  { label: "Wedding", href: "/category/wedding" },
  { label: "Contemporary", href: "/category/contemporary" },
  { label: "Linen", href: "/category/linen" },
  { label: "Organza", href: "/category/organza" },
];

const HopHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-jasmine/85 backdrop-blur-md border-b border-border/60">
      {/* Whisper bar */}
      <div className="bg-teal-deep text-jasmine text-[0.7rem] tracking-[0.3em] uppercase text-center py-2 font-light">
        Complimentary shipping within India · Hand-wrapped in jasmine paper
      </div>

      <div className="container flex items-center justify-between h-20">
        {/* Left: nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-light text-ink tracking-wide w-1/3">
          {collections.slice(0, 3).map((c) => (
            <Link key={c.href} to={c.href} className="hover:text-teal transition-colors">
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
        <Link to="/" className="flex-1 lg:flex-none flex justify-center" aria-label="House of Padmavati home">
          <Monogram className="h-10" withWordmark />
        </Link>

        {/* Right: utilities */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-light text-ink tracking-wide w-1/3 justify-end">
          <Link to="/journal" className="hover:text-teal transition-colors">Journal</Link>
          <Link to="/about/our-story" className="hover:text-teal transition-colors">About</Link>
          <button aria-label="Search" className="hover:text-teal transition-colors"><Search className="w-4 h-4" /></button>
          <Link to="/account" aria-label="Account" className="hover:text-teal transition-colors"><User className="w-4 h-4" /></Link>
          <Link to="/wishlist" aria-label="Wishlist" className="hover:text-teal transition-colors"><Heart className="w-4 h-4" /></Link>
          <Link to="/cart" aria-label="Bag" className="hover:text-teal transition-colors flex items-center gap-1">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs">(0)</span>
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
            <Monogram className="h-9" withWordmark />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="container py-10 flex flex-col gap-6 font-serif text-3xl text-ink">
            {collections.map((c) => (
              <Link key={c.href} to={c.href} onClick={() => setOpen(false)} className="hover:text-teal transition-colors">
                {c.label}
              </Link>
            ))}
            <div className="h-px bg-border my-4" />
            <Link to="/journal" onClick={() => setOpen(false)} className="text-xl">Journal</Link>
            <Link to="/about/our-story" onClick={() => setOpen(false)} className="text-xl">About</Link>
            <Link to="/account" onClick={() => setOpen(false)} className="text-xl">Account</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HopHeader;
