import Square from '../Square/Square';

function ToneSquare({ index, playSound, currentBeat, isPlaying }) {
  return (
    <div className="tone-square">
      <Square
        index={index}
        playSound={playSound}
        currentBeat={currentBeat}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default ToneSquare;
