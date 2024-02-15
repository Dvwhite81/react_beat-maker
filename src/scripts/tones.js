import * as Tone from 'tone';

// eslint-disable-next-line import/prefer-default-export
export const playTone = (name, length) => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(name, length);
};
