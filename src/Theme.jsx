import { createTheme } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: blue[700],
    },
    info:{
        main: '#fff'
    }
  },
});
export default theme