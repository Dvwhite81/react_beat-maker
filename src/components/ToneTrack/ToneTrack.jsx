import { useState } from 'react';
import { getSquares } from '../../scripts/helpers';
import { playTone } from '../../scripts/tones';
import './ToneTrack.css';
import ToneTrackSelectBtn from './ToneTrackSelectBtn';
import TrackControl from '../Track/TrackControl';

function ToneTrack({
  option,
  currentBeat,
  totalBeats,
  beatDivision,
  isPlaying,
  useFlats,
  toggleSelected,
}) {
  const [volume, setVolume] = useState(100);

  const { name } = option;

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

  const selectBtn = (
    <ToneTrackSelectBtn
      option={option}
      useFlats={useFlats}
      toggleSelected={toggleSelected}
      playSound={playSound}
    />
  );

  return (
    <div className="track tone-track">
      <TrackControl
        volume={volume}
        setVolume={setVolume}
        selectBtn={selectBtn}
      />
      <div className="track-squares">{squares}</div>
    </div>
  );
}

export default ToneTrack;
