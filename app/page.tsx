import CompanyOverview from "@/shared/components/CompanyOverview";
import CTA from "@/shared/components/CTA";
import FeaturedWork from "@/shared/components/FeaturedWork";
import Footer from "@/shared/components/Footer";
import Hero from "@/shared/components/Hero";
import NavBar from "@/shared/components/NavBar";
import Services from "@/shared/components/Services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <CompanyOverview />
        <CTA />

      </main>
    </>
  );
}
