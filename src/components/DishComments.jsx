import ListGroup from "react-bootstrap/ListGroup"

const DishComments = (props) => (
    <ListGroup>
        {
            // we have to check selectedDish before trying to access
            // its comments because it can be null!!
            // -> if we access something out of null... crash!
            props.selectedDish
                ? props.selectedDish.comments.map(c => (
                    <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                ))
                : <ListGroup.Item>Select a dish!</ListGroup.Item>
        }
        {/* {
        !this.state.selectedDish && <ListGroup.Item>Select a dish!</ListGroup.Item>
    }
    {
        this.state.selectedDish &&
        // the && is called 'short-circuit'
        // if the selectedDish is !null, the second part
        // of the statement will get executed
        this.state.selectedDish.comments.map(c => (
            <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
        ))
    } */}
    </ListGroup>
)

export default DishComments