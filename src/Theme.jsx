import { createTheme } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ce854e',
    },
    secondary: {
      main: '#54b4b3',
    },
    info:{
        main: '#fff'
    },
    text:{
      main:'#fff'
    }
  },
});
export default theme