import React, { Component } from 'react';
import CharacterInfo from './components/CharacterInfo';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Numenera App</h1>
        <CharacterInfo
          name="Stan Dadaelar"
          job="Jack"
          descriptors={['Doomed', 'Foolish']}
          foci={['Works miracles', 'Works the back alleys']}
          xp={0}
          effort={1}
          mightPool={10}
          speedPool={10}
          intPool={12}
          mightEdge={0}
          speedEdge={1}
          intEdge={0}
        />
      </div>
    );
  }
}

export default App;
