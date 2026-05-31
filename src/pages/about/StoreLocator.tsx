import HopHeader from "../../components/hop/HopHeader";
import HopFooter from "../../components/hop/HopFooter";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import { Button } from "../../components/ui/button";

const TheAtelier = () => {
  return (
    <div className="min-h-screen bg-background">
      <HopHeader />
      <div className="flex">
        <div className="hidden lg:block"><AboutSidebar /></div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="The Atelier"
            subtitle="One studio, by the sea. By appointment only."
          />

          <ContentSection title="Pondicherry">
            <div className="bg-sand/30 rounded-md p-10 space-y-4">
              <p className="font-serif text-2xl text-ink">House of Padmavati Atelier</p>
              <p className="text-ink-soft font-light">14, Rue Suffren, White Town</p>
              <p className="text-ink-soft font-light">Pondicherry 605001, India</p>
              <p className="text-ink-soft font-light">Tuesday — Saturday · 11 am to 6 pm · by appointment</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="outline" className="rounded-full">Get directions</Button>
                <Button className="rounded-full bg-teal-deep hover:bg-teal text-jasmine">Request an appointment</Button>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="What happens at an atelier visit">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-ink">Slow viewing</h3>
                <p className="text-ink-soft font-light">A morning with the trunks — no rush, no music.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-ink">Drape fitting</h3>
                <p className="text-ink-soft font-light">Our studio drapes each saree for you, in five different ways.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-ink">Keepsake card</h3>
                <p className="text-ink-soft font-light">If your saree is a gift, your message is printed before you leave.</p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="A virtual visit">
            <div className="bg-jasmine-deep/40 rounded-md p-10">
              <p className="text-ink-soft font-light leading-relaxed max-w-2xl mb-6">
                If you cannot come to Pondicherry, we will come to you. A house consultant will video-call,
                show the cloth in daylight, drape it on a stand, and answer everything — slowly.
              </p>
              <Button variant="outline" className="rounded-full">Book a virtual visit</Button>
            </div>
          </ContentSection>
        </main>
      </div>
      <HopFooter />
    </div>
  );
};

export default TheAtelier;
