import './App.css'
import { Component } from 'react'
import { AboutUs } from './components/aboutUs'
import { Home } from './components/home'
import { Categories } from './components/categories'
import { CreateAd } from './components/createAd'
import { LoginRegister } from './components/loginRegister'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// App's class itself
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="home"><img src="/horse.jpg" width="70"></img></Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Listings" id="listing-dropdown">
                <NavDropdown.Item href="/categories">Browse Categories</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/createAd">Create Ad</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
              <Nav.Link href="/loginRegister">Login/Register</Nav.Link>
            </Nav>
          </Navbar>

          {/* Tab on the navbar are routed to different components using Switch eg. Home tab on the navbar is showing the Content component */}
          <Routes>
            <Route path='/' component={Home} exact />
            <Route path='/categories' component={Categories} />
            <Route path='/createAd' component={CreateAd} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/loginRegister' component={LoginRegister} />
            {/* Setting up the edit route with id parameter which was changed using button in app.js and Link tag */}
            {/* <Route path='/edit/:id' component={Edit} /> */}
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;