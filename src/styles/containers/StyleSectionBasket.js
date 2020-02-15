import styled from "@emotion/styled";
import theme from "../theme";

const Section = styled("section")`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  width: 450px;
  height: 100%;
  background-color: ${theme.colors.mainBg};
  box-sizing: border-box;
  -webkit-transition: right 0.2s;
  transition: right 0.2s;
  &.open {
    right: -450px;
  }
`;

const ButtonClose = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -50px;
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: red;
  .open & {
    left: 0;
  }
`;

const BlocBasket = styled("section")`
  padding: 10px 0;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid purple;
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

export {
  BlocBasket,
  Header,
  Section,
  ButtonClose,
  Bag,
  Bag__quantity,
  BasketEmpty
};
