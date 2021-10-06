// We're going to create a Class Component because we need to inject some logic!

import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { format, parseISO } from 'date-fns'
import ReservationForm from "./ReservationForm";
import { withRouter } from "react-router";

const Reservations = () => {

    // - I don't want the user to wait ungracefully for my fetch
    // because of this, I want the user to be immediately presented with the static 
    // content of my component
    // - so, the fetching process should happen AFTER the initial render of the static content
    // - let's learn about another lifecycle method, called componentDidMount

    // state = {
    //     // the reservations will come in an array of objects
    //     reservations: [],
    //     isLoading: true,
    //     isError: false
    // }

    const [reservations, setReservations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    // componentDidMount is a lifecycle method happening AFTER the initial render
    // componentDidMount happens JUST ONCE for the whole lifecycle of the component
    // because of this it's the PERFECT PLACE for EXPENSIVE OPERATIONS (i.e. fetches)

    const fetchReservations = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation')
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                // this.setState({
                //     reservations: data,
                //     isLoading: false,
                //     isError: false
                // })
                setReservations(data)
                setIsLoading(false)
                setIsError(false)
            } else {
                // we'll fall here if the URL is mispelled or if the server has a problem
                console.log('an error happened in the fetch!')
                // this.setState({
                //     isLoading: false,
                //     isError: true
                // })
                setIsLoading(false)
                setIsError(true)
            }
        } catch (error) {
            // this is for a more generic error, something like an internet issue
            console.log(error)
            // this.setState({
            //     isLoading: false,
            //     isError: true
            // })
            setIsLoading(false)
            setIsError(true)
        }
    }

    const zee = () => {
        let array = ['Strive']
        return array
    }

    // this is 100% componentDidMount
    useEffect(() => {
        console.log('this is componentDidMount!')
        // here we're going to do the fetch...
        fetchReservations()
        console.log(zee())
    }, [])

    // componentDidMount = () => {
    //     // here I can write my code, being sure that it will be executed:
    //     // 1) just once!
    //     // 2) immediately after the initial invocation of render()
    //     console.log('this is componentDidMount!')
    //     // here we're going to do the fetch...
    //     this.fetchReservations()
    //     console.log(this.zee())
    // }

    console.log('this is the render!')

    // if you set whatever state into render(), you immediately call render() again!
    // this will ALWAYS lead to an infinite loop!
    // this.setState({
    //     name: 'Stefano'
    // })

    // render fires MANY times!
    // initially, but also whenever a change is detected in the STATE or in the PROPS
    // of this component!
    return (
        <Container>
            <Row className="my-4 justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <h3>RESERVATIONS</h3>
                    {
                        isError && (
                            <Alert variant="danger">
                                Aww snap, we got an error! :(
                            </Alert>
                        )
                    }
                    {
                        isLoading && <Spinner animation="border" variant="success" />
                    }
                    <ListGroup>
                        {/* 
                        for formatting our dateTime string in a better format, we'll use date-fns
                        two steps:
                        1) create a Date object out of r.dateTime using parseISO
                        2) create a new string for our DOM using format, in the way we like
                    */}
                        {
                            reservations.length === 0 && !isLoading
                                ? <ListGroup.Item>NO RESERVATIONS SAVED!</ListGroup.Item>
                                : reservations.map(r => (
                                    <ListGroup.Item key={r._id}>{r.name}
                                        {' '} for {' ' + r.numberOfPeople + ' '}
                                        {/* parseISO takes a string and returns a Date object */}
                                        {/* format takes 2 arguments: the Date object and the string representing 
                                    the format you want the date to be printed with */}
                                        - {format(parseISO(r.dateTime), 'MMMM do yyyy | HH:mm')}</ListGroup.Item>
                                ))
                        }
                    </ListGroup>
                </Col>
            </Row>
            <Row className="my-4 justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <ReservationForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Reservations

// ARROW FUNCTIONS!
// let name = 'Guillermo'

// const arrowFunction = () => {
//     return name
// }

// const arrowFunction2 = () => (name)