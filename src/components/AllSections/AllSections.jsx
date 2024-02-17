import { useEffect, useState } from 'react';
import { DRUMS, INSTRUMENTS } from '../../scripts/instruments';
import InstrumentSection from '../InstrumentSections/InstrumentSection';
import './AllSections.css';

function AllSections({
  isPlaying,
  currentBeat,
  totalBeats,
  beatDivision,
}) {
  const [oneIsSelected, setOneIsSelected] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [numMinimized, setNumMinimized] = useState(0);
  const [gridStyle, setGridStyle] = useState({
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 40vh)',
  });

  useEffect(() => {
    if (selectedType) {
      setOneIsSelected(true);
    } else {
      setOneIsSelected(false);
    }
  }, [selectedType]);

  useEffect(() => {
    if (numMinimized === 2) {
      setGridStyle({
        gridTemplateColumns: 'none',
        gridTemplateRows: 'repeat(2, 40vh)',
      });
    } else {
      setGridStyle({
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 40vh)',
      });
    }
  }, [numMinimized]);

  return (
    <div id="all-instruments" style={gridStyle}>
      <InstrumentSection
        instrument={DRUMS}
        currentBeat={currentBeat}
        totalBeats={totalBeats}
        beatDivision={beatDivision}
        isPlaying={isPlaying}
        oneIsSelected={oneIsSelected}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        numMinimized={numMinimized}
        setNumMinimized={setNumMinimized}
        index={0}
      />
      {INSTRUMENTS.map((i, index) => (
        <InstrumentSection
          key={i.type}
          instrument={i}
          currentBeat={currentBeat}
          totalBeats={totalBeats}
          beatDivision={beatDivision}
          isPlaying={isPlaying}
          oneIsSelected={oneIsSelected}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          numMinimized={numMinimized}
          setNumMinimized={setNumMinimized}
          index={index + 1}
        />
      ))}
    </div>
  );
}

export default AllSections;
