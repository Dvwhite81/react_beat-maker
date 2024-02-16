import { useState } from 'react';
import Square from '../Square/Square';
import {
  getInitialLength,
  getNewWidth,
  isValidLength,
  lengthOptions,
} from '../../scripts/tones';

function ToneSquare({
  index,
  playSound,
  currentBeat,
  beatDivision,
  isPlaying,
}) {
  const [btnIsVisible, setBtnIsVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [length, setLength] = useState(
    getInitialLength(beatDivision),
  );
  const [widthClass, setWidthClass] = useState('');

  const beatLength = beatDivision * 4;

  const handleLength = (value) => {
    value = parseInt(value, 10);
    console.log('handleLength value:', value);
    setLength(value);
    if (value !== beatLength) {
      console.log('value !== beatLength');
      const newWidth = getNewWidth(value, beatLength);
      console.log('newWidth:', newWidth);
      setWidthClass(newWidth);
    }
  };

  return (
    <>
      {modalIsVisible && (
        <LengthModal
          setModalIsVisible={setModalIsVisible}
          length={length}
          handleLength={handleLength}
          beatDivision={beatDivision}
        />
      )}
      <div
        className={`tone-square ${widthClass}`}
        onMouseEnter={() => setBtnIsVisible(true)}
        onMouseLeave={() => setBtnIsVisible(false)}
      >
        {btnIsVisible && (
          <ShowModalBtn setModalIsVisible={setModalIsVisible} />
        )}
        <Square
          index={index}
          playSound={() => playSound(length)}
          currentBeat={currentBeat}
          isPlaying={isPlaying}
        />
      </div>
    </>
  );
}

function ShowModalBtn({ setModalIsVisible }) {
  return (
    <button
      type="button"
      className="show-length-btn"
      onClick={() => setModalIsVisible(true)}
    >
      <img
        className="icon question-icon"
        src="/images/question-icon.png"
        alt="question icon"
      />
    </button>
  );
}

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

function LengthRadio({ option, length, handleLength }) {
  const [checked, setChecked] = useState(length === value);
  const { label, value } = option;

  const isChecked = length === value || checked;

  return (
    <label className="tone-length-radio" htmlFor="whole-note">
      {label}
      <input
        type="radio"
        name="whole-note"
        value={value}
        onChange={({ target }) => {
          handleLength(target.value);
          setChecked(true);
        }}
        checked={isChecked}
      />
    </label>
  );
}

export default ToneSquare;
