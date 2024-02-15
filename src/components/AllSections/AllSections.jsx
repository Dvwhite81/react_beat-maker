import { useEffect, useState } from 'react';
import { DRUMS, INSTRUMENTS } from '../../scripts/instruments';
import InstrumentSection from '../InstrumentSections/InstrumentSection';
import './AllSections.css';

function AllSections({ isPlaying, currentBeat, totalBeats }) {
  const [oneIsSelected, setOneIsSelected] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    if (selectedType) {
      setOneIsSelected(true);
    } else {
      setOneIsSelected(false);
    }
  }, [selectedType]);

  return (
    <div id="all-instruments">
      <InstrumentSection
        instrument={DRUMS}
        currentBeat={currentBeat}
        totalBeats={totalBeats}
        isPlaying={isPlaying}
        oneIsSelected={oneIsSelected}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        index={0}
      />
      {INSTRUMENTS.map((i, index) => (
        <InstrumentSection
          key={i.type}
          instrument={i}
          currentBeat={currentBeat}
          totalBeats={totalBeats}
          isPlaying={isPlaying}
          oneIsSelected={oneIsSelected}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          index={index + 1}
        />
      ))}
    </div>
  );
}

export default AllSections;
