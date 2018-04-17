import React, { Component } from 'react';
import airportsInformations from './assets/files/airports'

class App extends Component {
  render() {

    const airportsValues = Object.values(airportsInformations.airports)
    
    const airportsList = airportsValues.map((item, key) => {
      const name = item[0]
          , code = item[1]

      return (
          <li key={key}>
              <a onClick={() => this.onSelectAirport(code, name)}
                  className="hmmAirportAutocompleteOptions__item">
                  {name}
              </a>
          </li>
      )
    })

    return (
      <div className="App">
        <h1> Esse é o buscador da maxmilhas</h1>
        <h2> Airports List </h2>
        {airportsList}
      </div>
    );
  }
}

export default App;
