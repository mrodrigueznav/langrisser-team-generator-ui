import React from 'react';
import './App.css';
import CharacterGroupByFaction from './components/characterGroupByFaction'

const charactersByFaction = [
  {
    faction: 'Legion of Glory',
    characters: [
      { name: 'Elwin' },
      { name: 'Ledin' }
    ]
  },
  {
    faction: 'Empire',
    characters: [
      { name: 'Elwin' }
    ]
  },
  {
    faction: 'Princess Alliance',
    characters: [
      { name: 'Sophia' }
    ]
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterGroupByFaction
        factions={charactersByFaction}/>
      </header>
    </div>
  );
}

export default App;
