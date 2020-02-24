import styled from "@emotion/styled";
import theme from "../theme";
import mediaQueries from "../mediaQueries";

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

const Bag = styled("span")`
  position: absolute;
  top: 17px;
  right: 4px;
  z-index: 20;

  width: 40px;
  height: 40px;
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
  background-color: ${theme.colors.tertiary};
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
  &:before {
    content: "";
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
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
  border-radius: 10px;
  border: none;

  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${theme.fonts.logo};
  font-weight: bold;
  color: #fb2d7a;
  background-color: #09ff00;
  cursor: pointer;
`;

export {
  BlocBasket,
  ButtonClose,
  Bag,
  Bag__quantity,
  BasketEmpty,
  Footer,
  FooterTotal,
  ButtonPayment
};
