import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import Image from "next/image";
import logoBMUV from "../../data/asset_logo_BMUV.svg";
import logoZUG from "../../data/asset_logo_ZUG.svg";

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <div className="text-center">
        <span className={"inline-flex items-center gap-6"}>
          <Image src={logoBMUV} alt="LogoBMUV" />
          <Image src={logoZUG} alt="LogoZUG" />
        </span>
      </div>
    </Section>
  </Background>
);

export { Footer };
