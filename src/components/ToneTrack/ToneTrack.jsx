import { getSquares } from '../../scripts/helpers';
import { playTone } from '../../scripts/tones';
import './ToneTrack.css';

function ToneTrack({
  option,
  currentBeat,
  totalBeats,
  beatDivision,
  isPlaying,
  useFlats,
  toggleSelected,
}) {
  const { name, displayName, displayFlatName } = option;
  console.log('option:', option);

  const playSound = (length) => {
    console.log('playSound length:', length);
    playTone(name, `${length}n`);
  };

  const isTone = true;
  const squares = getSquares(
    isTone,
    playSound,
    currentBeat,
    totalBeats,
    beatDivision,
    isPlaying,
  );

  return (
    <div className="track tone-track">
      <div className="track-control">
        <button
          type="button"
          className="btn track-select-btn"
          onClick={() => playSound(8)}
        >
          <p className="track-label">
            {useFlats ? displayFlatName : displayName}
          </p>
          <span
            className="remove-track-span"
            onClick={() => toggleSelected(option)}
          >
            x
          </span>
        </button>
      </div>
      <div className="track-squares">{squares}</div>
    </div>
  );
}

export default ToneTrack;
