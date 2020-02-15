import styled from "@emotion/styled";
import mediaQueries from "../mediaQueries";

const PrimeVideo = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 60px 0;
  grid-gap: 60px;

  ${mediaQueries.tabletteHorizontale} {
    grid-template-columns: 1fr;
  }
`;

export { PrimeVideo };
