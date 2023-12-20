import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
export default Navigation;

const helpIcon = <FontAwesomeIcon icon={faComments} />;
const signInIcon = <FontAwesomeIcon icon={faUser} />;
const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;

function Navigation() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid className="d-flex flex-column Navwrap">
        <Row className="Main ">
          <div className="d-flex justify-content-evenly align-items-center">
            <div className="d-flex align-items-center justify-content-start">
              <Navbar.Brand href="#">
                <img src={logo} className="logo" />
              </Navbar.Brand>

              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search 🔍"
                  className="me-2 p-2"
                  aria-label="Search"
                />
              </Form>
            </div>

            <div className="d-flex justify-content-evenly mainLinks">
              <div>
                <NavDropdown
                  title="🇺🇸 USA"
                  id="navbarScrollingDropdown"
                  className="Link"
                >
                  <NavDropdown.Item href="#action3" className="Link Option">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Link Option">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="Link Option">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div>
                <div className="d-flex align-items-center Link">
                  {helpIcon}
                  <NavDropdown title="24/7 help" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3" className="Link Option">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className="Link Option">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className="Link Option">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center Link">
                  {signInIcon}
                  <NavDropdown
                    title="sign in"
                    id="navbarScrollingDropdown"
                    className="Link"
                  >
                    <NavDropdown.Item href="#action3" className="Link Option">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className="Link Option">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className="Link Option">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center Link">
                  {cartIcon}
                  <NavDropdown
                    title="cart"
                    id="navbarScrollingDropdown"
                    className="Link"
                  >
                    <NavDropdown.Item href="#action3" className="Link Option">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className="Link Option">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className="Link Option">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className="Second">
          <div className="d-flex align-items-center">
            <Col>
              <NavDropdown
                title="shop"
                id="navbarScrollingDropdown"
                className="Link"
              >
                <NavDropdown.Item href="#action3" className="Link Option">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="Link Option">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="Link Option">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown
                title="pharmacy"
                id="navbarScrollingDropdown"
                className="Link"
              >
                <NavDropdown.Item href="#action3" className="Link Option">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="Link Option">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="Link Option">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <Nav.Link className="Link">brands</Nav.Link>
            </Col>
            <Col>
              <Nav.Link className="Link">chewy picks</Nav.Link>
            </Col>
            <Col>
              <NavDropdown
                title="give back"
                id="navbarScrollingDropdown"
                className="Link"
              >
                <NavDropdown.Item href="#action3" className="Link Option">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="Link Option">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="Link Option">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <Nav.Link className="Link">holiday deals</Nav.Link>
            </Col>
            <Col>
              <Nav.Link className="Link">e-gift cards</Nav.Link>
            </Col>
            <Col xs={3}>
              <Nav.Link className="Special">
                free delivery on first-time orders over $25
              </Nav.Link>
            </Col>
          </div>
        </Row>
      </Container>
    </Navbar>
  );
}
