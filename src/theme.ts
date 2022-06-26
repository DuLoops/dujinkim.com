import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import {
  mode,
  StyleFunctionProps,
  createBreakpoints,
} from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  colors: {
    brandGreen: {
      50: "#031112", //black green
      100: "#051F20", //dark green
      200: "#163832", //medium green
      300: "#235347", //forest green
      400: "#8EB69B", //sea green
      500: "#DAF1DE", //light green
    },
    brandBlue: {
      100: "#83A7AF", //dark green
    },
    brandYellow: {
      100: "#EDB25A", //yellow
      200: "#E19820", //mustard
    },
    brandOrange: {
      100: "#F7893B", //light orange
      200: "#DB6320", //orange
      300: "#ED4F05", //dark orange
    },
    brandRed: {
      100: "#D93128",
    },
  },
};

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("", "brandGreen.50")(props),
      },
    }),
  },
};

const components = {
  components: {
    variants: {
      flexCenter: {
        display: "flex",
        alight: "center",
        textAlign: "center",
      },
    },
  },
};

const breakpoints = createBreakpoints({
  sm: "544px",
  md: "960px",
  lg: "1229px",
  xl: "2304px",
  "2xl": "4096px",
});

const theme = extendTheme(config, colors, styles, components);

export default theme;
