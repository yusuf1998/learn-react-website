import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";

const Header = () => (
  <header>
    <Navbar
      fixed="top"
      color="light"
      light
      expand="xs"
      className="border-bottom border-gray bg-white"
      style={{ height: 80 }}
    >
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  Home
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input
                type="search"
                className="mr-3"
                placeholder="Search My Articles"
              />
              <Button type="submit" color="info" outline>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
