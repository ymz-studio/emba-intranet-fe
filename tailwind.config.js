const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
        success: colors.green[500],
        warning: colors.orange[500],
        danger: colors.red[500],
        background: "#F4F5F5"
      }
    }
  },
  variants: {}
};
