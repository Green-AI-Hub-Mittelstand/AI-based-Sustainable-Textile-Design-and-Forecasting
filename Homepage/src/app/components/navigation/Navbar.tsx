import Link from "next/link";
import type { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>
    <nav>
      <ul className="flex space-x-5 text-xl">
        <li>
          <Link href="/">
            <span className="font-medium text-gray-800">{"Startseite"}</span>
          </Link>
        </li>
        <li>
          <Link href="/material-guide">
            <span className="font-medium text-gray-800">{"Material Guide"}</span>
          </Link>
        </li>
        <li>
          <Link href="/user-guide">
            <span className="font-medium text-gray-800">{"User Guide"}</span>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <span className="font-medium text-gray-800">{"Über uns"}</span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export { Navbar };
