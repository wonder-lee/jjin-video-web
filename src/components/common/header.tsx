import React from "react";
import JJIN_ICON from "@/static/jjin-logo-02.svg";
// import JJIN_ICON from "@/static/jjin-logo.svg";

const Header = () => {
  return (
    <header className="max-sm:w-[100vw] w-[500px] fixed top-0 backdrop-blur-lg">
      {/* <JJIN_ICON className="fill-rose-500" /> */}
      <JJIN_ICON />
    </header>
  );
};

export default Header;
