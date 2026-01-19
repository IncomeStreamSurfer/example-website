import HeroSurge from "../components/HeroSurge";
import LiveStatus from "../components/LiveStatus";
import SchematicServices from "../components/SchematicServices";
import LocationTrust from "../components/LocationTrust";
import PressureForm from "../components/PressureForm";
import SystemReviews from "../components/SystemReviews";
import PressureFAQ from "../components/PressureFAQ";
import FooterDiagnostic from "../components/FooterDiagnostic";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      <HeroSurge
        title="Galway Plumbing Emergency"
        subtitle="High-velocity hydraulic response and structural restoration. Operating with 100% capacity across all Galway sectors."
      />
      <LiveStatus />
      <SchematicServices />
      <LocationTrust location="Galway City" />
      <PressureForm />
      <SystemReviews />
      <PressureFAQ />
      <FooterDiagnostic />
    </div>
  );
}
