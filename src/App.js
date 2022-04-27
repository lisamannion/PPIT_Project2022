import './App.css'
import { Component } from 'react'
import { AboutUs } from './components/aboutUs'
import { Home } from './components/home'
import { Listings } from './components/listings'
import { CreateAd } from './components/createAd'
import { LoginRegister } from './components/loginRegister'
import { ViewAd } from './components/viewAd'
import { UserAccount } from './components/userAccount'
import { EditAd } from './components/editAd'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'

// App's class itself
class App extends Component {

  constructor() {
    super()
    this.state = { token: '' }
  }

  logout() {
    if (localStorage.token) {
      localStorage.removeItem("token")
      document.getElementById("loginReg").hidden = false
      document.getElementById("logoutUser").hidden = true
      document.getElementById("userGreeting").hidden = true
      document.getElementById("account").hidden = false

      // Redirect to the home page
      window.location = '/loginRegister'
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.state.token = localStorage.getItem('token')
      document.getElementById("logoutUser").hidden = false
      document.getElementById("userGreeting").hidden = false
      document.getElementById("account").hidden = false
      document.getElementById("loginReg").hidden = true
      axios.post('http://localhost:4000/validate', this.state)
        .then((res) => {
          document.getElementById("userGreeting").innerHTML = "Hello " + res.data.id.firstName
        })
        .catch((err) => {
          console.log("entered axios error")
          console.log(err)
        })
    }
  }

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
              <Nav.Link id="loginReg" href="/loginRegister">Login/Register</Nav.Link>
              <Nav.Link id="userGreeting" hidden href="/userAccount" style={{color: "white"}}></Nav.Link>
              <Nav.Link id="account" hidden href="/userAccount">Manage Account</Nav.Link>
              <Nav.Link id="logoutUser" hidden onClick={this.logout}>Logout</Nav.Link>
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
            <Route path='/userAccount' element={< UserAccount />} />
            <Route path='/edit/:id' element={< EditAd />} />
          </Routes>
        </div>

        {/* Footer */}
        <div>
          <MDBFooter className='footer'>
            <Row>
              <div className="footer-left col-md-4">
                <p>
                  <a href="/" className="footer-links">Home </a>|
                  <a href="/listings" className="footer-links"> Listings </a>|
                  <a href="/aboutUs" className="footer-links"> About Us </a>
                </p>
                <p className="footer-company-name">ManeDealR © 2022</p>
              </div>

              <div className="footer-center col-md-4">
                <div>
                  <p>
                    <i className="fa fa-map-marker"></i>
                    <a href="http://maps.google.com/maps?q=Dublin Road, Galway City, Co. Galway, Ireland" className="footer-links" target="_blank"> Dublin Road, Galway City, Co. Galway, Ireland</a>
                  </p>
                </div>
                <div>
                  <p><i className="fa fa-phone"></i> 0831234567</p>
                </div>
                <div>
                  <p>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:support@horse.com" className="footer-links" target="_blank"> support@manedealr.com</a>
                  </p>
                </div>
              </div>
              <div className="footer-right col-md-4">
                <p>Follow us on our social medias!</p>
                <div>
                  <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook-square fa-2x footer-icons facebook"></i></a>
                  <a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter fa-2x footer-icons twitter"></i></a>
                  <a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram fa-2x footer-icons instagram"></i></a>
                </div>
              </div>
            </Row>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;