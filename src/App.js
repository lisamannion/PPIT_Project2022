import './App.css'
import { Component } from 'react'
import { AboutUs } from './components/aboutUs'
import { Home } from './components/home'
import { Listings } from './components/listings'
import { CreateAd } from './components/createAd'
import { LoginRegister } from './components/loginRegister'
import { ViewAd } from './components/viewAd'
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
          {/* Navigation bar for the site */}
          <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src="/horse.jpg" width="70"></img></Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Listings" id="listing-dropdown">
                <NavDropdown.Item href="/listings">Browse Listings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/createAd">Create Ad</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
              <Nav.Link href="/loginRegister">Login/Register</Nav.Link>
            </Nav>
          </Navbar>

          {/* Tabs on the navbar are routed to different components using Routes  */}
          <Routes>
            <Route path='/' element={< Home />} exact />
            <Route path='/listings' element={< Listings />} />
            <Route path='/createAd' element={< CreateAd />} />
            <Route path='/aboutUs' element={< AboutUs />} />
            <Route path='/loginRegister' element={< LoginRegister />} />
            {/* Setting up the view horse route (to view details of specific advert) with id parameter */}
            <Route path='/horses/:id' element={< ViewAd />} />
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