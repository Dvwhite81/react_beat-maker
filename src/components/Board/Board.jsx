import { useState } from 'react';
import TrackToneBtn from '../ToneTrack/TrackToneBtn';
import Track from '../Track/Track';
import ToneModal from '../ToneModal/ToneModal';
import './Board.css';
import ToneTrack from '../ToneTrack/ToneTrack';

function Board({ instrument, currentBeat, totalBeats, isPlaying }) {
  const [displayClass, setDisplayClass] = useState(' hidden');
  const [selectedTones, setSelectedTones] = useState([]);
  const [useFlats, setUseFlats] = useState(false);

  const { type, choices } = instrument;

  const openModal = () => {
    setDisplayClass('');
  };

  const closeModal = () => {
    setDisplayClass(' hidden');
  };

  const toggleFlats = () => {
    setUseFlats((prev) => !prev);
  };

  const toggleSelected = (option) => {
    if (selectedTones.includes(option)) {
      setSelectedTones(selectedTones.filter((t) => t !== option));
    } else {
      setSelectedTones(selectedTones.concat(option));
    }
  };

  return (
    <div id={`${type}-board`} className="board">
      {type !== 'drums' ? (
        <>
          <TrackToneBtn openModal={openModal} />
          <ToneModal
            choices={choices}
            displayClass={displayClass}
            closeModal={closeModal}
            useFlats={useFlats}
            toggleFlats={toggleFlats}
            selectedTones={selectedTones}
            toggleSelected={toggleSelected}
          />
          {selectedTones.map((o) => (
            <ToneTrack
              key={o.name}
              option={o}
              currentBeat={currentBeat}
              totalBeats={totalBeats}
              isPlaying={isPlaying}
              useFlats={useFlats}
              toggleSelected={toggleSelected}
            />
          ))}
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
