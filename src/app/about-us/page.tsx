import Link from "next/link";
import { Section } from "../components/layout/Section";

export default function AboutUsPage() {
  return (
    <div style={{ height: "42rem" }}>
      <Section title="Über Uns">
        <h1 className="text-2xl font-bold text-gray-900" style={{ marginBottom: "1rem" }}>Institut für Wirtschaftsinformatik</h1>
        <p className="text-gray-900" style={{ marginBottom: "1rem" }}>
          Am Institut für Wirtschaftsinformatik (IWi) im DFKI sind mehr als 60 Mitarbeiter unter der wissenschaftlichen Leitung von Univ.-Prof. Dr. Peter Loos im Bereich der anwendungsnahen Forschung beschäftigt. Forschung und Lehre umfassen das Informations- und Prozessmanagement in Industrie, Dienstleistung und Verwaltung. Ein besonderer Anspruch liegt dabei auf dem Technologietransfer von der Wissenschaft in die Praxis. Die interdisziplinäre Struktur der Mitarbeiter und Forschungsprojekte fördert zusätzlich den Austausch von Spezialwissen aus unterschiedlichen Fachbereichen.
        </p>
        <h1 className="text-2xl font-bold text-gray-900" style={{ marginBottom: "1rem" }}>Forschung</h1>
        <p className="text-gray-900" style={{ marginBottom: "1rem" }}>
          Das IWi im DFKI beschäftigt sich intensiv mit Anwendungen der Künstlichen Intelligenz im betrieblichen Umfeld und speziell im Geschäftsprozessmanagement. Im Kontext der aktuellen Entwicklungen in der KI-Grundlagenforschung kommt diesem Thema heutzutage auch in der anwendungsorientierten Forschung eine zentrale Bedeutung zu.
        </p>
        <h1 className="text-2xl font-bold text-gray-900" style={{ marginBottom: "1rem" }}>Dieses Projekt</h1>
        <p className="text-gray-900" style={{ marginBottom: "1rem" }}>
          Dieses Projekt wird von ZUG und dem Bundesministerium für Umwelt, Natur, nukleare Sicherheit und Verbraucherschutz im zuge des GreenAI Hubs gefördert.
        </p>
      </Section>
    </div>
  );
}
