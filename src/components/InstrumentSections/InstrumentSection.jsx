import { useEffect, useState } from 'react';
import Board from '../Board/Board';
import BoardTitle from '../BoardTitle/BoardTitle';
import './InstrumentSection.css';

function InstrumentSection({
  instrument,
  currentBeat,
  totalBeats,
  isPlaying,
  oneIsSelected,
  selectedType,
  setSelectedType,
  index,
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { type } = instrument;
  const leftPosition = `${index * 30}vw`;

  useEffect(() => {
    if (oneIsSelected && selectedType !== type) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [oneIsSelected, selectedType, type]);

  if (!isHidden)
    return (
      <div
        id={`${type}-section`}
        className={`instrument-section ${
          isMinimized && 'minimized-section'
        } ${isSelected && 'selected-section'}`}
        style={{ left: leftPosition }}
      >
        <BoardTitle
          instrument={instrument}
          isMinimized={isMinimized}
          setIsMinimized={setIsMinimized}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setSelectedType={setSelectedType}
        />
        <Board
          instrument={instrument}
          currentBeat={currentBeat}
          totalBeats={totalBeats}
          isPlaying={isPlaying}
        />
      </div>
    );
}

export default InstrumentSection;
