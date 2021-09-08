import rem from "./utils/rem";

export const light = {
  colors: {
    background: "var(--zircon)",
    cardBg: "var(--white)",
    text: "var(--kashmir-blue)",
    h1: "var(--gunmetal)",
    h2: "var(--gunmetal)",
    h3: "var(--deep-sky-blue)",
    h4: "var(--kashmir-blue)",
  },
  boxShadow: `0 ${rem(16)} ${rem(30)} ${rem(-10)} hsla(227, 46%, 51%, 0.1986)`,
};

export const dark = {
  colors: {
    background: "var(--mirage)",
    cardBg: "var(--blue-zodiac)",
    text: "var(--white)",
    h1: "var(--white)",
    h2: "var(--white)",
    h3: "var(--deep-sky-blue)",
    h4: "var(--white)",
  },
  boxShadow: "none",
};
