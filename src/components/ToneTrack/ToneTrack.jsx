import { getSquares } from '../../scripts/helpers';
import { playTone } from '../../scripts/tones';
import './ToneTrack.css';

function ToneTrack({
  option,
  currentBeat,
  totalBeats,
  isPlaying,
  useFlats,
  toggleSelected,
}) {
  const { name, displayName, displayFlatName } = option;
  console.log('tonetrack useFlats:', useFlats);
  console.log('tonetrack option:', option);

  const playSound = () => {
    playTone(name, '8n');
  };

  const isTone = true;
  const squares = getSquares(
    isTone,
    playSound,
    totalBeats,
    currentBeat,
    isPlaying,
  );

  return (
    <div className="track tone-track">
      <div className="track-control">
        <button
          type="button"
          className="btn track-select-btn"
          onClick={playSound}
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
