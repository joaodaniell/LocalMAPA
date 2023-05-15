import React, { Component } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import axios from "axios";
import "./add.css";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      loggedIn: false,
      showConfirmationModal: false,
      confirmUsername: "",
      confirmPassword: "",
      confirmError: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogout = () => {
    axios
      .get("http://127.0.0.1:5000/logout")
      .then((response) => {
        console.log(response.data);
        this.setState({ loggedIn: false });
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleShowConfirmationModal = () => {
    this.setState({ showConfirmationModal: true });
  };

  handleCloseConfirmationModal = () => {
    this.setState({
      showConfirmationModal: false,
      confirmUsername: "",
      confirmPassword: "",
      confirmError: ""
    });
  };

  handleConfirmDeleteAccount = () => {
    const { confirmUsername, confirmPassword } = this.state;
    axios
      .delete("http://127.0.0.1:5000/delete-user", {
        data: { username: confirmUsername, password: confirmPassword }
      })
      .then((response) => {
        console.log(response.data);
        alert("Conta removida com sucesso!");
        this.handleCloseConfirmationModal();
        this.handleLogout();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ confirmError: "Usuário ou senha incorretos" });
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ loggedIn: true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: "Usuário ou senha incorretos" });
      });
  };

  render() {
    const {
      loggedIn,
      showConfirmationModal,
      confirmUsername,
      confirmPassword,
      confirmError
    } = this.state;

    if (loggedIn) {
      return (
        <div className="centered">
          <Container>
            <h1>Você está logado!</h1>
            <Button variant="primary" onClick={this.handleLogout}>
              Logout
            </Button>
            <Button variant="danger" onClick={this.handleShowConfirmationModal}>
              Remover Conta
            </Button>
            <Modal
              show={showConfirmationModal}
              onHide={this.handleCloseConfirmationModal}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="confirmUsername">
                    <Form.Label>Nome de usuário</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira seu nome de usuário"
                      name="confirmUsername"
                      value={confirmUsername}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Insira sua senha"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {confirmError && <p className="error">{confirmError}</p>}
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={this.handleCloseConfirmationModal}
                >
                  Cancelar
                </Button>
                <Button
                  variant="danger"
                  onClick={this.handleConfirmDeleteAccount}
                >
                  Remover conta
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="centered">
          <Container>
            <h1 className="h1login">Login</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira seu nome de usuário"
                  name="username"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insira sua senha"
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              {this.state.message && (
                <p className="error">{this.state.message}</p>
              )}
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default LoginComponent;
