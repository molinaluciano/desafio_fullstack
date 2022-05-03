import { CssBaseline, makeStyles, MuiThemeProvider } from '@material-ui/core';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Landing/Footer';
import Router from "./components/Router";
import darkTheme from "./themes/dark";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  contentPadding: {
    padding: '80px 20px 20px 20px',
  }
}));

axios.defaults.baseURL= "http://localhost:8080";

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <>
      <div >
        <CssBaseline />
        <main>

        <Router />
        </main>
      </div>
        <Footer/>
      </>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
