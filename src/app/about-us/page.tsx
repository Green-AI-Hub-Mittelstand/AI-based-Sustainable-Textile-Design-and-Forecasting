import Link from "next/link";
import { Section } from "../components/layout/Section";

export default function AboutUsPage() {
  return (
    <Section title="Über Uns" description="Beispieltext">
      <div className="rounded-md p-44 bg-gray-100">
        <div className="text-blue-900">
          <Link href="https://www.green-ai-hub.de/pilotprojekte/pilotprojekt-intex-gmbh">
            KI-Pilotprojekt INTEX
          </Link>
        </div>
      </div>
    </Section>
  );
}
