import { createFileRoute } from "@tanstack/react-router";
import Services from "../components/Services";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-24">
      <Services />
    </div>
  );
}
