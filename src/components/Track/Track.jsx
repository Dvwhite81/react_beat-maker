import { useState } from 'react';
import { getSquares } from '../../scripts/helpers';
import './Track.css';

function Track({
  choice,
  currentBeat,
  totalBeats,
  beatDivision,
  isPlaying,
}) {
  const { name, displayName, options } = choice;
  const [soundToPlay, setSoundToPlay] = useState(options[0].soundSrc);
  const [selectClass, setSelectClass] = useState(' hidden');
  const [volumeClass, setVolumeClass] = useState('');
  const [muteClass, setMuteClass] = useState(' hidden');
  const [sliderClass, setSliderClass] = useState(' hidden');
  const [volume, setVolume] = useState(100);

  const toggleSelectOpen = () => {
    if (selectClass === ' hidden') {
      setSelectClass('');
    } else {
      setSelectClass(' hidden');
    }
  };

  const toggleMute = () => {
    if (volumeClass === ' hidden') {
      setVolumeClass('');
      setMuteClass(' hidden');
      setVolume(1);
    } else {
      setVolumeClass(' hidden');
      setMuteClass('');
      setVolume(0);
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
    sound.volume = volume / 100;
    sound.play();
  };

  const isTone = false;

  const squares = getSquares(
    isTone,
    playSound,
    currentBeat,
    totalBeats,
    beatDivision,
    isPlaying,
  );

  return (
    <div id={`${name}-track`} className="track">
      <div
        id={`${name}-track-control`}
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
          onClick={toggleSelectOpen}
        >
          <p className="track-label">{displayName}</p>
        </button>
        <ul className={`select track-select${selectClass}`}>
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
