import { useParams, Link } from "react-router-dom";
import HopHeader from "@/components/hop/HopHeader";
import HopFooter from "@/components/hop/HopFooter";
import pattuImg from "@/assets/hop-collection-pattu.jpg";
import linenImg from "@/assets/hop-collection-linen.jpg";
import organzaImg from "@/assets/hop-collection-organza.jpg";
import fabricImg from "@/assets/hop-fabric.jpg";
import giftImg from "@/assets/hop-gift.jpg";
import heroImg from "@/assets/hop-hero.jpg";

const allImages = [pattuImg, linenImg, organzaImg, fabricImg, giftImg, heroImg];

const collectionMeta: Record<string, { title: string; tag: string; note: string }> = {
  pattu: {
    title: "Heritage Pattu",
    tag: "Coastal Teal · Golden Zari",
    note: "Traditional silks woven on the looms of South India, calibrated to our Coastal Blossom ratio.",
  },
  wedding: {
    title: "Wedding",
    tag: "Ceremonial · Quiet luxury",
    note: "Drapes for the modern bride — restrained, intimate, and never overwrought.",
  },
  contemporary: {
    title: "Contemporary Luxury",
    tag: "Heirloom · Modern wardrobe",
    note: "Sarees designed for today's hours, with the patience of an old loom.",
  },
  organza: {
    title: "Organza Light",
    tag: "Sheer · Almost weightless",
    note: "Hand-embroidered organza that drifts with the morning air.",
  },
  linen: {
    title: "Linen Calm",
    tag: "Everyday · Breathing space",
    note: "Soft, washed linen sarees for slow mornings and longer afternoons.",
  },
  all: {
    title: "The Atelier",
    tag: "All weaves · All seasons",
    note: "Every saree currently in the house.",
  },
};

const placeholderProducts = [
  { name: "Padmini Coastal Pattu", price: "₹ 48,000" },
  { name: "Aranya Linen Whisper", price: "₹ 12,400" },
  { name: "Sakura Organza Drift", price: "₹ 18,900" },
  { name: "Jasmine Gold Pallu", price: "₹ 36,500" },
  { name: "Mahanadi Teal Silk", price: "₹ 42,000" },
  { name: "Asha Daybreak Cotton", price: "₹ 9,800" },
  { name: "Devi Wedding Ivory", price: "₹ 86,000" },
  { name: "Mira Twilight Organza", price: "₹ 22,500" },
  { name: "Anaya Coastal Linen", price: "₹ 14,200" },
  { name: "Kavya Heirloom Pattu", price: "₹ 64,000" },
  { name: "Saanvi Pondicherry Linen", price: "₹ 11,900" },
  { name: "Nila Moonlit Silk", price: "₹ 38,500" },
];

const Category = () => {
  const { category = "all" } = useParams();
  const meta = collectionMeta[category] ?? collectionMeta.all;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HopHeader />
      <main>
        <section className="container pt-16 pb-12 text-center">
          <p className="text-xs tracking-[0.42em] uppercase text-teal mb-4">{meta.tag}</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
            {meta.title}
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-ink-soft font-light leading-relaxed">
            {meta.note}
          </p>
        </section>

        <section className="container pb-24">
          <div className="flex items-center justify-between border-y border-border py-4 mb-12 text-[0.7rem] tracking-[0.32em] uppercase text-ink-soft">
            <span>{placeholderProducts.length} sarees</span>
            <span className="hidden md:inline">Sort · Newest first</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-14">
            {placeholderProducts.map((p, i) => (
              <Link key={p.name} to={`/product/${i + 1}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-md bg-jasmine-deep">
                  <img
                    src={allImages[i % allImages.length]}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 space-y-1">
                  <p className="text-[0.65rem] tracking-[0.32em] uppercase text-teal">{meta.title}</p>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-lg md:text-xl text-ink leading-tight">{p.name}</h3>
                    <p className="text-sm font-light text-ink-soft whitespace-nowrap">{p.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <HopFooter />
    </div>
  );
};

export default Category;
