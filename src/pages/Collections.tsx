import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HopHeader from "@/components/hop/HopHeader";
import HopFooter from "@/components/hop/HopFooter";
import Monogram from "@/components/hop/Monogram";
import pattuImg from "@/assets/hop-collection-pattu.jpg";
import linenImg from "@/assets/hop-collection-linen.jpg";
import organzaImg from "@/assets/hop-collection-organza.jpg";
import fabricImg from "@/assets/hop-fabric.jpg";
import giftImg from "@/assets/hop-gift.jpg";

const collections = [
  {
    name: "Heritage Pattu",
    tag: "Coastal Teal · Golden Zari",
    note: "Traditional silks woven on the looms of South India — calibrated to our Coastal Blossom ratio.",
    img: pattuImg,
    href: "/category/pattu",
    pieces: "24 sarees",
  },
  {
    name: "Wedding Collection",
    tag: "Ceremonial · Quiet Luxury",
    note: "Drapes for the modern bride — restrained, intimate, and never overwrought.",
    img: fabricImg,
    href: "/category/wedding",
    pieces: "18 sarees",
  },
  {
    name: "Organza Collection",
    tag: "Sheer · Almost Weightless",
    note: "Hand-embroidered organza that drifts with the morning air.",
    img: organzaImg,
    href: "/category/organza",
    pieces: "16 sarees",
  },
  {
    name: "Linen Collection",
    tag: "Everyday · Breathing Space",
    note: "Soft, washed linen sarees for slow mornings and longer afternoons.",
    img: linenImg,
    href: "/category/linen",
    pieces: "22 sarees",
  },
  {
    name: "Contemporary Luxury",
    tag: "Heirloom · Modern Wardrobe",
    note: "Sarees designed for today's hours, with the patience of an old loom.",
    img: giftImg,
    href: "/category/contemporary",
    pieces: "20 sarees",
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HopHeader />
      <main>
        {/* Hero */}
        <section className="container pt-12 sm:pt-16 pb-10 sm:pb-14 text-center">
          <Monogram className="h-10 sm:h-12 mx-auto mb-5 sm:mb-6 opacity-70" />
          <p className="text-[0.65rem] sm:text-xs tracking-[0.42em] uppercase text-teal mb-3 sm:mb-4">
            The Atelier
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
            Five collections,<br />
            <em className="text-teal">one quiet house.</em>
          </h1>
          <p className="mt-5 sm:mt-7 max-w-xl mx-auto text-sm sm:text-base text-ink-soft font-light leading-relaxed px-4">
            Every Padmavati saree belongs to one of five families — each woven with a different rhythm,
            but the same Coastal Blossom calibration.
          </p>
        </section>

        {/* Collections grid */}
        <section className="container pb-20 sm:pb-28">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {collections.map((c, i) => (
              <Link
                key={c.name}
                to={c.href}
                className={`group grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-md bg-jasmine-deep">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="space-y-4 sm:space-y-5 lg:px-6">
                  <p className="text-[0.65rem] sm:text-xs tracking-[0.42em] uppercase text-teal">
                    {c.tag}
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance group-hover:text-teal transition-colors duration-500">
                    {c.name}
                  </h2>
                  <p className="text-sm sm:text-base text-ink-soft font-light leading-relaxed max-w-md text-pretty">
                    {c.note}
                  </p>
                  <div className="flex items-center gap-5 sm:gap-7 pt-2">
                    <span className="inline-flex items-center gap-2 text-[0.65rem] sm:text-xs tracking-[0.32em] uppercase text-teal-deep border-b border-teal-deep/40 pb-1">
                      Explore Collection
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[0.65rem] sm:text-xs tracking-[0.24em] uppercase text-ink-soft/70">
                      {c.pieces}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing whisper */}
        <section className="bg-sand/40">
          <div className="container py-16 sm:py-20 lg:py-24 text-center">
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ink leading-snug max-w-2xl mx-auto text-balance">
              "A saree is never bought. It is chosen, then carried."
            </p>
            <Link
              to="/about/our-story"
              className="mt-8 inline-flex items-center gap-2 text-[0.7rem] sm:text-xs tracking-[0.32em] uppercase text-teal-deep hover:text-teal"
            >
              The Padmavati story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <HopFooter />
    </div>
  );
};

export default Collections;
