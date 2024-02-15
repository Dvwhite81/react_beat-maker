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
  const [minimizeClass, setMinimizeClass] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [hiddenClass, setHiddenClass] = useState('');

  const { type } = instrument;
  const leftPosition = `${index * 30}vw`;

  const toggleSectionMinimized = () => {
    if (minimizeClass === ' minimized-section') {
      setMinimizeClass('');
    } else {
      setMinimizeClass(' minimized-section');
    }
  };

  const toggleSectionSelected = () => {
    if (selectedClass === ' selected-section') {
      setSelectedClass('');
      setSelectedType(null);
    } else {
      setSelectedClass(' selected-section');
      setSelectedType(type);
    }
  };

  useEffect(() => {
    if (oneIsSelected && selectedType !== type) {
      setHiddenClass(' hidden');
    } else {
      setHiddenClass('');
    }
  }, [oneIsSelected, selectedType, type]);

  return (
    <div
      id={`${type}-section`}
      className={`instrument-section${minimizeClass}${selectedClass}${hiddenClass}`}
      style={{ left: leftPosition }}
    >
      <BoardTitle
        instrument={instrument}
        toggleSectionMinimized={toggleSectionMinimized}
        toggleSectionSelected={toggleSectionSelected}
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
