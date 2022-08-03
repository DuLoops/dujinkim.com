import { baseStyle, color, extendTheme, theme as baseTheme, type ThemeConfig } from "@chakra-ui/react"

import {
  mode,
  StyleFunctionProps,
  createBreakpoints,
} from "@chakra-ui/theme-tools";
import { readBuilderProgram } from "typescript";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
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
    neutralGreen: {
      100: '#a1bd9a'
    },
    light: {
      100: '#171717'
    },
    dark: {
      100: '#1C1D1F'
    },
    
    primaryFontColor: {
      lightMode: baseTheme.colors.gray['700'] ,
      darkMode: baseTheme.colors.gray['700'],
    },
    secondaryFontColor: {
      lightMode: baseTheme.colors.white["600"],
      darkMode: baseTheme.colors.white["400"],
    },

  },
};

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("", colors.colors.dark['100'])(props),
      },
    }),
  },
};

const components = {
  components: {
    Text: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.colors.primaryFontColor.lightMode,
          colors.colors.primaryFontColor.darkMode
        )(props),
      })
    },
    Heading: {
      baseStyle: {
        color: 'black'
      }
    },
    variants: {
      flexCenter: {
        display: "flex",
        align: "center",
        textAlign: "center",
      },
      secondary: (props: any) => ({
        color: mode(
          colors.colors.secondaryFontColor.lightMode,
          colors.colors.secondaryFontColor.darkMode
        )(props),
      }),
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

