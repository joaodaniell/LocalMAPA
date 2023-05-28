import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./add.css";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:5000/register", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ message: "Usuário cadastrado com sucesso" });
        setTimeout(() => {
          this.setState({ message: "" });
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: "Erro ao cadastrar usuário" });
      });
  };

  render() {
    return (
      <div className="centered">
        <Container>
          <h1>Registro</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form>
          <p>{this.state.message}</p>
        </Container>
      </div>
    );
  }
}

export default RegisterComponent;
