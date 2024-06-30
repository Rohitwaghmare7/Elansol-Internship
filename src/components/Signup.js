import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUserCircle } from "react-icons/fa";
import { BsPersonFill } from 'react-icons/bs';
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        dob: '',
        password: ''
    });

    const { username, email, dob, password } = formData;

    const inputStyle = {
        backgroundColor: "#2A3A4A",
        color: 'white'
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    let history = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();

        // Check if password is at least 5 characters
        if (password.length < 5) {
            alert("Password must be at least 5 characters long.");
            return;
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(formData);
            const response = await axios.post('https://elansol-backend.vercel.app/api/users/register', body, config);
            
            if (response.data.success) {
                alert("Registration successful!");
          
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("token", response.data.authToken);
                history("/dashboard");
            } else {
                // Handle specific errors here
                if (response.data.errors) {
                    response.data.errors.forEach(error => {
                        if (error.location === 'body' && error.path === 'password' && error.type === 'field') {
                            alert(error.msg); // Alert the specific error message for password
                        }
                        // Add more conditions for other fields if needed
                    });
                } else {
                    alert("Registration failed. Please try again."); // Generic error message
                }
            }
            
        } catch (err) {
            console.error(err.response.data);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <Container fluid className="full-height center-content">
            <Row className="justify-content-md-center w-100">
                <Col md={4}>
                    <div className="inner-container">
                        <div className="signup-box ">SIGN UP</div>
                        <div className="text-center mb-4 mt-5">
                            <FaRegUserCircle className="rounded-circle" style={{ color: 'white', fontSize: '104px' }} />
                        </div>
                        <Form onSubmit={onSubmit}>
                            <div className="input-group p-2">
                                <span className="input-group-text border-0" style={{ backgroundColor: "#2A3A4A" }}>
                                    <BsPersonFill className="text-white" />
                                </span>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={onChange}
                                    placeholder="Name"
                                    className="bg-dark border-0"
                                    style={inputStyle}
                                />
                            </div>

                            <div className="input-group p-2">
                                <span className="input-group-text border-0" style={{ backgroundColor: "#2A3A4A" }}>
                                    <MdEmail className="text-white" />
                                </span>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    placeholder="Email"
                                    className="bg-dark border-0"
                                    style={inputStyle}
                                />
                            </div>

                            <div className="input-group p-2">
                                <span className="input-group-text border-0" style={{ backgroundColor: "#2A3A4A" }}>
                                    <FaCalendar className="text-white" />
                                </span>
                                <Form.Control
                                    type="date"
                                    name="dob"
                                    value={dob}
                                    onChange={onChange}
                                    placeholder="DOB"
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
                                    name="password"
                                    value={password}
                                    onChange={onChange}
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

                            <Button variant="info" type="submit" className="w-100 mb-3 mt-2" style={{ backgroundColor: "#17d4c8" }}>
                                SIGNUP
                            </Button>
                            <div className='d-flex'>
                                <Link to="/" className='text-light ms-auto me-auto'>Already have an account? Login</Link>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
