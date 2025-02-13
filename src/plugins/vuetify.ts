/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#f4f3ef;",
    surface: "#FFFFFF",
    primary: "#2a3e8e",
    "primary-darken-1": "#3700B3",
    secondary: "#ffffff",
    "secondary-darken-1": "#666666",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    test: "#fda95a",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});
