import { css } from "styled-components";

const colors = {
  primary: "#FF84AD",
  white: "#FFFDFD",
  black: "#181818",

  subRed: "#EDD8E0",
  subPurple: "#EADCF7",
  subBlue: "git #E4EEFF",

  gray01: "#FAFAFA",
  gray02: "#F5F5F5",
  gray03: "#EEEEEE",
  gray04: "#E0E0E0",
  gray05: "#BDBDBD",
  gray06: "#9E9E9E",
  gray07: "#7A7A7A",
  gray08: "#616161",
  gray09: "#393535",
};

const fonts = {
  headline1: css`
    font-family: Pretendard Variable;
    font-size: 2.8rem;
    font-weight: 700;

    line-height: 100%;
  `,
  headline2: css`
    font-family: Pretendard Variable;
    font-size: 2rem;
    font-weight: 600;

    line-height: 144%;
  `,
  body1: css`
    font-family: Pretendard Variable;
    font-size: 1.4rem;
    font-weight: 700;

    line-height: 120%;
  `,
  body2: css`
    font-family: Pretendard Variable;
    font-size: 1.6rem;
    font-weight: 500;

    line-height: 144%;
  `,
  button3: css`
    font-family: Pretendard Variable;
    font-size: 1.8rem;
    font-weight: 700;

    line-height: 100%;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
