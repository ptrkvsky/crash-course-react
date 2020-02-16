import styled from "@emotion/styled";
import theme from "../theme";
import mediaQueries from "../mediaQueries";

const VideoContainer = styled("article")``;

const TitleVideo = styled("h1")`
  padding-bottom: 15px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-size: 55px;
  font-weight: 600;
  color: ${theme.colors.primaryColor};
  border-bottom: 1px solid ${theme.colors.secondary};
  ${mediaQueries.mobile} {
    font-size: 35px;
    padding: 0 5% 15px 5%;
  }
`;

const DescVideo = styled("p")`
  font-size: 22px;
  line-height: 1.4;
  ${mediaQueries.mobile} {
    padding: 0 5%;
  }
`;

const BlocPrice = styled("div")`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid ${theme.colors.secondary};
`;

const Price = styled("p")`
  font-size: 30px;
  font-family: ${theme.fonts.logo};
  color: ${theme.colors.primary};
  margin-right: 20px;
`;

const AddToBasket = styled("p")`
  display: inline-block;
  padding: 11px 21px;
  font-size: 18px;
  border-radius: 10px;
  background: linear-gradient(145deg, #222833, #1d212b);
  box-shadow: 5px 5px 10px #15181e, -5px -5px 10px #272d3b;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${theme.fonts.logo};
  font-weight: bold;
  color: ${theme.colors.primary};
  cursor: pointer;

  ${mediaQueries.mobile} {
    margin-left: 5%;
  }

  &:hover {
    background: #202530;
    box-shadow: inset 5px 5px 21px #191d25, inset -5px -5px 21px #272d3b;
  }
`;

export { VideoContainer, TitleVideo, DescVideo, AddToBasket, Price, BlocPrice };
