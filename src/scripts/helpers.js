import Square from '../components/Square/Square';
import ToneSquare from '../components/ToneTrack/ToneSquare';

const isValidTempo = (tempo) => {
  if (tempo <= 0 || tempo >= 300 || Number.isNaN(tempo)) {
    return false;
  }
  return true;
};

const isValidNum = (num) => {
  if (num <= 0 || num > 4 || Number.isNaN(num)) {
    return false;
  }
  return true;
};

const getSquares = (
  isTone,
  playSound,
  currentBeat,
  totalBeats,
  beatDivision,
  isPlaying,
) => {
  const squares = [];

  for (let i = 1; i <= totalBeats; i++) {
    const square = isTone ? (
      <ToneSquare
        key={i}
        index={i}
        playSound={playSound}
        currentBeat={currentBeat}
        beatDivision={beatDivision}
        isPlaying={isPlaying}
      />
    ) : (
      <Square
        key={i}
        index={i}
        playSound={playSound}
        currentBeat={currentBeat}
        isPlaying={isPlaying}
      />
    );
    squares.push(square);
  }
  return squares;
};

export { getSquares, isValidNum, isValidTempo };
