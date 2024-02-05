import Image from "next/image";
import logo from "../../data/logo.png";
type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? "44" : "32";
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <span
      className={`inline-flex items-center text-emerald-500 gap-1 ${fontStyle}`}
    >
      <Image src={logo} alt="GreenAI" />
      {"GreenAI"}
    </span>
  );
};

export { Logo };
