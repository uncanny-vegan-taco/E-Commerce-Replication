import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.png";
import "./Navigation.css";
export default Navigation;

function Navigation() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid className="d-flex flex-column">
        <Row className="Main">
          <Col xs={2}>
            <Navbar.Brand href="#">
              <img src={logo} className="logo" />
            </Navbar.Brand>
          </Col>
          <Col xs={4}>
            <Form>
              <Form.Control
                type="search"
                placeholder="Search 🔍"
                className="me-2 p-2"
                aria-label="Search"
              />
            </Form>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="Link">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className="Link">
                  Link
                </Nav.Link>
                <NavDropdown
                  title="Link"
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
                <Nav.Link href="#" className="Link">
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
        <Row>
          <Col>
            <NavDropdown
              title="Link"
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
              title="Link"
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
              title="Link"
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
              title="Link"
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
              title="Link"
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
              title="Link"
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
              title="Link"
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
              title="Link"
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
        </Row>
      </Container>
    </Navbar>
  );
}
