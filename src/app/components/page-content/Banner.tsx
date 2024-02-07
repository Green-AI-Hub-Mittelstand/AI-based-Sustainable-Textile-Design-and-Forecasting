import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { Navbar } from "../navigation/Navbar";
import { Logo } from "./Logo";

const Banner = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Navbar logo={<Logo xl />}></Navbar>
    </Section>
  </Background>
);

export { Banner };
