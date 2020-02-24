import React from "react";
import { Global, css } from "@emotion/core";
import theme from "../styles/theme";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* RESET CSS ERIC MEYER */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        /* ------------- */
        /* STYLES GLOBAL */
        /* ------------- */
        body {
          background-color: ${theme.colors.mainBg};
          color: ${theme.colors.main};
          font-size: 18px;
          font-family: ${theme.fonts.primary};
        }
        img {
          max-width: 100%;
        }

        /* LAYOUT */
        .max-container {
          width: 1440px;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
        }

        /* SEARCH BAR */
        .searchbar {
          color: ${theme.colors.main};

          .rbt-input-main {
            border-radius: 10px;
            background: linear-gradient(145deg, #222833, #1d212b);
            box-shadow: 20px 20px 60px #1b1f29, -20px -20px 60px #252b37;
            border: 1px solid #1f222b;
            transition: all 0.3s ease-in-out;
            &:hover {
              border-bottom: 1px solid ${theme.colors.primary};
            }
          }
        }
        .btn {
          border: none;
          color: ${theme.colors.primary};
          text-transform: uppercase;
          font-family: ${theme.fonts.logo};
          font-weight: 600;
          font-size: 24px;
        }
        .max6O {
          max-width: 60px;
        }

        /* SIDE BAR BASKET */
        .basket-container {
          position: fixed;
          padding-top: 80px;
          height: 100vh;
          width: 450px;
          max-width: 100%;
          z-index: 20;
          top: 0;
          right: 0px;

          max-width: 450px;
          background-color: ${theme.colors.mainBg};
          box-sizing: border-box;

          background: linear-gradient(
            244deg,
            ${theme.colors.primary},
            ${theme.colors.tertiary}
          );
        }
      `}
    />
  );
}
