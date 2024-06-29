import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUserCircle } from "react-icons/fa";
import { BsPersonFill } from 'react-icons/bs';
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
    const inputStyle = {
        backgroundColor: "#2A3A4A",
        color: 'white'
    };

    const placeholderStyle = {
        color: 'white'
    };

    return (
        <Container fluid className="full-height center-content">
            <Row className="justify-content-md-center w-100">
                <Col md={4}>
                    <div className="inner-container">
                        <div className="login-box">SIGN IN</div>
                        <div className="text-center mb-4 mt-5">
                            <FaRegUserCircle className="rounded-circle" style={{ color: 'white', fontSize: '104px' }} />
                        </div>
                        <Form>
                            <div className="input-group p-2">
                                <span className="input-group-text border-0" style={{ backgroundColor: "#2A3A4A" }}>
                                    <BsPersonFill className="text-white" />
                                </span>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    className="bg-dark border-0"
                                    style={inputStyle}
                                />
                            </div>

                            <div className="input-group p-2">
                                <span className="input-group-text border-0" style={{ backgroundColor: "#2A3A4A" }}>
                                    <FaLock className="text-white" />
                                </span>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="bg-dark border-0"
                                    style={inputStyle}
                                />
                            </div>

                            <style>
                                {`
                                    .bg-dark::placeholder {
                                        color: white;
                                    }
                                `}
                            </style>

                            <div className="d-flex justify-content-between mb-3 ps-3 pe-3">
                                <Form.Check type="checkbox" label="Remember me" className="" style={{ fontSize: "12px", color: "#17d4c8" }} />
                                <Link to={""} className="" style={{ fontSize: "12px", textDecoration: "none", color: "#17d4c8" }}>Forgot your password?</Link>
                            </div>

                            <Button variant="info" type="submit" className="w-100 mb-3" style={{ backgroundColor: "#17d4c8" }}>
                                LOGIN
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
