import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./component.css"

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand>Food</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="/FoodList">Home</Navbar.Brand><>" "</>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropDownElements" href="/Breakfast">Breakfast</NavDropdown.Item>
              <NavDropdown.Item className="dropDownElements" href="/Lunch">Lunch</NavDropdown.Item>
              <NavDropdown.Item className="dropDownElements" href="/Dinner">Dinner</NavDropdown.Item>
              <NavDropdown.Item className="dropDownElements" href="/Dessert">Dessert</NavDropdown.Item>
            </NavDropdown><>" "</>
            <Nav.Link href="/Form">Leave a Rating</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;