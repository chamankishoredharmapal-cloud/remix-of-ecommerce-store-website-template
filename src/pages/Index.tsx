import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HopHeader from "@/components/hop/HopHeader";
import HopFooter from "@/components/hop/HopFooter";
import Monogram from "@/components/hop/Monogram";
import heroImg from "@/assets/hop-hero.jpg";
import fabricImg from "@/assets/hop-fabric.jpg";
import giftImg from "@/assets/hop-gift.jpg";
import linenImg from "@/assets/hop-collection-linen.jpg";
import pattuImg from "@/assets/hop-collection-pattu.jpg";
import organzaImg from "@/assets/hop-collection-organza.jpg";

const collections = [
  { name: "Heritage Pattu", note: "Coastal Teal silks, golden zari.", img: pattuImg, href: "/category/pattu" },
  { name: "Linen Calm", note: "Daily wear, breathing space.", img: linenImg, href: "/category/linen" },
  { name: "Organza Light", note: "Sheer, almost weightless.", img: organzaImg, href: "/category/organza" },
];

const bestSellers = [
  { name: "Padmini Coastal Pattu", price: "₹ 48,000", img: pattuImg },
  { name: "Aranya Linen Whisper", price: "₹ 12,400", img: linenImg },
  { name: "Sakura Organza Drift", price: "₹ 18,900", img: organzaImg },
  { name: "Jasmine Gold Pallu", price: "₹ 36,500", img: fabricImg },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HopHeader />
      <main>
        {/* HERO ---------------------------------------------------------- */}
        <section className="relative">
          <div className="grid lg:grid-cols-12 gap-0 min-h-[88vh]">
            <div className="lg:col-span-5 flex items-center px-6 lg:pl-16 py-20 lg:py-0">
              <div className="max-w-md space-y-8 animate-fade-up">
                <p className="text-xs tracking-[0.4em] uppercase text-teal">Monsoon Collection · 2026</p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink text-balance">
                  Where the sun moves<br/>
                  <em className="text-teal font-light">through silk.</em>
                </h1>
                <p className="text-base font-light text-ink-soft leading-relaxed max-w-sm text-pretty">
                  A digital sanctuary for sarees woven with quiet artistry — heritage Pattu, whispered linen,
                  and organza that breathes with morning light.
                </p>
                <div className="flex items-center gap-6 pt-2">
                  <Link
                    to="/category/pattu"
                    className="group inline-flex items-center gap-2 bg-teal-deep text-jasmine px-7 py-3.5 text-sm tracking-[0.18em] uppercase rounded-full hover:bg-teal transition-colors"
                  >
                    Enter the gallery
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/about/our-story" className="text-sm font-light text-ink underline-offset-4 hover:underline">
                    Our story
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative bg-jasmine-deep">
              <img
                src={heroImg}
                alt="A woman in a coastal teal silk saree photographed in soft morning sunlight"
                className="absolute inset-0 w-full h-full object-cover"
                width={1920}
                height={1280}
              />
              <div className="absolute bottom-6 right-6 bg-jasmine/90 backdrop-blur-sm px-5 py-3 rounded-full text-[0.7rem] tracking-[0.25em] uppercase text-ink-soft">
                Padmini · Coastal Pattu
              </div>
            </div>
          </div>
        </section>

        {/* BRAND STORY --------------------------------------------------- */}
        <section className="container py-32 text-center">
          <Monogram className="h-14 mx-auto mb-8 animate-drift" />
          <p className="text-xs tracking-[0.4em] uppercase text-teal mb-6">A House, not a shop</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto text-balance leading-tight">
            "To the woman who wove my world —<br/>
            <em className="text-teal">this is for you.</em>"
          </h2>
          <p className="mt-10 max-w-2xl mx-auto text-ink-soft font-light leading-relaxed text-pretty">
            House of Padmavati was born from the quiet rhythm of a loom and the warmth of a mother's lap.
            Each saree is a vessel of memory — fresh, calm, intelligent, and quietly beautiful — designed
            to be passed on, never thrown away.
          </p>
        </section>

        {/* FEATURED COLLECTIONS ------------------------------------------ */}
        <section className="container pb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-teal mb-3">Collections</p>
              <h2 className="font-serif text-4xl md:text-5xl">The Coastal Blossom.</h2>
            </div>
            <Link to="/category/all" className="hidden md:inline text-sm font-light text-ink hover:text-teal underline underline-offset-4">
              View all
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {collections.map((c) => (
              <Link key={c.name} to={c.href} className="group block">
                <div className="aspect-[3/4] overflow-hidden rounded-md bg-jasmine-deep">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1080}
                    height={1440}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl text-ink">{c.name}</h3>
                  <ArrowRight className="w-4 h-4 text-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm font-light text-ink-soft mt-1">{c.note}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* HERITAGE / CRAFTSMANSHIP ------------------------------------- */}
        <section className="bg-sand/40">
          <div className="container py-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={fabricImg}
                alt="Macro of gold botanical motif on teal silk"
                loading="lazy"
                width={1080}
                height={1620}
                className="w-full aspect-[4/5] object-cover rounded-md gallery-shadow"
              />
              <div className="absolute -bottom-6 -right-6 bg-jasmine px-5 py-3 rounded-full text-xs tracking-[0.3em] uppercase text-ink shadow-sm hidden md:block">
                Pointcarre CAD · Hand loom
              </div>
            </div>
            <div className="space-y-7 max-w-md">
              <p className="text-xs tracking-[0.4em] uppercase text-teal">Heritage · Weave</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Sixty per cent jasmine,<br/>twenty-five per cent teal,<br/>ten golden, five blush.
              </h2>
              <p className="text-ink-soft font-light leading-relaxed text-pretty">
                Every Padmavati weave is calibrated to the Coastal Blossom ratio before a single thread meets
                the loom. We refuse aggressive selling, pop-ups, and countdown timers — and instead invite you
                to slow down and feel the cloth.
              </p>
              <Link to="/about/craftsmanship" className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-teal-deep hover:text-teal">
                The craft <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* BEST SELLERS -------------------------------------------------- */}
        <section className="container py-32">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-teal mb-3">Quietly loved</p>
            <h2 className="font-serif text-4xl md:text-5xl">Best of the house.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bestSellers.map((p) => (
              <Link key={p.name} to="/product/1" className="group">
                <div className="aspect-[4/5] overflow-hidden bg-jasmine-deep rounded-md">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-serif text-lg md:text-xl text-ink leading-tight">{p.name}</h3>
                  <p className="text-sm font-light text-ink-soft">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* GIFT EXPERIENCE ---------------------------------------------- */}
        <section className="container pb-32">
          <div className="grid lg:grid-cols-2 bg-teal-deep text-jasmine rounded-lg overflow-hidden">
            <div className="aspect-[4/3] lg:aspect-auto relative">
              <img
                src={giftImg}
                alt="A folded silk saree beside a jasmine paper gift box and a handwritten keepsake card"
                loading="lazy"
                width={1920}
                height={1080}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center space-y-6">
              <p className="text-xs tracking-[0.4em] uppercase text-sand">The Modern Heirloom</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                A keepsake note,<br/>printed on jasmine cardstock.
              </h2>
              <p className="font-light text-jasmine/80 leading-relaxed max-w-md">
                When you gift a Padmavati, your message is printed in Ink Charcoal on Jasmine Mist paper —
                tucked inside a hand-wrapped box. No marketing, no clutter. Only your words and the cloth.
              </p>
              <Link
                to="/gift"
                className="inline-flex items-center gap-2 bg-jasmine text-ink px-7 py-3.5 rounded-full text-sm tracking-[0.18em] uppercase w-fit hover:bg-sand transition-colors"
              >
                Begin a gift <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* JOURNAL PREVIEW ---------------------------------------------- */}
        <section className="container pb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-teal mb-3">The Journal</p>
              <h2 className="font-serif text-4xl md:text-5xl">Slow words on cloth and light.</h2>
            </div>
            <Link to="/journal" className="hidden md:inline text-sm font-light text-ink hover:text-teal underline underline-offset-4">
              Read all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "How morning light reads a weave.", tag: "Light", img: fabricImg },
              { title: "Five drapes for a quiet wedding.", tag: "Drape", img: pattuImg },
              { title: "Linen, and the art of doing less.", tag: "Linen", img: linenImg },
            ].map((article) => (
              <Link key={article.title} to="/journal/1" className="group">
                <div className="aspect-[5/4] overflow-hidden rounded-md bg-jasmine-deep">
                  <img
                    src={article.img}
                    alt={article.title}
                    loading="lazy"
                    width={1000}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs tracking-[0.3em] uppercase text-teal">{article.tag}</p>
                <h3 className="mt-2 font-serif text-2xl text-ink leading-snug text-balance group-hover:text-teal transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <HopFooter />
    </div>
  );
};

export default Index;
