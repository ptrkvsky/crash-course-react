import styled from "@emotion/styled";
import theme from "../theme";
import mediaQueries from "../mediaQueries";

const Section = styled("section")`
  position: fixed;
  z-index: 20;
  top: 0;
  right: -450px;
  width: 450px;
  max-width: 100%;
  height: 100%;
  background-color: ${theme.colors.mainBg};
  box-sizing: border-box;
  -webkit-transition: right 0.2s;
  transition: right 0.2s;

  &.open {
    right: 0;
  }
`;

const ButtonClose = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: ${theme.colors.primary};

  .open & {
    left: -50px;
    ${mediaQueries.tabletteHorizontale} {
      left: 0;
    }
  }
`;

const BlocBasket = styled("div")`
  padding: 10px 0;
  align-items: center;
  margin-bottom: 40px;
`;

const Header = styled("div")`
  text-align: center;
  padding: 45px 0;
`;

const Bag = styled("span")`
  width: 40px;
  height: 40px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwwQEgYn7+gWAAABQklEQVRIx9WTsUoDQRRF72xMYSFokcRCjBFESGWRwtZe8AtEFFNrI1bB0tLGQuzs/AJB8AO2kZRCxBiRQNKIoIYoyLFwCZuss9nNgpBXzc7be3j3zow09mU48321zVF8gNtbZ5Q1UwmGYQPIxFU5vnVdUuHfARO+OD5oa9GzM6NcbICkem+CLZ0kA1zKHQ2w6tlpqRUN4AwA5knFiTAISGsuHqDfwoOkgp4kUkoP1WI+Azt02ZYk9hle3cAEBh69c7iKEOJ30IJU/71KpqbaKCH6b0LEGgTcaYXpeIj+GJf54pyI70CSTACxq1M5ehmqvDCHfwIkFrQW4S1WzXUCq+E5lNhkMqSfo0ze3t7hlWeqIfJ3GnQo2n644ZhZYMnSL9OQcKnYAHs0ueUeY+nn6eDyRskGcFjngGxIBkUqVvk41g+oBJ136GBf8AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xMlQxNjoxODowNiswMTowMEVm3zEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTJUMTY6MTg6MDYrMDE6MDA0O2eNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==");
`;

const Bag__quantity = styled("span")`
  position: absolute;
  bottom: -5px;
  right: 0;

  display: inline-flex;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;

  font-size: 0.7em;
  background-color: ${theme.colors.primary};
`;

const BasketEmpty = styled("p")`
  display: block;
  text-align: center;
  line-height: 1.5;
`;

const Footer = styled("div")`
  position: absolute;
  padding: 10px;
  bottom: 0;
  width: 100%;
  height: 20vh;
  z-index: 10;
  background-color: ${theme.colors.mainBg};
  &:before {
    content: "";
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(0deg, rgba(101, 119, 156, 0.1), #d6303000);
  }
`;

const FooterTotal = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonPayment = styled("button")`
  display: inline-block;
  width: 100%;
  font-size: 30px;
  padding: 11px 21px;
  margin: 30px 0 0 0;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(145deg, #222833, #1d212b);
  box-shadow: 5px 5px 10px #15181e, -5px -5px 10px #272d3b;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${theme.fonts.logo};
  font-weight: bold;
  color: ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: #202530;
    box-shadow: inset 5px 5px 21px #191d25, inset -5px -5px 21px #272d3b;
  }
`;

export {
  BlocBasket,
  Header,
  Section,
  ButtonClose,
  Bag,
  Bag__quantity,
  BasketEmpty,
  Footer,
  FooterTotal,
  ButtonPayment
};
