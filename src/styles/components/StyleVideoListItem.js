import styled from "@emotion/styled";
import theme from "../theme";

const VideoItem = styled("article")`
  position: relative;
  scroll-snap-align: start;

  .bloc-infos {
    display: none;
    position: absolute;
    width: 100%;
    padding: 0 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .bloc-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
  }
  &:hover .bloc-infos {
    display: inherit;
  }
  &:hover .bloc-hover {
    background: rgb(32, 37, 47, 0.8);
  }
`;

const MovieTitle = styled("h3")`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${theme.fonts.logo};
  color: ${theme.colors.primary};
  letter-spacing: 1px;
`;


export {VideoItem, MovieTitle}