import { Badge, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import items from '../data/menu.json'

const Menu = ({ history }) => (
    <Container>
        {
            items.map(dish => (
                <Row key={dish.id} className="justify-content-center">
                    <Col md={8} className="text-center my-2">
                        <Link to={'/details/' + dish.id}>
                            <img src={dish.image} alt="some pasta" />
                        </Link>
                        {/* another way of doing a redirect */}
                        {/* <img src={dish.image} alt="some pasta" onClick={() => {
                            history.push('/details/' + dish.id)
                        }} /> */}
                        <h4>
                            {dish.name}
                            <Badge variant="warning">{dish.price}</Badge>
                            <Badge variant="danger">{dish.label}</Badge>
                        </h4>
                    </Col>
                </Row>
            ))
        }
    </Container>
)

export default Menu