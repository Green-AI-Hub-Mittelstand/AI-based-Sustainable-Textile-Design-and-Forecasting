import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { Navbar } from "../navigation/Navbar";
import { Logo } from "./Logo";

const Banner = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Navbar logo={<Logo xl />}></Navbar>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <header className="text-center">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
          <>
            {"React Homepage for\n"}
            <span className="text-emerald-500">GreenAI</span>
          </>
        </h1>
        <div className="mb-16 mt-4 text-2xl">{"Description"}</div>
      </header>
    </Section>
  </Background>
);

export { Banner };
