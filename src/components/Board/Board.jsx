import Track from '../Track/Track';
import AddToneTrack from '../AddToneTrack/AddToneTrack';
import './Board.css';

function Board({ instrument, currentBeat, totalBeats, isPlaying }) {
  const { type, choices } = instrument;

  return (
    <div id={`${type}-board`} className="board">
      {type === 'drums' ? (
        choices.map((c) => (
          <Track
            key={c.name}
            choice={c}
            currentBeat={currentBeat}
            totalBeats={totalBeats}
            isPlaying={isPlaying}
          />
        ))
      ) : (
        <AddToneTrack
          choices={choices}
          currentBeat={currentBeat}
          totalBeats={totalBeats}
          isPlaying={isPlaying}
        />
      )}
    </div>
  );
}

export default Board;
