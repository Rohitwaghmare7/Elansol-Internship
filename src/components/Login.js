import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUserCircle } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();

  const inputStyle = {
    backgroundColor: "#2A3A4A",
    color: "white",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://elansol-backend.vercel.app/api/users/login", {
        username,
        password,
      });
      console.log(response.data);
      if (response.data.success) {
        alert("Login successful!");
  
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.authToken);
        history("/dashboard");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container fluid className="full-height center-content">
      <Row className="justify-content-md-center w-100">
        <Col md={4}>
          <div className="inner-container">
            <div className="login-box">SIGN IN</div>
            <div className="text-center mb-4 mt-5">
              <FaRegUserCircle
                className="rounded-circle"
                style={{ color: "white", fontSize: "104px" }}
              />
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="input-group p-2">
                <span
                  className="input-group-text border-0"
                  style={{ backgroundColor: "#2A3A4A" }}
                >
                  <BsPersonFill className="text-white" />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className="bg-dark border-0"
                  style={inputStyle}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input-group p-2">
                <span
                  className="input-group-text border-0"
                  style={{ backgroundColor: "#2A3A4A" }}
                >
                  <FaLock className="text-white" />
                </span>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="bg-dark border-0"
                  style={inputStyle}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  style={{ fontSize: "12px", color: "#17d4c8" }}
                />
                <Link
                  to={""}
                  style={{
                    fontSize: "12px",
                    textDecoration: "none",
                    color: "#17d4c8",
                  }}
                >
                  Forgot your password?
                </Link>
              </div>

              <Button
                variant="info"
                type="submit"
                className="w-100 mb-3"
                style={{ backgroundColor: "#17d4c8" }}
              >
                LOGIN
              </Button>
              <div className="d-flex">
                <Link to="/signup" className="text-light ms-auto me-auto">
                  Don't have an account? Create here
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
