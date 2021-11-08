import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import { Routes, Route } from "react-router-dom";
import Main from './routes/Main';
import About from './routes/About';
import Performance from './routes/Performance';
import Research from './routes/Research';
import Contact from './routes/Contact';
import Investor from './routes/Investor';
import theme from './theme/theme';
import Grid from '@material-ui/core/Grid';
// import Grid from './../components/common/Grid';

import AppBar from './components/AppBar';
import AppBarOptions from './config/AppBar.config'
import useStyles from './styles/main.styles';

function App() {
  const classes = useStyles();
  return (
    <Box className="App">
      <Grid item xs={12}
        className={classes.spacingBottom40, classes.gridPaddingLeft40}>
        <AppBar
            logo={logo}
            options={AppBarOptions}
        />
     </Grid>
      <ThemeProvider theme={theme}>
        <Routes>
        <Route path="/" exact element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/investor" element={<Investor />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
