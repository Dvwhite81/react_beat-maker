import { useState } from 'react';
import Track from '../Track/Track';
import AddToneTrack from '../AddToneTrack/AddToneTrack';
import './Board.css';

function Board({
  instrument,
  currentBeat,
  totalBeats,
  beatDivision,
  isPlaying,
}) {
  const [selectedTones, setSelectedTones] = useState([]);

  const { type, choices } = instrument;

  const toggleSelected = (option) => {
    if (selectedTones.includes(option)) {
      setSelectedTones(selectedTones.filter((t) => t !== option));
    } else {
      setSelectedTones([...selectedTones, option]);
    }
  };

  return (
    <div id={`${type}-board`} className="board">
      {type === 'drums' ? (
        choices.map((c) => (
          <Track
            key={c.name}
            choice={c}
            currentBeat={currentBeat}
            totalBeats={totalBeats}
            beatDivision={beatDivision}
            isPlaying={isPlaying}
          />
        ))
      ) : (
        <AddToneTrack
          choices={choices}
          currentBeat={currentBeat}
          totalBeats={totalBeats}
          beatDivision={beatDivision}
          isPlaying={isPlaying}
          selectedTones={selectedTones}
          toggleSelected={toggleSelected}
        />
      )}
    </div>
  );
}

export default Board;
