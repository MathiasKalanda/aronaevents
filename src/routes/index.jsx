import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import EventsShow from "../components/EventsShow";
import Services from "../components/Services";
import ProductsHire from "../components/ProductsHire";
import FAQ from "../components/FAQ";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {" "}
      <HeroSection />
      <Mission />
      <EventsShow />
      <Services />
      <ProductsHire />
      <FAQ />
    </div>
  );
}
