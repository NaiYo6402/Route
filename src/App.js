import React ,{ Component }  from "react";
import {NavLink} from 'react-router-dom'
import Routing from './routes'

function App() {
  return (
    <div className="App">
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/About" activeClassName="is-active" className="navbar-item">About</NavLink>
                <NavLink to="/Contact" activeClassName="is-active" className="navbar-item">Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <Routing />
      
    </div>
  );
}

export default App;
