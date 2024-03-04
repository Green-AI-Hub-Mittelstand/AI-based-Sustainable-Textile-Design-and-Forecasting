import Image from "next/image";
import logoINTEX from "../../data/logo_INTEX.png";

const Logo = () => {
  return (
    <span
      className={
        "inline-flex items-center text-emerald-500 gap-1 font-semibold text-3xl"
      }
    >
      <Image src={logoINTEX} alt="LogoINTEX" />
      {"GreenAI"}
    </span>
  );
};

export { Logo };
