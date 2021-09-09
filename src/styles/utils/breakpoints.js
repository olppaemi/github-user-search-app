import { css } from "styled-components";

const breakpointsUp = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const breakpointsDown = {
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
};

export const breakpointUp = Object.keys(breakpointsUp).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${breakpointsUp[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const breakpointDown = Object.keys(breakpointsDown).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media screen and (max-width: ${breakpointsDown[label]}) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);
