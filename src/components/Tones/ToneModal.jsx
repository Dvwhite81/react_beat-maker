import { useState } from 'react';
import ModalToneSection from './ModalToneSection';
import './ToneModal.css';

function ToneModal({
  choices,
  displayClass,
  createToneTrack,
  setToneTracks,
  closeModal,
}) {
  const [selectedTones, setSelectedTones] = useState([]);

  const toggleSelected = (option) => {
    if (selectedTones.includes(option)) {
      setSelectedTones(selectedTones.filter((t) => t !== option));
    } else {
      setSelectedTones(selectedTones.concat(option));
    }
  };

  const handleSubmit = () => {
    const newTracks = [];
    selectedTones.forEach((option) => {
      const toneTrack = createToneTrack(option);
      newTracks.push(toneTrack);
    });
    setToneTracks(newTracks);
    setSelectedTones([]);
    closeModal();
  };

  return (
    <div id="tone-modal" className={`modal${displayClass}`}>
      <button
        type="button"
        className="modal-close"
        onClick={closeModal}
      >
        x
      </button>
      <div className="modal-content">
        <p className="modal-content-label">Select tones:</p>
        <div className="modal-content-div">
          {choices.map((c) => (
            <ModalToneSection
              key={c.name}
              choice={c}
              toggleSelected={toggleSelected}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="modal-submit"
        onClick={handleSubmit}
      >
        Add Tones
      </button>
    </div>
  );
}

export default ToneModal;
