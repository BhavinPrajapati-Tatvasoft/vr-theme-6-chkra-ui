import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Ubuntu, sans-serif",
  },
  colors: {
    primary: "#59B997",
    body: "#4b4b4b",
    green: {
      300: "#262626",
      500: "#59B997",
    },
  },
  components: {
    Button: {
      baseStyle: {
        height: "auto",
        fontWeight: 400,
        display: "flex",
        outline: "none",
        minWidth: "0",
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        primary: {
          bg: "primary",
          color: "#FFFFFF",
          textTransform: "uppercase",
          height: "54px",
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "24px",
          _hover: { bg: "teal.400" },
          _focus: { bg: "teal.400" },
        },
      },
      defaultProps: {},
    },
    Text: {
      baseStyle: {
        color: "#4b4b4b",
      },
    },
    Input: {
      variants: {
        flushed: {
          field: {
            borderColor: "#E9E9E9",
            borderRadius: "0",
            px: "2",
            mb: "5",
            _focus: {
              borderColor: ["primary"],
              boxShadow: "none",
            },
          },
        },
      },
      defaultProps: {
        variant: "flushed",
      },
    },
    Divider: {
      baseStyle: {
        opacity: "1",
      },
    },
    Checkbox: {
      baseStyle: {
        label: {
          fontSize: "15px",
          lineHeight: "18px",
        },
        control: {
          padding: "1",
          _focus: {
            boxShadow: "none",
            borderColor: "primary",
          },
        },
      },
      defaultProps: {
        control: {
          padding: "1",
          _focus: {
            boxShadow: "none",
            borderColor: "green",
          },
        },
        colorScheme: "green",
      },
    },
  },
});
export default theme;
