import HopHeader from "../../components/hop/HopHeader";
import HopFooter from "../../components/hop/HopFooter";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";

const SareeCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <HopHeader />
      <div className="flex">
        <div className="hidden lg:block"><AboutSidebar /></div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Saree Care"
            subtitle="On living with a Padmavati — questions, answered slowly."
          />

          <ContentSection title="Quiet correspondence">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-ink">Whisper</h3>
                <p className="text-ink-soft font-light">care@houseofpadmavati.com</p>
                <p className="text-sm text-ink-soft/70">A reply within two days, never automated.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-ink">WhatsApp</h3>
                <p className="text-ink-soft font-light">+91 99999 99999</p>
                <p className="text-sm text-ink-soft/70">Mon–Sat, 10 am to 6 pm IST.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-ink">Atelier visit</h3>
                <Button variant="outline" className="rounded-full">Request appointment</Button>
                <p className="text-sm text-ink-soft/70">Pondicherry, by appointment only.</p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Frequently, gently asked">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { k: "ship", q: "How is my saree wrapped and shipped?", a: "Every Padmavati saree is folded in muslin, wrapped in jasmine paper, and tucked into a hand-finished box. Worldwide shipping is fully insured." },
                { k: "ret", q: "Do you accept returns?", a: "Yes — within 14 days of delivery, in unworn condition. Custom blouses and bridal pieces are final sale." },
                { k: "care", q: "How should I care for my saree?", a: "Dry clean only with a trusted, gentle dry-cleaner. Store folded in muslin, refolded each season to prevent crease wear. Air the pallu rather than ironing it." },
                { k: "alter", q: "Can my blouse be tailored?", a: "Yes — first-fit blouse tailoring is included with every saree. Send us your measurements after purchase." },
                { k: "loom", q: "Where is each saree woven?", a: "Each saree carries a small card naming the weaver, the loom, and the month it was finished." },
              ].map((f) => (
                <AccordionItem key={f.k} value={f.k} className="border border-border rounded-md px-6">
                  <AccordionTrigger className="text-left hover:no-underline font-serif text-lg text-ink">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-ink-soft font-light">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ContentSection>

          <ContentSection title="Write to the house">
            <form className="space-y-6 max-w-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <Input className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0" placeholder="First name" />
                <Input className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0" placeholder="Last name" />
              </div>
              <Input type="email" className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0" placeholder="Email" />
              <Input className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0" placeholder="Order number (optional)" />
              <Textarea className="rounded-md min-h-[140px]" placeholder="A note from you" />
              <Button type="submit" className="rounded-full bg-teal-deep hover:bg-teal text-jasmine tracking-[0.3em] uppercase text-xs px-8 py-6">
                Send a whisper
              </Button>
            </form>
          </ContentSection>
        </main>
      </div>
      <HopFooter />
    </div>
  );
};

export default SareeCare;
