import { useState } from 'react';
import INSTRUMENTS from './scripts/instruments';
import Board from './components/Board';
import './App.css';

let loopInterval;

function App() {
  const [instruments, setInstruments] = useState([]);
  const [tempo, setTempo] = useState(500);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [numBeats, setNumBeats] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [btnText, setBtnText] = useState('Play');

  let index = 1;

  const playLoop = () => {
    loopInterval = setInterval(() => {
      setCurrentBeat((index % numBeats) + 1);
      index++;
    }, tempo * index);
  };

  const stop = () => {
    setIsPlaying(false);
    clearInterval(loopInterval);
    setCurrentBeat(1);
  };

  const togglePlaying = () => {
    if (isPlaying) {
      stop();
      setBtnText('Play');
    } else {
      setIsPlaying(true);
      playLoop();
      setBtnText('Stop');
    }
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
          onClick={() => {
            togglePlaying();
          }}
        >
          {btnText}
        </button>
      </div>
      <div className="info">Current Beat: {currentBeat}</div>
    </div>
  );
}

export default App;
