import { useState } from 'react';
import INSTRUMENTS from './scripts/instruments';
import Board from './components/Board';
import './App.css';
import { isValidNum, isValidTempo } from './scripts/helpers';

let loopInterval;

function App() {
  const [instruments, setInstruments] = useState([]);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [numMeasures, setNumMeasures] = useState(2);
  const [numBeats, setNumBeats] = useState(4);
  const [beatDivision, setBeatDivision] = useState(4);
  const [totalBeats, setTotalBeats] = useState(
    numMeasures * numBeats * beatDivision,
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
    if (!isValidTempo(newTempo)) return;

    setTempo(newTempo);
    setTiming(60000 / newTempo / beatDivision);

    if (isPlaying) stop();
  };

  const updateNumMeasures = (value) => {
    const newNumMeasures = parseInt(value, 10);

    if (!isValidNum(newNumMeasures)) return;

    setNumMeasures(newNumMeasures);
    setTotalBeats(newNumMeasures * numBeats * beatDivision);
    if (isPlaying) stop();
  };

  const updateNumBeats = (value) => {
    const newNumBeats = parseInt(value, 10);

    if (!isValidNum(newNumBeats)) return;

    setNumBeats(newNumBeats);
    setTotalBeats(numMeasures * newNumBeats * beatDivision);
    if (isPlaying) stop();
  };

  const updateBeatDivision = (value) => {
    const newBeatDivision = parseInt(value, 10);

    if (!isValidNum(newBeatDivision)) return;

    setBeatDivision(newBeatDivision);
    setTotalBeats(numMeasures * numBeats * newBeatDivision);
    setTiming(60000 / tempo / newBeatDivision);
    if (isPlaying) stop();
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
        <label htmlFor="numMeasures-input">
          Measures:{' '}
          <input
            type="number"
            id="numMeasures-input"
            value={numMeasures}
            onChange={({ target }) => updateNumMeasures(target.value)}
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
        <label htmlFor="beatDivision-input">
          Beat Division:{' '}
          <input
            type="number"
            id="beatDivision-input"
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
