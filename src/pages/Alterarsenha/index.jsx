import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./add.css";

class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      old_password: "",
      new_password: "",
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
      .put("http://127.0.0.1:5000/change-password", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ message: "Senha alterada com sucesso" });
        setTimeout(() => {
          this.setState({ message: "" });
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: "Erro ao alterar a senha" });
      });
  };

  render() {
    return (
      <div className="centered">
        <Container>
          <h1>Alterar senha</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formOldPassword">
              <Form.Label>Senha antiga</Form.Label>
              <Form.Control
                type="password"
                name="old_password"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword">
              <Form.Label>Nova senha</Form.Label>
              <Form.Control
                type="password"
                name="new_password"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Alterar
            </Button>
          </Form>
          <p>{this.state.message}</p>
        </Container>
      </div>
    );
  }
}

export default ChangePasswordComponent;
