import { useState } from 'react';
import TrackToneBtn from './TrackToneBtn';
import ToneModal from './ToneModal';
import ToneTrack from '../ToneTrack/ToneTrack';

function AddToneTrack({
  choices,
  currentBeat,
  totalBeats,
  beatDivision,
  isPlaying,
  selectedTones,
  toggleSelected,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [useFlats, setUseFlats] = useState(false);

  return (
    <>
      <TrackToneBtn setModalVisible={setModalVisible} />
      <ToneModal
        choices={choices}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        useFlats={useFlats}
        setUseFlats={setUseFlats}
        selectedTones={selectedTones}
        toggleSelected={toggleSelected}
      />
      {selectedTones.map((o) => (
        <ToneTrack
          key={o.name}
          option={o}
          currentBeat={currentBeat}
          totalBeats={totalBeats}
          beatDivision={beatDivision}
          isPlaying={isPlaying}
          useFlats={useFlats}
          toggleSelected={toggleSelected}
        />
      ))}
    </>
  );
}

export default AddToneTrack;
