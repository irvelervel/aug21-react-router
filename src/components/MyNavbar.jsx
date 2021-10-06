// import { Navbar, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from 'react-router-dom'

const MyNavbar = (props) => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#features">Menu</Nav.Link>
                <Nav.Link href="#pricing">Reservations</Nav.Link>
                <Nav.Link href="#somethingelse">Contact us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default withRouter(MyNavbar)
// the result of withRouter(MyNavbar) is a HOC,
// so our very own MyNavbar enriched with additional props (history, location and match)