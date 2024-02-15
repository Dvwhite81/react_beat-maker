import Track from '../Track/Track';
import './Board.css';

function Board({
  type,
  choices,
  currentBeat,
  totalBeats,
  isPlaying,
}) {
  return (
    <div id={`${type}-board`} className="board">
      {choices.length === 0 ? (
        <div>Need tone buttons</div>
      ) : (
        choices.map((c) => (
          <Track
            key={c.name}
            choice={c}
            currentBeat={currentBeat}
            totalBeats={totalBeats}
            isPlaying={isPlaying}
          />
        ))
      )}
    </div>
  );
}

export default Board;
