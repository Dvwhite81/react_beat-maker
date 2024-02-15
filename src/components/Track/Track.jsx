import { useState } from 'react';
import { getSquares } from '../../scripts/helpers';
import './Track.css';

function Track({ choice, currentBeat, totalBeats, isPlaying }) {
  const { name, displayName, options } = choice;
  const [soundToPlay, setSoundToPlay] = useState(options[0].soundSrc);
  const [selectClass, setSelectClass] = useState('hidden');

  const toggleSelectOpen = () => {
    if (selectClass === 'hidden') {
      setSelectClass('');
    } else {
      setSelectClass('hidden');
    }
  };

  const handleSelectSound = (value) => {
    setSoundToPlay(value);
    toggleSelectOpen();
  };

  const playSound = () => {
    // eslint-disable-next-line no-undef
    const sound = new Audio();
    sound.src = soundToPlay;
    sound.play();
  };

  const isTone = false;

  const squares = getSquares(
    isTone,
    playSound,
    totalBeats,
    currentBeat,
    isPlaying,
  );

  return (
    <div id={`${name}-track`} className="track">
      <div id={`${name}-track-control`} className="track-control">
        <button
          type="button"
          className="btn track-select-btn"
          onClick={toggleSelectOpen}
        >
          <p className="track-label">{displayName}</p>
        </button>
        <ul className={`select track-select ${selectClass}`}>
          {options.map((o) => (
            <li key={o.soundName} className="select-option">
              <button
                type="button"
                className="select-option-btn"
                value={o.soundSrc}
                onClick={({ target }) =>
                  handleSelectSound(target.value)
                }
              >
                {o.soundName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="track-squares">{squares}</div>
    </div>
  );
}

export default Track;
