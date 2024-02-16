import ModalToneSection from './ModalToneSection';
import './ToneModal.css';

function ToneModal({
  choices,
  modalVisible,
  setModalVisible,
  useFlats,
  setUseFlats,
  selectedTones,
  toggleSelected,
}) {
  return (
    <div
      id="tone-modal"
      className={`modal ${!modalVisible && 'hidden'}`}
    >
      <button
        type="button"
        className="modal-close"
        onClick={() => setModalVisible(false)}
      >
        x
      </button>
      <button
        type="button"
        className="modal-use-flats-btn"
        onClick={() => setUseFlats((prev) => !prev)}
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
        onClick={() => setModalVisible(false)}
      >
        Add Tones
      </button>
    </div>
  );
}

export default ToneModal;
