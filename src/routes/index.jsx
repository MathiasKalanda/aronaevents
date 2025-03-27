import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import EventsShow from "../components/EventsShow";
import Services from "../components/Services";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {" "}
      <HeroSection /> <Mission />
      <EventsShow />
      <Services />
    </div>
  );
}
