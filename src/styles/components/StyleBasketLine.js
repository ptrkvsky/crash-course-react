import styled from "@emotion/styled";
import theme from "../theme";

const Line = styled("article")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  align-items: center;
  padding: 5%;
  &:before {
    content: "";
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 5%;
  }
`;

const ChangeQty = styled("button")`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${theme.colors.primary};
  background-color: #000;
  border: none;

  &.disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

export { Line, ChangeQty };
