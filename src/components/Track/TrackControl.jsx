import { useState } from 'react';

function TrackControl({ volume, setVolume, selectBtn }) {
  const [volumeClass, setVolumeClass] = useState('');
  const [muteClass, setMuteClass] = useState(' hidden');
  const [sliderClass, setSliderClass] = useState(' hidden');

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

  return (
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
      {selectBtn}
    </div>
  );
}

export default TrackControl;
