import { useState } from 'react';
import INSTRUMENTS from './scripts/instruments';
import Board from './components/Board';
import './App.css';

function App() {
  const [instruments, setInstruments] = useState([]);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [numBeats, setNumBeats] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    for (let i = 1; i <= numBeats; i++) {
      setTimeout(() => {
        console.log('i:', i);
        setCurrentBeat(i);
      }, 1000 * i);
    }
  };

  const stop = () => {
    setCurrentBeat(1);
  };

  const toggleIsPlaying = () => {
    if (isPlaying) stop();
    else play();
    setIsPlaying((prev) => !prev);
  };

  return (
    <div id="main-container">
      <div id="settings">
        <label htmlFor="numBeats-input">
          Beats:{' '}
          <input
            type="number"
            id="numBeats-input"
            value={numBeats}
            onChange={({ target }) => setNumBeats(target.value)}
          />
        </label>
      </div>
      <div id="select-instruments">
        {INSTRUMENTS.map((i) => (
          <button
            key={i.type}
            type="button"
            onClick={() => setInstruments(instruments.concat(i))}
          >
            {i.displayName}
          </button>
        ))}
      </div>
      <div id="all-instruments">
        {instruments.map((i) => (
          <Board
            key={i.type}
            instrument={i}
            currentBeat={currentBeat}
            numBeats={numBeats}
            isPlaying={isPlaying}
          />
        ))}
      </div>
      <div id="play-btn-container">
        <button
          type="button"
          id="play-pause-button"
          onClick={toggleIsPlaying}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}

export default App;
