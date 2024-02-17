import { isValidLength, lengthOptions } from '../../scripts/tones';
import LengthRadio from './LengthRadio';
import './LengthModal.css';

function LengthModal({
  setModalIsVisible,
  length,
  handleLength,
  beatDivision,
}) {
  return (
    <div className="tone-square-length-modal">
      <button
        type="button"
        className="modal-close"
        onClick={() => setModalIsVisible(false)}
      >
        x
      </button>
      <p>Set Length: </p>
      <div className="length-modal-radio-btns">
        {lengthOptions
          .filter((o) => isValidLength(o, beatDivision))
          .map((o) => (
            <LengthRadio
              key={o.label}
              option={o}
              length={length}
              handleLength={handleLength}
            />
          ))}
      </div>
    </div>
  );
}

export default LengthModal;
