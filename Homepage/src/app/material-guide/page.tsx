import { Section } from "../components/layout/Section";
import CollapseText from "../components/collapse/CollapseText";

const MoreInfosPage = () => {
  //load data
  const data = require("../data/more-infos.json");
  //const guidetext = require("../data/user-guide.json");
  return (
    <div style ={{height:"65rem"}}>
      <Section title="Materialguide">
        {data.map((item: { header: string; content: string; }, index: number) => (
          <CollapseText key={index} header={item.header} content={item.content} />
        ))}
      </Section>
    </div>
  );
}

export default MoreInfosPage;