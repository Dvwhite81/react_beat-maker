import Track from './Track';

function Board({ instrument, currentBeat, numBeats, isPlaying }) {
  const { type, displayName, choices } = instrument;

  return (
    <div id={`${type}-board`} className="board">
      <div className="board-title">{displayName}</div>
      {choices.map((c) => (
        <Track
          key={c.name}
          choice={c}
          currentBeat={currentBeat}
          numBeats={numBeats}
          isPlaying={isPlaying}
        />
      ))}
    </div>
  );
}

export default Board;
