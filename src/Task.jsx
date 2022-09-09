import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Task(props) {
    return (
        <Card className="task m-2">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
                <Button variant="outline-danger" size="sm" onClick={props.onDelete}>Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default Task;