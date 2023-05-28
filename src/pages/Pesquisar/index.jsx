import React from "react";
import "./index.css";

export default class PersonList extends React.Component {
  state = {
    persons: [],
    searchQuery: "",
    searchResults: [],
    selectedAddress: null
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

  handleAddressClick = (address) => {
    this.setState({ selectedAddress: address });
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
                <td
                  onClick={() => this.handleAddressClick(person.endereco)}
                  style={{ cursor: "pointer" }}
                >
                  {person.endereco}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />

        {this.state.selectedAddress && (
          <div id="mapa" data-testid="mapa">
            <iframe
              title="Localização da empresa"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                this.state.selectedAddress
              )}&output=embed`}
              width="600"
              height="350"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
