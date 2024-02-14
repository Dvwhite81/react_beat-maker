import Track from './Track';

function Board({ instrument, currentBeat, totalBeats, isPlaying }) {
  const { type, displayName, choices } = instrument;

  return (
    <div id={`${type}-board`} className="board">
      <div className="board-title">{displayName}</div>
      {choices.map((c) => (
        <Track
          key={c.name}
          choice={c}
          currentBeat={currentBeat}
          totalBeats={totalBeats}
          isPlaying={isPlaying}
        />
      ))}
    </div>
  );
}

export default Board;
