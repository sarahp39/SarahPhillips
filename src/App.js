//general imports
import React from "react";
import {Link, hashHistory } from "react-router";
import { Nav, NavItem, MenuItem } from "react-bootstrap";

//general layout
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "App">
                <Header />
                <NavBar />
                <main className = "container" id = "mainContainer">
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}
//the header with a banner
class Header extends React.Component {
    render() {
        return(
            <div id = "banner">
                <div>
                    <h1>Sarah Ann Phillips</h1>
                </div>
            </div>
        );
    }
}
//the navigation
class NavBar extends React.Component {
  render() {
    return (
      <Nav className="navbar navbar-inverse" id ="navbarApp" role = "navigation">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link aria-label="Home button" to="/Home" activeClassName="activeLink" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link aria-label="Projects button" to="/Projects" activeClassName="activeLink" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link aria-label="Resume button" to="/Resume" activeClassName="activeLink" className="nav-link">Resume</Link>
          </li>
        </ul>
      </Nav>
    );
  }
}
//the Footer
class Footer extends React.Component {
    render() {
        return (
            <div className = "footer">
                <p>Copyright © 2017 Sarah Ann Phillips - All Rights Reserved.</p>
            </div>
        );
    }
}
export default App;