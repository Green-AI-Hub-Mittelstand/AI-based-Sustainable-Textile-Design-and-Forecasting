import Link from "next/link";
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
          <Link href="https://www.bmuv.de/">
            <Image src={logoBMUV} alt="LogoBMUV" />
          </Link>
          <Link href="https://www.z-u-g.org/">
            <Image src={logoZUG} alt="LogoZUG" />
          </Link>
        </span>
      </div>
    </Section>
  </Background>
);

export { Footer };
