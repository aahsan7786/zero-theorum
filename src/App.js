import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import { Routes, Route } from "react-router-dom";
import Main from './routes/Main';
import theme from './theme/theme';

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<p />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
