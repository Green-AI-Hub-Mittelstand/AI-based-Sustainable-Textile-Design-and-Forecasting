import { MainContent } from "./MainContent";
import { Section } from "../layout/Section";

const Main = () => (
  <Section
    title="Example Title"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <MainContent />
  </Section>
);

export { Main };
