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
import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// App's class itself
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src="/horse.jpg" width="70"></img></Navbar.Brand>
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
            <Route path='/' element={<Home />} exact />
            <Route path='/categories' element={<Categories />} />
            <Route path='/createAd' element={<CreateAd />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/loginRegister' element={<LoginRegister />} />
            {/* Setting up the edit route with id parameter which was changed using button in app.js and Link tag */}
            {/* <Route path='/edit/:id' component={Edit} /> */}
          </Routes>
        </div>

        {/* Footer */}
        <div> 
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
            <div className='container p-4'></div>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2022 Copyright:<a className='text-white' href='https://mdbootstrap.com/'>MDBootstrap.com</a>
            </div>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;