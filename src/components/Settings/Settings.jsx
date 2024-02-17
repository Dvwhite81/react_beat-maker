import { isValidNum, isValidTempo } from '../../scripts/helpers';
import SettingsInput from './SettingsInput';
import SettingsInfo from './SettingsInfo';
import './Settings.css';

function Settings({
  isPlaying,
  tempo,
  setTempo,
  numMeasures,
  setNumMeasures,
  numBeats,
  setNumBeats,
  beatDivision,
  setBeatDivision,
  setTotalBeats,
  setTiming,
  stop,
}) {
  const updateTempo = (value) => {
    const newTempo = parseInt(value, 10);
    if (!isValidTempo(newTempo)) return;

    setTempo(newTempo);
    setTiming(60000 / newTempo / beatDivision);

    if (isPlaying) stop();
  };

  const updateNumMeasures = (value) => {
    const newNumMeasures = parseInt(value, 10);

    if (!isValidNum(newNumMeasures)) return;

    setNumMeasures(newNumMeasures);
    setTotalBeats(newNumMeasures * numBeats * beatDivision);
    if (isPlaying) stop();
  };

  const updateNumBeats = (value) => {
    const newNumBeats = parseInt(value, 10);

    if (!isValidNum(newNumBeats)) return;

    setNumBeats(newNumBeats);
    setTotalBeats(numMeasures * newNumBeats * beatDivision);
    if (isPlaying) stop();
  };

  const updateBeatDivision = (value) => {
    const newBeatDivision = parseInt(value, 10);

    if (!isValidNum(newBeatDivision)) return;

    setBeatDivision(newBeatDivision);
    setTotalBeats(numMeasures * numBeats * newBeatDivision);
    setTiming(60000 / tempo / newBeatDivision);
    if (isPlaying) stop();
  };

  const settings = [
    {
      type: 'tempo',
      labelText: 'Tempo: ',
      value: tempo,
      setValue: updateTempo,
      extraText: false,
    },
    {
      type: 'numMeasures',
      labelText: 'Measures: ',
      value: numMeasures,
      setValue: updateNumMeasures,
      extraText: false,
    },
    {
      type: 'numBeats',
      labelText: 'Beats: ',
      value: numBeats,
      setValue: updateNumBeats,
      extraText: false,
    },
    {
      type: 'beatDivision',
      labelText: 'Division: ',
      value: beatDivision,
      setValue: updateBeatDivision,
      extraText: true,
    },
  ];
  return (
    <div id="settings">
      {settings.map((s) => (
        <SettingsInput
          key={s.type}
          type={s.type}
          labelText={s.labelText}
          value={s.value}
          setValue={s.setValue}
          extraText={s.extraText}
        />
      ))}
      <SettingsInfo />
    </div>
  );
}

export default Settings;
