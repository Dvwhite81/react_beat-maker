import * as Tone from 'tone';

function ModalToneBtn({ option, toggleSelected }) {
  const { name, displayName } = option;

  const playTone = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(name, '8n');
  };

  return (
    <button
      type="button"
      className="btn modal-tone-btn"
      onClick={playTone}
    >
      <span className="modal-tone-btn-span">
        <input
          type="checkbox"
          onChange={() => toggleSelected(option)}
        />
      </span>
      {displayName}
    </button>
  );
}

export default ModalToneBtn;
