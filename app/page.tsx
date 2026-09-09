import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { WhyMe } from "@/components/why-me";
import { SelectedWork } from "@/components/selected-work";
import { HowIDesign } from "@/components/how-i-design";
import { SystemsPlayground } from "@/components/systems-playground";
import { Experience } from "@/components/experience";
import { TechnicalDomains } from "@/components/technical-domains";
import { EngineeringNotes } from "@/components/engineering-notes";
import { PersonalPositioning } from "@/components/personal-positioning";
import { RecruiterQuickView } from "@/components/recruiter-quick-view";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { RecruiterViewPanel } from "@/components/recruiter-view-panel";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WhyMe />
        <SelectedWork />
        <HowIDesign />
        <SystemsPlayground />
        <Experience />
        <TechnicalDomains />
        <EngineeringNotes />
        <PersonalPositioning />
        <RecruiterQuickView />
        <FinalCTA />
      </main>
      <Footer />
      <RecruiterViewPanel />
    </>
  );
}
