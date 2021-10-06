import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// name -> string
// phone -> string | number
// numberOfPeople -> string | number
// smoking -> boolean
// dateTime -> string
// specialRequests -> string

const ReservationForm = () => {

    // state = {
    //     reservation: {
    //         name: '',
    //         phone: '',
    //         numberOfPeople: 1,
    //         smoking: false,
    //         dateTime: '',
    //         specialRequests: '',
    //     }
    // }

    const [reservation, setReservation] = useState({
        name: '',
        phone: '',
        numberOfPeople: 1,
        smoking: false,
        dateTime: '',
        specialRequests: '',
    })

    const handleInput = (propertyName, value) => {
        // this.setState({
        //     reservation: {
        //         ...this.state.reservation,
        //         [propertyName]: value
        //     }
        // })
        setReservation({
            ...reservation,
            [propertyName]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // now how can we access the form input value?
        console.log(reservation)
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation', {
                method: 'POST',
                body: JSON.stringify(reservation),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            console.log(response)
            if (response.ok) {
                alert('Reservation successfully saved!')
                // this.setState({
                //     // this is the initial state of my form!
                // reservation: {
                //     name: '',
                //     phone: '',
                //     numberOfPeople: 1,
                //     smoking: false,
                //     dateTime: '',
                //     specialRequests: '',
                // }
                // })
                setReservation({
                    name: '',
                    phone: '',
                    numberOfPeople: 1,
                    smoking: false,
                    dateTime: '',
                    specialRequests: '',
                })
            } else {
                alert('Something went wrong :(')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const isFormComplete = () => {
        return (
            reservation.name.length > 0 &&
            reservation.phone.length > 0 &&
            reservation.dateTime.length > 0
        )
    }

    return (
        <>
            <h2>BOOK YOUR TABLE HERE</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                        // onChange={
                        //     // this will happen every time I input a keystroke
                        //     e => this.setState({
                        //         reservation: {
                        //             ...this.state.reservation,
                        //             // with the ... your making a copy of all the properties
                        //             // already existing into this.state.reservation
                        //             name: e.target.value
                        //             // and then you're just overwriting ONE property
                        //         }
                        //     })}
                        onChange={e => handleInput('name', e.target.value)}
                        value={reservation.name}
                        type="text"
                        placeholder="Enter your name here"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your phone here"
                        value={reservation.phone}
                        onChange={e => handleInput('phone', e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>How many people?</Form.Label>
                    <Form.Control
                        as="select"
                        value={reservation.numberOfPeople}
                        onChange={e => handleInput('numberOfPeople', e.target.value)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        checked={reservation.smoking}
                        type="checkbox"
                        onChange={e => handleInput('smoking', e.target.checked)}
                        label="Do you smoke?"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control
                        value={reservation.dateTime}
                        onChange={e => handleInput('dateTime', e.target.value)}
                        type="datetime-local" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Any special request?</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        onChange={e => handleInput('specialRequests', e.target.value)}
                        value={reservation.specialRequests}
                        type="text"
                        placeholder="Enter your special requests here" />
                </Form.Group>
                <Button disabled={!isFormComplete()} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ReservationForm