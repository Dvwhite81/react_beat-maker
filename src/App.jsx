import { useState } from 'react';
import INSTRUMENTS from './scripts/instruments';
import Board from './components/Board';
import './App.css';
import Settings from './components/Settings';
import PlayBtn from './components/PlayBtn';

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

  // MS per beat = 60000 / tempo
  // MS per beat division = 60000 / tempo / beatDivision
  let index = 1;

  const play = () => {
    loopInterval = setInterval(() => {
      setCurrentBeat((index % totalBeats) + 1);
      index++;
    }, timing * index);
  };

  const stop = () => {
    setIsPlaying(false);
    clearInterval(loopInterval);
    setCurrentBeat(1);
  };

  return (
    <div id="main-container">
      <Settings
        isPlaying={isPlaying}
        tempo={tempo}
        setTempo={setTempo}
        numMeasures={numMeasures}
        setNumMeasures={setNumMeasures}
        numBeats={numBeats}
        setNumBeats={setNumBeats}
        beatDivision={beatDivision}
        setBeatDivision={setBeatDivision}
        setTotalBeats={setTotalBeats}
        setTiming={setTiming}
        stop={stop}
      />
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
      <PlayBtn
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        play={play}
        stop={stop}
      />
    </div>
  );
}

export default App;
