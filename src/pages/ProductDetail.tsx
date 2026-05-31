import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import HopHeader from "@/components/hop/HopHeader";
import HopFooter from "@/components/hop/HopFooter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import pattuImg from "@/assets/hop-collection-pattu.jpg";
import fabricImg from "@/assets/hop-fabric.jpg";
import linenImg from "@/assets/hop-collection-linen.jpg";
import organzaImg from "@/assets/hop-collection-organza.jpg";
import giftImg from "@/assets/hop-gift.jpg";

const gallery = [pattuImg, fabricImg, giftImg, organzaImg];

const ProductDetail = () => {
  const { productId } = useParams();
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HopHeader />
      <main className="container pt-10 pb-24">
        <Breadcrumb className="mb-10">
          <BreadcrumbList className="text-[0.7rem] tracking-[0.3em] uppercase text-ink-soft">
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">House</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/category/pattu">Heritage Pattu</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Padmini Coastal Pattu</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-jasmine-deep mb-4">
              <img
                src={gallery[active]}
                alt="Padmini Coastal Pattu saree"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden rounded bg-jasmine-deep border transition-all duration-500 ${
                    i === active ? "border-teal-deep" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-32 lg:h-fit space-y-8">
            <div>
              <p className="text-[0.7rem] tracking-[0.42em] uppercase text-teal">Heritage Pattu</p>
              <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink leading-tight">
                Padmini Coastal Pattu
              </h1>
              <p className="mt-4 text-xl font-light text-ink-soft">₹ 48,000</p>
            </div>

            <p className="text-ink-soft font-light leading-relaxed max-w-md">
              A coastal teal pure-silk saree, hand-woven on a single pit-loom over twenty-one days.
              Golden zari botanicals trace the pallu — a quiet study of jasmine in morning light.
            </p>

            <div className="space-y-3">
              <p className="text-[0.7rem] tracking-[0.32em] uppercase text-ink-soft">Drape · 5.5m + 0.8m blouse</p>
              <div className="flex flex-wrap gap-3">
                {["Coastal Teal", "Jasmine Ivory", "Twilight Rose"].map((c) => (
                  <button
                    key={c}
                    className="px-4 py-2 border border-border text-xs tracking-[0.2em] uppercase rounded-full hover:border-teal-deep transition-colors duration-500"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button className="flex-1 bg-teal-deep text-jasmine px-7 py-4 text-[0.7rem] tracking-[0.32em] uppercase rounded-full hover:bg-teal transition-colors duration-500">
                Add to bag
              </button>
              <button
                aria-label="Save"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:text-teal transition-colors"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>

            <Accordion type="single" collapsible className="border-t border-border pt-2">
              <AccordionItem value="weave" className="border-b border-border">
                <AccordionTrigger className="text-sm tracking-wider uppercase">The Weave</AccordionTrigger>
                <AccordionContent className="text-ink-soft font-light leading-relaxed">
                  100% mulberry silk, gold-leaf zari, hand-woven on a single pit-loom in Kanchipuram by a
                  third-generation weaver.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care" className="border-b border-border">
                <AccordionTrigger className="text-sm tracking-wider uppercase">Saree Care</AccordionTrigger>
                <AccordionContent className="text-ink-soft font-light leading-relaxed">
                  Dry clean only. Store folded in muslin, refolded every season. Air, do not iron the pallu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ship" className="border-b border-border">
                <AccordionTrigger className="text-sm tracking-wider uppercase">Wrapped & Shipped</AccordionTrigger>
                <AccordionContent className="text-ink-soft font-light leading-relaxed">
                  Hand-wrapped in jasmine paper with a handwritten keepsake card. Worldwide shipping, fully insured.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* You might also like */}
        <section className="mt-32">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl">From the same loom.</h2>
            <Link to="/category/pattu" className="text-sm font-light text-ink hover:text-teal flex items-center gap-2">
              View Heritage Pattu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {[
              { name: "Mahanadi Teal Silk", price: "₹ 42,000", img: pattuImg },
              { name: "Jasmine Gold Pallu", price: "₹ 36,500", img: fabricImg },
              { name: "Sakura Organza Drift", price: "₹ 18,900", img: organzaImg },
              { name: "Aranya Linen Whisper", price: "₹ 12,400", img: linenImg },
            ].map((p, i) => (
              <Link key={p.name} to={`/product/${i + 2}`} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-jasmine-deep rounded-md">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-serif text-lg text-ink leading-tight">{p.name}</h3>
                  <p className="text-sm font-light text-ink-soft">{p.price}</p>
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

export default ProductDetail;
