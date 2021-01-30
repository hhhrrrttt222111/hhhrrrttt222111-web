import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import { Landing } from './Pages'
import { ThemeContext } from "./lib/context";


function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Router>
        <div className="app" data-theme={theme}>
            <Landing theme={theme}/>
        </div>
      </Router>

    </ThemeContext.Provider>
  );
}

export default App;
