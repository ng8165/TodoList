import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" className="p-3">
            <Navbar.Brand href="/" className="me-auto">Todo List</Navbar.Brand>
            <Button variant="secondary" onClick={props.onAdd}>Add Task</Button>
        </Navbar>
    );
}

export default Header;