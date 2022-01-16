import React from "react";
import Logo from "./Logo";
import ContactButton from "./ContactButton";
import TextHead from "./TextHead";

function Header({ text = "CONTACT ME", path = "/contact-me" }) {
  return (
    <>
      <header>
        <Logo />
        <ContactButton path={path} text={text} />
      </header>
      <TextHead />
    </>
  );
}

export default Header;
