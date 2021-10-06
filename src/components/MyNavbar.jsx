// import { Navbar, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, withRouter } from 'react-router-dom'

const MyNavbar = ({ brand, history, location, match }) => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>{brand}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <div className="nav-link" onClick={() => {
                    console.log('hello!')
                    history.push('/menu')
                }} style={{ cursor: 'pointer' }}>Menu</div>
                <Link to="/reservations">
                    <div className={location.pathname === '/reservations' ? 'nav-link active' : 'nav-link'}>Reservations</div>
                </Link>
                <Nav.Link>Contact us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

// two ways for redirecting the user
// 1) Using a <Link /> component
// 2) Using history.push()

export default withRouter(MyNavbar)
// the result of withRouter(MyNavbar) is a HOC,
// so our very own MyNavbar enriched with additional props (history, location and match)