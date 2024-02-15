import { useState } from 'react';
import TrackToneBtn from '../Tones/TrackToneBtn';
import Track from '../Track/Track';
import ToneModal from '../Tones/ToneModal';
import './Board.css';
import ToneTrack from '../Tones/ToneTrack';

function Board({ instrument, currentBeat, totalBeats, isPlaying }) {
  const [displayClass, setDisplayClass] = useState(' hidden');
  const [toneTracks, setToneTracks] = useState([]);

  const { type, choices } = instrument;

  const openModal = () => {
    setDisplayClass('');
  };

  const closeModal = () => {
    setDisplayClass(' hidden');
  };

  const createToneTrack = (option) => {
    console.log('addToneTrack option:', option);
    return (
      <ToneTrack
        key={option.name}
        option={option}
        currentBeat={currentBeat}
        totalBeats={totalBeats}
        isPlaying={isPlaying}
      />
    );
  };

  return (
    <div id={`${type}-board`} className="board">
      {type !== 'drums' ? (
        <>
          <TrackToneBtn openModal={openModal} />
          <ToneModal
            choices={choices}
            displayClass={displayClass}
            createToneTrack={createToneTrack}
            setToneTracks={setToneTracks}
            closeModal={closeModal}
          />
          {toneTracks}
        </>
      ) : (
        choices.map((c) => (
          <Track
            key={c.name}
            choice={c}
            currentBeat={currentBeat}
            totalBeats={totalBeats}
            isPlaying={isPlaying}
          />
        ))
      )}
    </div>
  );
}

export default Board;
