import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  variant: string;
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage, variant }: Props) {
  const desktopVariant = "flex items-center px-10 py-2";
  const menuVariant = "flex items-center px-6 py-2";

  return (
    <AnchorLink
      className={`${
        variant === "desktopMenu" ? desktopVariant : menuVariant
      } bg-secondary-500`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
