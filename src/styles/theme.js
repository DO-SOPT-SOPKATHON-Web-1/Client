import { css } from "styled-components";

const colors = {
  primary: "#FF84AD",
  white: "#FFFDFD",
  black: "#181818",

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
    font-size: 3.2rem;
    font-weight: 900;

    line-height: 110%;
  `,
  headline2: css`
    font-family: Pretendard Variable;
    font-size: 2.8rem;
    font-weight: 700;

    line-height: 110%;
  `,
  title1: css`
    font-family: Pretendard Variable;
    font-size: 2.4rem;
    font-weight: 700;

    line-height: 110%;
  `,
  title2: css`
    font-family: Pretendard Variable;
    font-size: 2rem;
    font-weight: 600;

    line-height: 110%;
  `,
  title3: css`
    font-family: Pretendard Variable;
    font-size: 1.8rem;
    font-weight: 600;

    line-height: 110%;
  `,

  body1: css`
    font-family: Pretendard Variable;
    font-size: 1.6rem;
    font-weight: 600;

    line-height: 144%;
  `,
  body2: css`
    font-family: Pretendard Variable;
    font-size: 1.6rem;
    font-weight: 400;

    line-height: 144%;
  `,
  body3: css`
    font-family: Pretendard Variable;
    font-size: 1.4rem;
    font-weight: 700;

    line-height: 144%;
  `,
  body4: css`
    font-family: Pretendard Variable;
    font-size: 1.4rem;
    font-weight: 500;

    line-height: 144%;
  `,
  body5: css`
    font-family: Pretendard Variable;
    font-size: 1.4rem;
    font-weight: 400;

    line-height: 144%;
  `,
  caption1: css`
    font-family: Pretendard Variable;
    font-size: 1.2rem;
    font-weight: 700;

    line-height: 144%;
  `,
  caption2: css`
    font-family: Pretendard Variable;
    font-size: 1.2rem;
    font-weight: 400;

    line-height: 144%;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
