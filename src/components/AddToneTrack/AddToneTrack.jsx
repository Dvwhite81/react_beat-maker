import { useState } from 'react';
import TrackToneBtn from './TrackToneBtn';
import ToneModal from './ToneModal';
import ToneTrack from '../ToneTrack/ToneTrack';

function AddToneTrack({
  choices,
  currentBeat,
  totalBeats,
  isPlaying,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTones, setSelectedTones] = useState([]);
  const [useFlats, setUseFlats] = useState(false);

  const toggleSelected = (option) => {
    if (selectedTones.includes(option)) {
      setSelectedTones(selectedTones.filter((t) => t !== option));
    } else {
      setSelectedTones([...selectedTones, option]);
    }
  };

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
          isPlaying={isPlaying}
          useFlats={useFlats}
          toggleSelected={toggleSelected}
        />
      ))}
    </>
  );
}

export default AddToneTrack;
