import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-cairo: Cairo;
--font-open-sans: 'Open Sans';

/* font sizes */
--font-size-lg: 18px;
--font-size-base: 16px;
--font-size-sm: 14px;
--font-size-5xl: 24px;
--font-size-11xl: 30px;
--font-size-xl: 20px;
--font-size-17xl: 36px;

/* Colors */
--primary-contrast: #fff;
--color-whitesmoke-100: #f8f8f8;
--primer: #33f81e;
--color-dimgray: #636363;
--black: #202020;
--color-gray-100: #1e1e1e;
--color-black: #000;
--color-goldenrod: #ffb951;
--color-tomato: #ff5151;

/* Gaps */
--gap-mid: 17px;
--gap-xl: 20px;
--gap-3xs: 10px;
--gap-21xl: 40px;
--gap-11xl: 30px;
--gap-sm: 14px;
--gap-xs: 12px;
--gap-99xl: 118px;
--gap-0: 0px;

/* Paddings */
--padding-8xs: 5px;
--padding-xs: 12px;
--padding-21xl: 40px;
--padding-5xs: 8px;
--padding-xl: 20px;
--padding-7xs: 6px;
--padding-12xl: 31px;
--padding-5xl: 24px;

/* Border radiuses */
--br-7xs: 6px;
--br-46xl: 65px;
--br-8xs: 5px;
--br-3xs: 10px;
--br-xl: 20px;
--br-sm: 14px;

}
`;
}
