import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {},
  fonts: {
    body: `Ubuntu,sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 400,
        display: "flex",
        outline: "none",
        height: "auto",
        minWidth: "0",
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default extendTheme(theme);
