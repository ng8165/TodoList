import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ModalView(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function validateForm() {
        if (title !== "") {
            props.save(title, content);
            setTitle("");
            setContent("");
        } else {
            alert("Please enter a title.")
        }
    }

    return (
        <Modal show={props.show} onHide={props.close} centered>
            <Modal.Header closeButton><Modal.Title>Add Task</Modal.Title></Modal.Header>

            <Modal.Body>
                <FloatingLabel label="Title" className="mb-3">
                    <Form.Control type="text" placeholder=" " value={title} onChange={(e) => setTitle(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel label="Content">
                    <Form.Control type="text" placeholder=" " value={content} onChange={(e) => setContent(e.target.value)} />
                </FloatingLabel>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>Close</Button>
                <Button variant="primary" onClick={validateForm}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalView;