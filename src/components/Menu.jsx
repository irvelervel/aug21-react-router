import { Badge, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'

const Menu = () => (
    <Container>
        {
            items.map(dish => (
                <Row key={dish.id} className="justify-content-center">
                    <Col md={8} className="text-center my-2">
                        <img src={dish.image} alt="some pasta" />
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