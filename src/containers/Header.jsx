import React from "react";
import styled from "@emotion/styled";

const BlocHeader = styled("header")`
  position: sticky;
  top: 0;
  z-index: 10;
  display: grid;
  height: 5vh;
  align-items: center;
  background-color: yellowgreen;
`;

const Header = () => {
  return (
    <BlocHeader>
      <div className="max-container">lorem ipsum dolor sit amet</div>
    </BlocHeader>
  );
};

export default Header;
