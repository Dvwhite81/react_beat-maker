import ModalToneSection from './ModalToneSection';
import './ToneModal.css';

function ToneModal({
  choices,
  displayClass,
  closeModal,
  useFlats,
  toggleFlats,
  selectedTones,
  toggleSelected,
}) {
  return (
    <div id="tone-modal" className={`modal${displayClass}`}>
      <button
        type="button"
        className="modal-close"
        onClick={closeModal}
      >
        x
      </button>
      <button
        type="button"
        className="modal-use-flats-btn"
        onClick={toggleFlats}
      >
        {useFlats ? 'Use Sharps' : 'Use Flats'}
      </button>
      <div className="modal-content">
        <p className="modal-content-label">Select tones:</p>
        <div className="modal-content-div">
          {choices.map((c) => (
            <ModalToneSection
              key={c.name}
              choice={c}
              selectedTones={selectedTones}
              toggleSelected={toggleSelected}
              useFlats={useFlats}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="modal-submit"
        onClick={closeModal}
      >
        Add Tones
      </button>
    </div>
  );
}

export default ToneModal;
