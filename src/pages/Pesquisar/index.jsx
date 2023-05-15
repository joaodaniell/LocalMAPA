import React from "react";
import "./index.css";

export default class PersonList extends React.Component {
  state = {
    persons: [],
    searchQuery: "",
    searchResults: []
  };

  componentDidMount() {
    fetch("https://CrudLocalMap.brunolucas2.repl.co/instituicao")
      .then((response) => response.json())
      .then((personsList) => {
        this.setState({ persons: personsList });
      });
  }

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchQuery, persons } = this.state;
    const searchResults = persons.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ searchResults });
  };

  render() {
    const results = this.state.searchQuery
      ? this.state.searchResults
      : this.state.persons;

    return (
      <div>
        <h1 className="person">
          Seja Bem Vindo! Temos o mapeamento detalhado da sua instituição de
          ensino <br />
          Digite sua instiuição ou universidade desejável e aproveite os
          recursos.
        </h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:(Sigla)
            <input
              type="text"
              name="search"
              value={this.state.searchQuery}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Pesquisar</button>
        </form>

        <table className="tabelalist">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {results.map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
