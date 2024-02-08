import type { ReactNode } from "react";

type ICenteredFooterProps = {
  logo: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">{props.logo}</div>
);

export { CenteredFooter };
