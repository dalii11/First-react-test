// import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Navbar, FormCheck } from "react-bootstrap";
function App() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.dalyinternational.com/images/galleryImage/cropped/daly-logo-green-swoosh-1-2.jpeg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    My First React
                </Navbar.Brand>
            </Navbar>
            <Navbar fixed="top" />

            <Form className="form">
                <Form.Group controlId="formBasiclastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        id="LastName"
                        type="LastName"
                        placeholder="Enter Last Name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        id="mail"
                        type="first Name"
                        placeholder="Enter first Name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        id="mail"
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="butt">
                    Submit
                </Button>
            </Form>
        </Fragment>
    );
}

export default App;
