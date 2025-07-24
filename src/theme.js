import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fdd835', // bright yellow
    },
    secondary: {
      main: '#000000', // black
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fdd835', // yellow on focus
          },
        },
        notchedOutline: {
          borderColor: '#000', // black border by default
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#fdd835', // label color on focus
          },
        },
      },
    },
  },
});

export default theme;
