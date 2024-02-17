import { useState } from 'react';
import { getSquares } from '../../scripts/helpers';
import TrackSelectBtn from './TrackSelectBtn';
import './Track.css';
import TrackControl from './TrackControl';

function Track({
  choice,
  currentBeat,
  totalBeats,
  beatDivision,
  isPlaying,
}) {
  const { name, options } = choice;
  const [soundToPlay, setSoundToPlay] = useState(options[0].soundSrc);
  const [volume, setVolume] = useState(100);

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

  const selectBtn = (
    <TrackSelectBtn choice={choice} setSoundToPlay={setSoundToPlay} />
  );

  return (
    <div id={`${name}-track`} className="track">
      <TrackControl
        volume={volume}
        setVolume={setVolume}
        selectBtn={selectBtn}
      />
      <div className="track-squares">{squares}</div>
    </div>
  );
}

export default Track;
