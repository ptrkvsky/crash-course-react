import styled from "@emotion/styled";
import mediaQueries from "../mediaQueries";

const VideosContainer = styled("div")`
  scroll-snap-type: x proximity;
  overflow-x: auto;
  overflow-y: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33%;
  box-shadow: -11px -11px 22px #1b1f28, 11px 11px 22px #252b38;
  ${mediaQueries.tabletteHorizontale} {
    grid-auto-columns: 50%;
  }
  ${mediaQueries.mobile} {
    grid-auto-columns: 100%;
  }
`;

const Titre = styled("h2")`
  font-size: 45px;
  margin-bottom: 30px;
`;

export { VideosContainer, Titre };
