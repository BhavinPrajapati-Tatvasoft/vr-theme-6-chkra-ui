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
    Text: {
      baseStyle: {
        color: "#4b4b4b",
      },
    },
    Button: {
      baseStyle: {
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
          borderRadius: "10px",
          height: "auto",
          padding: "15px 30px",
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "24px",
          _hover: { bg: "rgb(62, 129, 105)" },
          _focus: { bg: "rgb(62, 129, 105)", boxShadow: "none" },
        },
        outline: {
          bg: "#FFFFFF",
          color: "primary",
          borderColor: "primary",
          border: "2px solid",
          borderRadius: "10px",
          textTransform: "uppercase",
          height: "auto",
          padding: "13px 30px",
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "24px",
          _hover: { bg: "rgba(0,0,0,0.08)" },
          _focus: { bg: "rgba(0,0,0,0.08)", boxShadow: "none" },
        },
      },
    },
    Input: {
      variants: {
        flushed: {
          field: {
            borderColor: "#E9E9E9",
            borderRadius: "0",
            pr: "10",
            color: "#4B4B4B",
            _focus: {
              borderColor: ["primary"],
              boxShadow: "none",
            },
            _disabled: {
              borderBottom: "1px dashed #CECECE",
            },
            _invalid: {
              borderColor: "#FF3232",
              boxShadow: "none",
              _focus: {
                borderColor: "#cc0000",
              },
            },
          },
        },
      },
      defaultProps: {
        variant: "flushed",
      },
    },
    Select: {
      variants: {
        flushed: {
          field: {
            borderColor: "#E9E9E9",
            borderRadius: "0",
            px: "2",
            _focus: {
              borderColor: ["primary"],
              boxShadow: "none",
            },
          },
          icon: {
            color: "#9C9C9C",
          },
        },
      },
      defaultProps: {
        variant: "flushed",
      },
    },
    Textarea: {
      variants: {
        flushed: {
          borderColor: "#E9E9E9",
          borderRadius: "0",
          px: "2",
          mb: "30px",
          _focus: {
            borderColor: ["primary"],
            boxShadow: "none",
          },
        },
      },
      defaultProps: {
        variant: "flushed",
      },
    },
    Checkbox: {
      baseStyle: {
        label: {
          fontSize: "15px",
          lineHeight: "18px",
          color: "#9C9C9C",
        },
        control: {
          padding: "1",
          borderColor: "#9C9C9C",
          _focus: {
            boxShadow: "none",
            borderColor: "primary",
          },
        },
      },
      defaultProps: {
        colorScheme: "green",
      },
    },
    Radio: {
      baseStyle: {
        label: {
          fontSize: "15px",
          lineHeight: "18px",
          color: "#9C9C9C",
        },
        control: {
          borderColor: "#9C9C9C",
          borderWidth: "2px",
          backgroundColor: "#FFFFFF",
          "&:before": {
            width: "8px",
            height: "8px",
          },
          _checked: {
            backgroundColor: "#FFFFFF",
            borderColor: "primary",
            "&:before": {
              backgroundColor: "primary",
              width: "8px",
              height: "8px",
            },
            _hover: {
              boxShadow: "none",
              backgroundColor: "#FFFFFF",
              borderColor: "primary",
            },
          },
          _focus: {
            boxShadow: "none",
            borderColor: "primary",
          },
        },
      },
      defaultProps: {
        colorScheme: "green",
      },
    },
    Card: {
      variants: {
        outline: {
          container: {
            borderRadius: "10px",
            border: "1px solid #EAEAEA",
            bg: "#FFFFFF",
          },
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
    Alert: {
      variants: {
        subtle: {
          container: {
            border: "1px solid",
            padding: "6px 12px",
            borderRadius: "5px",
            "&.alert-error": {
              bg: "#FFFAFA",
              border: "1px solid #FF3535",
              color: "#FF3535",
            },
            "&.alert-info": {
              bg: "#F3FDFF",
              border: "1px solid #00B9E1",
              color: "#00B9E1",
            },
            "&.alert-warning": {
              bg: "#FFFCF5",
              border: "1px solid #FFA800",
              color: "#FFA800",
            },
            "&.alert-success": {
              bg: "#F5FFF8",
              border: "1px solid #00AF27",
              color: "#00AF27",
            },
          },
          description: { ml: "2" },
        },
      },
      defaultProps: {
        variant: "subtle",
      },
    },
    Tabs: {
      variants: {
        line: {
          root: {
            p: "0",
          },
          tab: {
            fontSize: "18px",
            fontWeight: "300",
            lineHeight: "20px",
            color: "#9C9C9C",
            p: "8px 8px 16px",
            mr: "14px",
            _selected: {
              color: "primary",
              fontWeight: "500",
              borderBottomWidth: "3px",
              _hover: {
                color: "primary",
              },
            },
            _focus: {
              boxShadow: "none",
            },
            _hover: {
              color: "#000",
            },
          },
          tablist: {
            borderColor: "#E9E9E9",
          },
          tabpanel: {
            color: "#4B4B4B",
            p: "24px 0 0",
            lineHeight: "24px",
          },
        },
      },
      defaultProps: {
        variant: "line",
      },
    },
    Table: {
      baseStyle: {},
      sizes: {},
      variants: {
        simple: {
          td: {
            padding: "4px 14px",
            fontSize: "15px",
            fontWeight: 400,
            color: "#4B4B4B",
            verticalAlign: "middle",
          },
          th: {
            padding: "12px 14px",
            fontSize: "15px",
            textTransform: "capitalize",
            color: "#9C9C9C",
            fontWeight: "400",
          },
        },
      },
      defaultProps: {
        variant: "simple",
      },
    },
    Menu: {
      baseStyle: {
        item: {
          color: "#4B4B4B",
          _focus: {
            backgroundColor: "#f5f5f5",
          },
          _hover: {
            backgroundColor: "#f5f5f5",
          },
        },
        list: {
          minWidth: "156px",
          boxShadow: "0px 4px 7px rgb(0 0 0 / 5%)",
        },
      },
      _invalid: {
        borderColor: "#FF3232",
        boxShadow: "none",
        _focus: {
          borderColor: "#cc0000",
        },
      },
    },
  },
});
export default theme;
