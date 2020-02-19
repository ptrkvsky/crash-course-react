import styled from "@emotion/styled";
import theme from "../theme";
import mediaQueries from "../mediaQueries";

const BlocHeader = styled("header")`
  position: sticky;
  top: 0;
  z-index: 10;

  padding: 10px 0;
  margin-bottom: 40px;
  background: linear-gradient(145deg, #222833, #1d212b);
  box-shadow: 13px 13px 21px #191d25, -13px -13px 21px #272d3b;

  ${mediaQueries.mobile} {
    padding: 10px 5%;
  }
`;

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

const Logo = styled("p")`
  font-family: ${theme.fonts.logo};
  font-size: 35px;
  color: ${theme.colors.primary};
`;

const Nav = styled("nav")`
  display: flex;
  align-items: center;
`;

const LinkNav = styled("a")`
  display: inline-block;
  padding-left: 20px;
  color: ${theme.colors.main};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  ${mediaQueries.mobile} {
    font-size: 12px;
  }
  &:hover {
    text-decoration: none;
    color: ${theme.colors.primary};
  }
`;

export { BlocHeader, Container, Logo, Nav, LinkNav };
