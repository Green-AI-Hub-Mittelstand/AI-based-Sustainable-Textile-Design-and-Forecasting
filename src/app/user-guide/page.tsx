import { Section } from "../components/layout/Section";

const MoreInfosPage = () => {
  //load data
  return (
    <div style={{ height: "42rem" }}>
      <Section title="User Guide">
        <div style={{ lineHeight: 1.5 }} className="text-gray-900">
          <p style={{ marginBottom: "1rem" }}>
            Bei diesem Tool handelt es sich um ein Empfehlungssystem für eine Stoffzusammensetzung und Stoffgewicht auf Basis verschiedener Stoffeigenschaften. Dabei werden aktuell drei Stoffeigenschaften fokussiert:
          </p>
          <ol style={{ marginBottom: "1rem" }}>
            <li>1. Langlebigkeit: Wie langlebig (strapazierbar) soll das Textil sein?</li>
            <li>2. Regenerativ: Soll das Textil auf Basis von regenerierbaren Ressourcen hergestellt werden? </li>
            <li>3. Recycelbarkeit: Wie viel des hergestellten Textils sollen nochmal recycelt werden können?</li>
          </ol>
          <p style={{ marginBottom: "1rem" }}>
            Hierbei kann die gewünschte Kombination mit Hilfe der Schieberegler eingestellt werden. Die Kästen unterhalb der Regler zeigen zum einen die Vorschläge zu den Kombinationen an, zum anderen jeweils noch drei zusätzliche Fakten, bzw. Informationen zu der gewählten Stoffkombination aufgelistet. Genauere Informationen zu den verschiedenen Materialien und eine Übersicht über alle genutzten Materialien gibt es in unserem Material Guide.
          </p>
          <p style={{}}>
            Anzumerken ist hierbei, dass es sich bei den Abstufungen der Regler um vergleichende Werte handelt. Diese Einstufungen müssen also relativ zueinander gesehen werden. Betrachtet man zum Beispiel eines T-Shirt, welches eine höchstmögliche Langlebigkeit (Regler Langlebigkeit = 4) und hohe Recyclingmöglichkeiten (Regler Recyclefähigkeit = 3) haben soll, gibt es zwei Möglichkeiten. Soll das Material regenerativ sein wird ein T-Shirt aus 100% Viskosefaser mit einem Stoffgewicht von mehr als 205 g/qm vorgeschlagen. Muss es sich nicht um einen regenerativen Stoff handeln, so wird ein T-Shirt aus 100% Polyester mit einem Stoffgewicht von mehr als 205 g/qm vorgeschlagen. Beide Stoffvorschläge weisen in diesem Fall höchstmögliche Langlebigkeit im Vergleich zu anderen möglichen Stoffkombinationen, welche die gleichen Recycling- und Regenerativitätseigenschaften haben, auf. Jedoch kann der eine Stoffvorschlag eine schlechtere Langlebigkeit haben als der andere. So ist ein T-shirt aus 100% Polyester langlebiger als ein T-shirt aus 100% Viskosefaser.
          </p>
        </div>
      </Section >
    </div>
  );
}

export default MoreInfosPage;