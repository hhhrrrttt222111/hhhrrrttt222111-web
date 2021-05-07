import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import { Landing } from './Pages'
import { ThemeContext } from "./lib/context";
import Loading from './Components/Loading/Loading';


function App() {

  const [theme, setTheme] = useState('dark');
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
      setTimeout(() => setSpinner(false), 2000)
    }, []);

    console.log("%cMade with 💚 by HRT", "color:#66ff66; font-size:30px");
    console.log = console.warn = console.error = () => {};
    console.error('Something bad happened.');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Router>
        <div className="app" data-theme={theme}>
        {spinner ? <>
            <div className="spinner-container">
                <Loading />
            </div>
            </> : <>
              <Landing theme={theme}/>
            </>
        }
            
        </div>
      </Router>

    </ThemeContext.Provider>
  );
}

export default App;
