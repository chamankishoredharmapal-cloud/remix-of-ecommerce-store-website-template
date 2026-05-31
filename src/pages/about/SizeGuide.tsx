import HopHeader from "../../components/hop/HopHeader";
import HopFooter from "../../components/hop/HopFooter";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const DrapeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <HopHeader />
      <div className="flex">
        <div className="hidden lg:block"><AboutSidebar /></div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Drape Guide"
            subtitle="Five quiet ways to wear a Padmavati saree."
          />

          <ContentSection title="Sizing">
            <div className="bg-sand/30 rounded-md p-8">
              <p className="text-ink-soft font-light leading-relaxed mb-6">
                A traditional Padmavati saree is 5.5 metres of drape plus 0.8 metres of unstitched
                blouse fabric. The blouse can be tailored to bust sizes XS through 3XL — our atelier
                offers free first-fit alteration.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { l: "Petite", v: "Drape height — 1.50 to 1.60 m" },
                  { l: "Standard", v: "Drape height — 1.60 to 1.72 m" },
                  { l: "Tall", v: "Drape height — 1.72 to 1.85 m" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-serif text-xl text-ink">{s.l}</p>
                    <p className="text-sm text-ink-soft font-light mt-1">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </ContentSection>

          <ContentSection title="The five drapes">
            <div className="space-y-10">
              {[
                { n: "Nivi", d: "The classical South Indian drape — pleats at the front, pallu over the left shoulder." },
                { n: "Coastal", d: "Our house drape — looser pleats, pallu pinned at the shoulder, gathered at the wrist." },
                { n: "Pondicherry", d: "A breezy daywear drape with shorter pleats and an open pallu." },
                { n: "Bridal Padmavati", d: "Full pleats, pallu draped twice — for ceremonies and quiet weddings." },
                { n: "Whisper", d: "An organza-only drape — pallu allowed to drift, never pinned." },
              ].map((d) => (
                <div key={d.n} className="grid md:grid-cols-4 gap-6 border-b border-border pb-8">
                  <p className="font-serif text-2xl text-ink">{d.n}</p>
                  <p className="md:col-span-3 text-ink-soft font-light leading-relaxed">{d.d}</p>
                </div>
              ))}
            </div>
          </ContentSection>
        </main>
      </div>
      <HopFooter />
    </div>
  );
};

export default DrapeGuide;
