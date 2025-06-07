import CompanyOverview from "@/shared/components/CompanyOverview";
import CTA from "@/shared/components/CTA";
import FeaturedWork from "@/shared/components/FeaturedWork";
import Hero from "@/shared/components/Hero";
import Pricing from "@/shared/components/Pricing";
import Services from "@/shared/components/Services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <CompanyOverview />
        {/* <Pricing /> */}
        <CTA />
      </main>
    </>
  );
}
