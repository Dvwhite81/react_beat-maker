import { useState } from 'react';
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
  const [volumeClass, setVolumeClass] = useState('');
  const [muteClass, setMuteClass] = useState(' hidden');
  const [sliderClass, setSliderClass] = useState(' hidden');
  const [volume, setVolume] = useState(100);

  const { name, displayName, displayFlatName } = option;

  const toggleMute = () => {
    if (volumeClass === ' hidden') {
      setVolumeClass('');
      setMuteClass(' hidden');
      setVolume(100);
    } else {
      setVolumeClass(' hidden');
      setMuteClass('');
      setVolume(0);
    }
  };

  const playSound = (length, volumeValue) => {
    console.log('playSound length:', length);
    console.log('playSound volumeValue:', volumeValue);
    playTone(name, `${length}n`, volume);
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
      <div
        className="track-control"
        onMouseLeave={() => setSliderClass(' hidden')}
      >
        <button
          type="button"
          className="btn mute-btn"
          onClick={toggleMute}
          onMouseEnter={() => setSliderClass('')}
        >
          <img
            className={`icon volume-icon${volumeClass}`}
            src="/images/volume-icon.png"
            alt="volume icon"
          />
          <img
            className={`icon mute-icon${muteClass}`}
            src="/images/mute-icon.png"
            alt="mute icon"
          />
        </button>
        <div className={`track-volume-div${sliderClass}`}>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={({ target }) => setVolume(target.value)}
          />
        </div>
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
