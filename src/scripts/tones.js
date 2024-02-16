import * as Tone from 'tone';

// eslint-disable-next-line import/prefer-default-export
export const playTone = (name, length) => {
  console.log('playTone length:', length);
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(name, length);
};

export const lengthOptions = [
  {
    class: 'whole-note',
    label: 'Whole Note',
    value: 1,
  },
  {
    class: 'half-note',
    label: 'Half Note',
    value: 2,
  },
  {
    class: 'quarter-note',
    label: 'Quarter Note',
    value: 4,
  },
  {
    class: 'eighth-note',
    label: 'Eighth Note',
    value: 8,
  },
  {
    class: 'sixteenth-note',
    label: 'Sixteenth Note',
    value: 16,
  },
];

export const getInitialLength = (beatDivision) => {
  let length;
  if (beatDivision === 4) {
    length = 16;
  }
  if (beatDivision === 2) {
    length = 8;
  }
  if (beatDivision === 1) {
    length = 4;
  }

  return length;
};

export const isValidLength = (option, beatDivision) => {
  const { value } = option;

  /*
  return (
    beatDivision === 4 ||
    (beatDivision === 2 && value !== 16) ||
    (beatDivision === 1 && value !== 16 && value !== 8)
  );
  */

  if (beatDivision === 4) {
    return true;
  }
  if (beatDivision === 2) {
    return value !== 16;
  }
  if (beatDivision === 1) {
    return value !== 16 && value !== 8;
  }
  return true;
};

export const getNewWidth = (value, beatLength) => {
  let width;

  if (beatLength / value === 2) {
    width = 'two-width';
  }
  if (beatLength / value === 4) {
    width = 'four-width';
  }
  if (beatLength / value === 8) {
    width = 'eight-width';
  }
  if (beatLength / value === 16) {
    width = 'sixteen-width';
  }

  return width;
};
