import { useState } from 'react';
import Square from './Square';

function Track({ choice, currentBeat, numBeats, isPlaying }) {
  const { name, displayName, options } = choice;
  const [soundToPlay, setSoundToPlay] = useState(options[0].soundSrc);

  console.log('options:', options);
  console.log('soundToPlay:', soundToPlay);

  const squares = getSquares(
    soundToPlay,
    numBeats,
    currentBeat,
    isPlaying,
  );

  const handleSelect = (value) => {
    console.log('value:', value);
  };

  return (
    <div id={`${name}-track`} className="track">
      <div className="track-control">
        <div className="track-title">{displayName}</div>
        <select
          className="track-select"
          onChange={({ target }) => handleSelect(target.value)}
        >
          {options.map((o) => (
            <option key={o.soundName} value={o.soundSrc}>
              {o.soundName}
            </option>
          ))}
        </select>
      </div>
      <div className="track-squares">{squares}</div>
    </div>
  );
}

const getSquares = (
  soundToPlay,
  numBeats,
  currentBeat,
  isPlaying,
) => {
  const squares = [];

  for (let i = 1; i <= numBeats; i++) {
    const square = (
      <Square
        key={i}
        index={i}
        soundToPlay={soundToPlay}
        currentBeat={currentBeat}
        isPlaying={isPlaying}
      />
    );
    squares.push(square);
  }
  return squares;
};

export default Track;
