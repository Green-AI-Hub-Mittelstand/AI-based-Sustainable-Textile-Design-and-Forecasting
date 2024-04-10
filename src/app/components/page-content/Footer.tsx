import Link from "next/link";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import Image from "next/image";
import logoBMUV from "../../data/asset_logo_BMUV.svg";
import logoZUG from "../../data/asset_logo_ZUG.svg";
import logoINTEX from "../../data/asset_logo_INTEX.svg";
import logoDFKI from "../../data/assets_logo_DFKI_IWi_RGB.png";


const logos = [
  { href: "https://www.bmuv.de/", src: logoBMUV, alt: "LogoBMUV", width: 193, height: 57 },
  { href: "https://www.green-ai-hub.de/pilotprojekte/pilotprojekt-intex-gmbh", src: logoZUG, alt: "LogoZUG", width: 193, height: 57 },
  { href: "https://www.intex.de/", src: logoINTEX, alt: "LogoINTEX", width: 130, height: 57 },
  { href: "https://www.dfki.de/web/forschung/forschungsbereiche/institut-fuer-wirtschaftsinformatik", src: logoDFKI, alt: "LogoDFKI", width: 140, height: 57 },
];

const Footer = () => (
    <Background color="bg-gray-100">
      <Section yPadding="py-10">
        <div className="text-center">
          <span className={"inline-flex items-center gap-6"}>
            {logos.map((logo) => (
              <Link key={logo.alt} href={logo.href}>
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              </Link>
            ))}
          </span >
        </div >
      </Section>
    </Background>
);


export { Footer };
