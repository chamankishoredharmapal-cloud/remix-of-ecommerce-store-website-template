import HopHeader from "../../components/hop/HopHeader";
import HopFooter from "../../components/hop/HopFooter";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Craftsmanship = () => {
  return (
    <div className="min-h-screen bg-background">
      <HopHeader />
      <div className="flex">
        <div className="hidden lg:block"><AboutSidebar /></div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Craftsmanship"
            subtitle="Every Padmavati saree is made the slow way — by hand, in small studios, over weeks."
          />

          <ContentSection title="The Loom">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="font-serif text-xl text-ink">A single weaver, a single saree</h3>
                <p className="text-ink-soft leading-relaxed font-light">
                  Each saree is woven from beginning to end by one weaver on a single pit-loom.
                  No two are identical — small irregularities are the signature of the human hand.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-xl text-ink">Pure silk, pure cotton, pure linen</h3>
                <p className="text-ink-soft leading-relaxed font-light">
                  We work only with mulberry silk, hand-spun cotton, and slow-washed linen.
                  Zari is real gold-leaf wrapped over silk — never plastic.
                </p>
              </div>
            </div>

            <div className="bg-sand/30 rounded-md p-10">
              <h3 className="font-serif text-3xl text-ink mb-6">The Coastal Blossom ratio</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="font-serif text-4xl text-teal-deep">60%</div>
                  <p className="text-sm text-ink-soft mt-2 font-light">Jasmine Mist ground</p>
                </div>
                <div>
                  <div className="font-serif text-4xl text-teal-deep">25%</div>
                  <p className="text-sm text-ink-soft mt-2 font-light">Coastal Teal motifs</p>
                </div>
                <div>
                  <div className="font-serif text-4xl text-teal-deep">10%</div>
                  <p className="text-sm text-ink-soft mt-2 font-light">Golden Sand zari</p>
                </div>
                <div>
                  <div className="font-serif text-4xl text-teal-deep">5%</div>
                  <p className="text-sm text-ink-soft mt-2 font-light">Sakura blush accent</p>
                </div>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="A modern heirloom">
            <p className="text-lg text-ink-soft leading-relaxed font-light max-w-3xl">
              A Padmavati saree is made to be folded into trunks, passed between women, and worn again
              forty years from now. We offer lifetime re-pleating, gentle restoration of zari, and a
              house-takeback for sarees you have outgrown — they return to our studio, never to landfill.
            </p>
          </ContentSection>
        </main>
      </div>
      <HopFooter />
    </div>
  );
};

export default Craftsmanship;
