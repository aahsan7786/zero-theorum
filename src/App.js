import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import { Routes, Route } from "react-router-dom";
import Main from './routes/Main';
import theme from './theme/theme';
import underDev from './assets/mainPage/incentives-banner-2.png'
const UnderDevelopment = () => {
  return <div>
    <div className="underdevelopment">
      <img style={{display:'inline-block'}} src={underDev} alt="Under process" />
    </div>
    <div className="underdevelopment">
      <h1>Under Development</h1>
    </div>
  </div>
}
function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Routes>
        <Route path="/" exact element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/underdev" element={<UnderDevelopment />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
