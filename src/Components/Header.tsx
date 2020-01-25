import React from "react";

type HeaderProps = {
  text: string;
};

const Header = (props: HeaderProps) => {
  return (
    <div>
      <h1 className="header">{props.text}</h1>
    </div>
  );
};
export default Header;
