import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'

const DishDetails = ({ match }) => {

    const [pastaItem, setPastaItem] = useState(null)

    useEffect(() => {
        let retrievedIdFromURL = match.params.pastaId

        // old way parsing a query string
        // let urlQuery = new URLSearchParams(window.location.search)
        // let retrievedIdFromURL = urlQuery.get('pastaId')
        let foundPasta = items.find(pasta => pasta.id.toString() === retrievedIdFromURL)
        // 1 !== '1'
        console.log(foundPasta)
        setPastaItem(foundPasta)
        // the next line is a special comment for suppressing unnecessary hooks warnings
        // if you are sure of what you're doing :)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row className="justify-content-center">
                {
                    typeof pastaItem === 'undefined'
                        ? (
                            <h1>404 - Pasta Not Found</h1>
                        )
                        : !pastaItem
                            ? (
                                <p>LOADING...</p>
                            )
                            : (
                                <Col md={8} className="text-center">
                                    <Card>
                                        <Card.Img variant="top" src={pastaItem.image} />
                                        <Card.Body>
                                            <Card.Title>{pastaItem.name}</Card.Title>
                                            <Card.Text>
                                                {pastaItem.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                }
            </Row>
        </Container>
    )
}

export default DishDetails