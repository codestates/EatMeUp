
const colors = {
  yellow: "#FEBD2F",
  red: "#FF0000",
  gray: "#A9A7A3",
  lightgrey: "#e5e5e5",
  background: "#F5F3F0",
  black: "#303030",
  darkgrey: "#505050",
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  colors,
  device,
};
export default theme;
