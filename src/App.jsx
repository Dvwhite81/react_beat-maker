import { useState } from 'react';
import INSTRUMENTS from './scripts/instruments';
import Board from './components/Board';
import './App.css';

let loopInterval;

function App() {
  const [instruments, setInstruments] = useState([]);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [numBeats, setNumBeats] = useState(4);
  const [beatDivision, setBeatDivision] = useState(4);
  const [totalBeats, setTotalBeats] = useState(
    numBeats * beatDivision,
  );
  const [tempo, setTempo] = useState(120);
  const [timing, setTiming] = useState(60000 / tempo / beatDivision);
  const [isPlaying, setIsPlaying] = useState(false);
  const [btnText, setBtnText] = useState('Play');

  // MS per beat = 60000 / tempo
  // MS per beat division = 60000 / tempo / beatDivision
  let index = 1;

  const play = () => {
    setBtnText('Stop');
    loopInterval = setInterval(() => {
      setCurrentBeat((index % totalBeats) + 1);
      index++;
    }, timing * index);
  };

  const stop = () => {
    console.log('stop');
    setIsPlaying(false);
    setBtnText('Play');
    clearInterval(loopInterval);
    setCurrentBeat(1);
  };

  const togglePlaying = () => {
    if (isPlaying) {
      stop();
    } else {
      setIsPlaying(true);
      play();
    }
  };

  const updateTempo = (value) => {
    const newTempo = parseInt(value, 10);
    if (newTempo <= 0 || newTempo >= 300 || Number.isNaN(newTempo)) {
      return;
    }
    setTempo(newTempo);
    setTiming(60000 / newTempo / beatDivision);
    stop();
  };

  const updateNumBeats = (value) => {
    const newNumBeats = parseInt(value, 10);
    console.log('newNumBeats:', newNumBeats);
    if (
      newNumBeats <= 0 ||
      newNumBeats > 8 ||
      Number.isNaN(newNumBeats)
    ) {
      return;
    }
    setNumBeats(newNumBeats);
    setTotalBeats(newNumBeats * beatDivision);
    stop();
  };

  const updateBeatDivision = (value) => {
    const newBeatDivision = parseInt(value, 10);
    if (
      newBeatDivision <= 0 ||
      newBeatDivision > 4 ||
      Number.isNaN(newBeatDivision)
    ) {
      return;
    }
    setBeatDivision(newBeatDivision);
    setTiming(60000 / tempo / newBeatDivision);
    stop();
  };

  return (
    <div id="main-container">
      <div id="settings">
        <label htmlFor="tempo-input">
          Tempo:{' '}
          <input
            type="number"
            id="tempo-input"
            value={tempo}
            onChange={({ target }) => updateTempo(target.value)}
          />
        </label>
        <label htmlFor="numBeats-input">
          Beats:{' '}
          <input
            type="number"
            id="numBeats-input"
            value={numBeats}
            onChange={({ target }) => updateNumBeats(target.value)}
          />
        </label>
        <label htmlFor="beat-division-input">
          Beat Division:{' '}
          <input
            type="number"
            id="beat-division-input"
            value={beatDivision}
            onChange={({ target }) =>
              updateBeatDivision(target.value)
            }
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
            totalBeats={totalBeats}
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
