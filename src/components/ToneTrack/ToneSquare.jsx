import { useState } from 'react';
import { getInitialLength, getNewWidth } from '../../scripts/tones';
import LengthModal from '../ToneLengthModal/LengthModal';
import ShowModalBtn from '../ToneLengthModal/ShowModalBtn';
import Square from '../Square/Square';
import './ToneSquare.css';

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
    setLength(value);
    if (value !== beatLength) {
      const newWidth = getNewWidth(value, beatLength);
      setWidthClass(newWidth);
    } else {
      setWidthClass('');
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

export default ToneSquare;
