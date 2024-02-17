const DRUMS = {
  type: 'drums',
  displayName: 'Drums',
  choices: [
    {
      name: 'kick',
      displayName: 'Kick',
      options: [
        {
          soundName: 'kick-1',
          soundSrc: '/sounds/kick-1.mp3',
        },
        {
          soundName: 'kick-2',
          soundSrc: '/sounds/kick-2.mp3',
        },
        {
          soundName: 'kick-3',
          soundSrc: '/sounds/kick-3.mp3',
        },
        {
          soundName: 'kick-4',
          soundSrc: '/sounds/kick-4.mp3',
        },
        {
          soundName: 'kick-808',
          soundSrc: '/sounds/kick-808.wav',
        },
        {
          soundName: 'kick-acoustic-1',
          soundSrc: '/sounds/kick-acoustic-1.wav',
        },
        {
          soundName: 'kick-acoustic-2',
          soundSrc: '/sounds/kick-acoustic-2.wav',
        },
        {
          soundName: 'kick-big',
          soundSrc: '/sounds/kick-big.wav',
        },
        {
          soundName: 'kick-deep',
          soundSrc: '/sounds/kick-deep.wav',
        },
        {
          soundName: 'kick-gritty',
          soundSrc: '/sounds/kick-gritty.wav',
        },
        {
          soundName: 'kick-heavy',
          soundSrc: '/sounds/kick-heavy.wav',
        },
        {
          soundName: 'kick-plain',
          soundSrc: '/sounds/kick-plain.wav',
        },
        {
          soundName: 'kick-thump',
          soundSrc: '/sounds/kick-thump.wav',
        },
        {
          soundName: 'kick-tight',
          soundSrc: '/sounds/kick-tight.wav',
        },
        {
          soundName: 'kick-vinyl-1',
          soundSrc: '/sounds/kick-vinyl-1.wav',
        },
        {
          soundName: 'kick-vinyl-2',
          soundSrc: '/sounds/kick-vinyl-2.wav',
        },
        {
          soundName: 'kick-zapper',
          soundSrc: '/sounds/kick-zapper.wav',
        },
      ],
    },
    {
      name: 'snare',
      displayName: 'Snare',
      options: [
        {
          soundName: 'snare-1',
          soundSrc: '/sounds/snare-1.mp3',
        },
        {
          soundName: 'snare-2',
          soundSrc: '/sounds/snare-2.mp3',
        },
        {
          soundName: 'snare-808',
          soundSrc: '/sounds/snare-808.wav',
        },
        {
          soundName: 'snare-acoustic-1',
          soundSrc: '/sounds/snare-acoustic-1.wav',
        },
        {
          soundName: 'snare-acoustic-2',
          soundSrc: '/sounds/snare-acoustic-2.wav',
        },
        {
          soundName: 'snare-analog',
          soundSrc: '/sounds/snare-analog.wav',
        },
        {
          soundName: 'snare-block',
          soundSrc: '/sounds/snare-block.wav',
        },
        {
          soundName: 'snare-electro',
          soundSrc: '/sounds/snare-electro.wav',
        },
        {
          soundName: 'snare-lofi-1',
          soundSrc: '/sounds/snare-lofi-1.wav',
        },
        {
          soundName: 'snare-lofi-2',
          soundSrc: '/sounds/snare-lofi-2.wav',
        },
        {
          soundName: 'snare-modular',
          soundSrc: '/sounds/snare-modular.wav',
        },
        {
          soundName: 'snare-noise',
          soundSrc: '/sounds/snare-noise.wav',
        },
        {
          soundName: 'snare-pinch',
          soundSrc: '/sounds/snare-pinch.wav',
        },
        {
          soundName: 'snare-punch',
          soundSrc: '/sounds/snare-punch.wav',
        },
        {
          soundName: 'snare-smasher',
          soundSrc: '/sounds/snare-smasher.wav',
        },
        {
          soundName: 'snare-sumo',
          soundSrc: '/sounds/snare-sumo.wav',
        },
        {
          soundName: 'snare-tape',
          soundSrc: '/sounds/snare-tape.wav',
        },
        {
          soundName: 'snare-vinyl-1',
          soundSrc: '/sounds/snare-vinyl-1.wav',
        },
        {
          soundName: 'snare-vinyl-2',
          soundSrc: '/sounds/snare-vinyl-2.wav',
        },
      ],
    },
    {
      name: 'closedhat',
      displayName: 'Closed Hi-Hat',
      options: [
        {
          soundName: 'closed-hat-808',
          soundSrc: '/sounds/closed-hat-808.wav',
        },
        {
          soundName: 'closed-hat-acoustic-1',
          soundSrc: '/sounds/closed-hat-acoustic-1.wav',
        },
        {
          soundName: 'closed-hat-acoustic-2',
          soundSrc: '/sounds/closed-hat-acoustic-2.wav',
        },
        {
          soundName: 'closed-hat-analog',
          soundSrc: '/sounds/closed-hat-analog.wav',
        },
        {
          soundName: 'closed-hat-digital',
          soundSrc: '/sounds/closed-hat-digital.wav',
        },
        {
          soundName: 'closed-hat-dist-1',
          soundSrc: '/sounds/closed-hat-dist-1.wav',
        },
        {
          soundName: 'closed-hat-dist-2',
          soundSrc: '/sounds/closed-hat-dist-2.wav',
        },
        {
          soundName: 'closed-hat-electro',
          soundSrc: '/sounds/closed-hat-electro.wav',
        },
        {
          soundName: 'closed-hat-plain',
          soundSrc: '/sounds/closed-hat-plain.wav',
        },
        {
          soundName: 'closed-hat-reso',
          soundSrc: '/sounds/closed-hat-reso.wav',
        },
        {
          soundName: 'closed-hat-ring',
          soundSrc: '/sounds/closed-hat-ring.wav',
        },
      ],
    },
    {
      name: 'openhat',
      displayName: 'Open Hi-Hat',
      options: [
        {
          soundName: 'open-hat-1',
          soundSrc: '/sounds/open-hat-1.mp3',
        },
        {
          soundName: 'open-hat-808',
          soundSrc: '/sounds/open-hat-808.wav',
        },
        {
          soundName: 'open-hat-acoustic-1',
          soundSrc: '/sounds/open-hat-acoustic-1.wav',
        },
        {
          soundName: 'open-hat-analog',
          soundSrc: '/sounds/open-hat-analog.wav',
        },
        {
          soundName: 'open-hat-slick',
          soundSrc: '/sounds/open-hat-slick.wav',
        },
        {
          soundName: 'open-hat-tight',
          soundSrc: '/sounds/open-hat-tight.wav',
        },
      ],
    },
    {
      name: 'ride',
      displayName: 'Ride',
      options: [
        {
          soundName: 'ride-acoustic-1',
          soundSrc: '/sounds/ride-acoustic-1.wav',
        },
        {
          soundName: 'ride-acoustic-2',
          soundSrc: '/sounds/ride-acoustic-2.wav',
        },
      ],
    },
    {
      name: 'clap',
      displayName: 'Clap',
      options: [
        {
          soundName: 'clap-808',
          soundSrc: '/sounds/clap-808.wav',
        },
        {
          soundName: 'clap-analog',
          soundSrc: '/sounds/clap-analog.wav',
        },
        {
          soundName: 'clap-crushed',
          soundSrc: '/sounds/clap-crushed.wav',
        },
        {
          soundName: 'clap-fat',
          soundSrc: '/sounds/clap-fat.wav',
        },
        {
          soundName: 'clap-slapper',
          soundSrc: '/sounds/clap-slapper.wav',
        },
        {
          soundName: 'clap-tape',
          soundSrc: '/sounds/clap-tape.wav',
        },
      ],
    },
    {
      name: 'crash',
      displayName: 'Crash',
      options: [
        {
          soundName: 'crash-808',
          soundSrc: '/sounds/crash-808.wav',
        },
        {
          soundName: 'crash-acoustic',
          soundSrc: '/sounds/crash-acoustic.wav',
        },
        {
          soundName: 'crash-noise',
          soundSrc: '/sounds/crash-noise.wav',
        },
        {
          soundName: 'crash-tape',
          soundSrc: '/sounds/crash-tape.wav',
        },
      ],
    },
    {
      name: 'tom',
      displayName: 'Tom',
      options: [
        {
          soundName: 'tom-808',
          soundSrc: '/sounds/tom-808.wav',
        },
        {
          soundName: 'tom-acoustic-1',
          soundSrc: '/sounds/tom-acoustic-1.wav',
        },
        {
          soundName: 'tom-acoustic-2',
          soundSrc: '/sounds/tom-acoustic-2.wav',
        },
        {
          soundName: 'tom-analog',
          soundSrc: '/sounds/tom-analog.wav',
        },
        {
          soundName: 'tom-chiptune',
          soundSrc: '/sounds/tom-chiptune.wav',
        },
        {
          soundName: 'tom-fm',
          soundSrc: '/sounds/tom-fm.wav',
        },
        {
          soundName: 'tom-lofi',
          soundSrc: '/sounds/tom-lofi.wav',
        },
        {
          soundName: 'tom-rototom',
          soundSrc: '/sounds/tom-rototom.wav',
        },
        {
          soundName: 'tom-short',
          soundSrc: '/sounds/tom-short.wav',
        },
      ],
    },
  ],
};

const OCTAVES = [
  {
    name: 'octave1',
    displayName: 'Octave 1',
    options: [
      {
        name: 'C1',
        displayName: 'C 1',
        flatName: 'C1',
        displayFlatName: 'C 1',
      },
      {
        name: 'C#1',
        displayName: 'C# 1',
        flatName: 'Db1',
        displayFlatName: 'Db 1',
      },
      {
        name: 'D1',
        displayName: 'D 1',
        flatName: 'D1',
        displayFlatName: 'D 1',
      },
      {
        name: 'D#1',
        displayName: 'D# 1',
        flatName: 'Eb1',
        displayFlatName: 'Eb 1',
      },
      {
        name: 'E1',
        displayName: 'E 1',
        flatName: 'E1',
        displayFlatName: 'E 1',
      },
      {
        name: 'F1',
        displayName: 'F 1',
        flatName: 'F1',
        displayFlatName: 'F 1',
      },
      {
        name: 'F#1',
        displayName: 'F# 1',
        flatName: 'Gb1',
        displayFlatName: 'Gb 1',
      },
      {
        name: 'G1',
        displayName: 'G 1',
        flatName: 'G1',
        displayFlatName: 'G 1',
      },
      {
        name: 'G#1',
        displayName: 'G# 1',
        flatName: 'Ab1',
        displayFlatName: 'Ab 1',
      },
      {
        name: 'A1',
        displayName: 'A 1',
        flatName: 'A1',
        displayFlatName: 'A 1',
      },
      {
        name: 'A#1',
        displayName: 'A# 1',
        flatName: 'Bb1',
        displayFlatName: 'Bb 1',
      },
      {
        name: 'B1',
        displayName: 'B 1',
        flatName: 'B1',
        displayFlatName: 'B 1',
      },
    ],
  },
  {
    name: 'octave2',
    displayName: 'Octave 2',
    options: [
      {
        name: 'C2',
        displayName: 'C 2',
        flatName: 'C2',
        displayFlatName: 'C 2',
      },
      {
        name: 'C#2',
        displayName: 'C# 2',
        flatName: 'Db2',
        displayFlatName: 'Db 2',
      },
      {
        name: 'D2',
        displayName: 'D 2',
        flatName: 'D2',
        displayFlatName: 'D 2',
      },
      {
        name: 'D#2',
        displayName: 'D# 2',
        flatName: 'Eb2',
        displayFlatName: 'Eb 2',
      },
      {
        name: 'E2',
        displayName: 'E 2',
        flatName: 'E2',
        displayFlatName: 'E 2',
      },
      {
        name: 'F2',
        displayName: 'F 2',
        flatName: 'F2',
        displayFlatName: 'F 2',
      },
      {
        name: 'F#2',
        displayName: 'F# 2',
        flatName: 'Gb2',
        displayFlatName: 'Gb 2',
      },
      {
        name: 'G2',
        displayName: 'G 2',
        flatName: 'G2',
        displayFlatName: 'G 2',
      },
      {
        name: 'G#2',
        displayName: 'G# 2',
        flatName: 'Ab2',
        displayFlatName: 'Ab 2',
      },
      {
        name: 'A2',
        displayName: 'A 2',
        flatName: 'A2',
        displayFlatName: 'A 2',
      },
      {
        name: 'A#2',
        displayName: 'A# 2',
        flatName: 'Bb2',
        displayFlatName: 'Bb 2',
      },
      {
        name: 'B2',
        displayName: 'B 2',
        flatName: 'B2',
        displayFlatName: 'B 2',
      },
    ],
  },
  {
    name: 'octave3',
    displayName: 'Octave 3',
    options: [
      {
        name: 'C3',
        displayName: 'C 3',
        flatName: 'C3',
        displayFlatName: 'C 3',
      },
      {
        name: 'C#3',
        displayName: 'C# 3',
        flatName: 'Db3',
        displayFlatName: 'Db 3',
      },
      {
        name: 'D3',
        displayName: 'D 3',
        flatName: 'D3',
        displayFlatName: 'D 3',
      },
      {
        name: 'D#3',
        displayName: 'D# 3',
        flatName: 'Eb3',
        displayFlatName: 'Eb 3',
      },
      {
        name: 'E3',
        displayName: 'E 3',
        flatName: 'E3',
        displayFlatName: 'E 3',
      },
      {
        name: 'F3',
        displayName: 'F 3',
        flatName: 'F3',
        displayFlatName: 'F 3',
      },
      {
        name: 'F#3',
        displayName: 'F# 3',
        flatName: 'Gb3',
        displayFlatName: 'Gb 3',
      },
      {
        name: 'G3',
        displayName: 'G 3',
        flatName: 'G3',
        displayFlatName: 'G 3',
      },
      {
        name: 'G#3',
        displayName: 'G# 3',
        flatName: 'Ab3',
        displayFlatName: 'Ab 3',
      },
      {
        name: 'A3',
        displayName: 'A 3',
        flatName: 'A3',
        displayFlatName: 'A 3',
      },
      {
        name: 'A#3',
        displayName: 'A# 3',
        flatName: 'Bb3',
        displayFlatName: 'Bb 3',
      },
      {
        name: 'B3',
        displayName: 'B 3',
        flatName: 'B3',
        displayFlatName: 'B 3',
      },
    ],
  },
  {
    name: 'octave4',
    displayName: 'Octave 4',
    options: [
      {
        name: 'C4',
        displayName: 'C 4',
        flatName: 'C4',
        displayFlatName: 'C 4',
      },
      {
        name: 'C#4',
        displayName: 'C# 4',
        flatName: 'Db4',
        displayFlatName: 'Db 4',
      },
      {
        name: 'D4',
        displayName: 'D 4',
        flatName: 'D4',
        displayFlatName: 'D 4',
      },
      {
        name: 'D#4',
        displayName: 'D# 4',
        flatName: 'Eb4',
        displayFlatName: 'Eb 4',
      },
      {
        name: 'E4',
        displayName: 'E 4',
        flatName: 'E4',
        displayFlatName: 'E 4',
      },
      {
        name: 'F4',
        displayName: 'F 4',
        flatName: 'F4',
        displayFlatName: 'F 4',
      },
      {
        name: 'F#4',
        displayName: 'F# 4',
        flatName: 'Gb4',
        displayFlatName: 'Gb 4',
      },
      {
        name: 'G4',
        displayName: 'G 4',
        flatName: 'G4',
        displayFlatName: 'G 4',
      },
      {
        name: 'G#4',
        displayName: 'G# 4',
        flatName: 'Ab4',
        displayFlatName: 'Ab 4',
      },
      {
        name: 'A4',
        displayName: 'A 4',
        flatName: 'A4',
        displayFlatName: 'A 4',
      },
      {
        name: 'A#4',
        displayName: 'A# 4',
        flatName: 'Bb4',
        displayFlatName: 'Bb 4',
      },
      {
        name: 'B4',
        displayName: 'B 4',
        flatName: 'B4',
        displayFlatName: 'B 4',
      },
    ],
  },
  {
    name: 'octave5',
    displayName: 'Octave 5',
    options: [
      {
        name: 'C5',
        displayName: 'C 5',
        flatName: 'C5',
        displayFlatName: 'C 5',
      },
      {
        name: 'C#5',
        displayName: 'C# 5',
        flatName: 'Db5',
        displayFlatName: 'Db 5',
      },
      {
        name: 'D5',
        displayName: 'D 5',
        flatName: 'D5',
        displayFlatName: 'D 5',
      },
      {
        name: 'D#5',
        displayName: 'D# 5',
        flatName: 'Eb5',
        displayFlatName: 'Eb 5',
      },
      {
        name: 'E5',
        displayName: 'E 5',
        flatName: 'E5',
        displayFlatName: 'E 5',
      },
      {
        name: 'F5',
        displayName: 'F 5',
        flatName: 'F5',
        displayFlatName: 'F 5',
      },
      {
        name: 'F#5',
        displayName: 'F# 5',
        flatName: 'Gb5',
        displayFlatName: 'Gb 5',
      },
      {
        name: 'G5',
        displayName: 'G 5',
        flatName: 'G5',
        displayFlatName: 'G 5',
      },
      {
        name: 'G#5',
        displayName: 'G# 5',
        flatName: 'Ab5',
        displayFlatName: 'Ab 5',
      },
      {
        name: 'A5',
        displayName: 'A 5',
        flatName: 'A5',
        displayFlatName: 'A 5',
      },
      {
        name: 'A#5',
        displayName: 'A# 5',
        flatName: 'Bb5',
        displayFlatName: 'Bb 5',
      },
      {
        name: 'B5',
        displayName: 'B 5',
        flatName: 'B5',
        displayFlatName: 'B 5',
      },
    ],
  },
  {
    name: 'octave6',
    displayName: 'Octave 6',
    options: [
      {
        name: 'C6',
        displayName: 'C 6',
        flatName: 'C6',
        displayFlatName: 'C 6',
      },
      {
        name: 'C#6',
        displayName: 'C# 6',
        flatName: 'Db6',
        displayFlatName: 'Db 6',
      },
      {
        name: 'D6',
        displayName: 'D 6',
        flatName: 'D6',
        displayFlatName: 'D 6',
      },
      {
        name: 'D#6',
        displayName: 'D# 6',
        flatName: 'Eb6',
        displayFlatName: 'Eb 6',
      },
      {
        name: 'E6',
        displayName: 'E 6',
        flatName: 'E6',
        displayFlatName: 'E 6',
      },
      {
        name: 'F6',
        displayName: 'F 6',
        flatName: 'F6',
        displayFlatName: 'F 6',
      },
      {
        name: 'F#6',
        displayName: 'F# 6',
        flatName: 'Gb6',
        displayFlatName: 'Gb 6',
      },
      {
        name: 'G6',
        displayName: 'G 6',
        flatName: 'G6',
        displayFlatName: 'G 6',
      },
      {
        name: 'G#6',
        displayName: 'G# 6',
        flatName: 'Ab6',
        displayFlatName: 'Ab 6',
      },
      {
        name: 'A6',
        displayName: 'A 6',
        flatName: 'A6',
        displayFlatName: 'A 6',
      },
      {
        name: 'A#6',
        displayName: 'A# 6',
        flatName: 'Bb6',
        displayFlatName: 'Bb 6',
      },
      {
        name: 'B6',
        displayName: 'B 6',
        flatName: 'B6',
        displayFlatName: 'B 6',
      },
    ],
  },
  {
    name: 'octave7',
    displayName: 'Octave 7',
    options: [
      {
        name: 'C7',
        displayName: 'C 7',
        flatName: 'C7',
        displayFlatName: 'C 7',
      },
      {
        name: 'C#7',
        displayName: 'C# 7',
        flatName: 'Db7',
        displayFlatName: 'Db 7',
      },
      {
        name: 'D7',
        displayName: 'D 7',
        flatName: 'D7',
        displayFlatName: 'D 7',
      },
      {
        name: 'D#7',
        displayName: 'D# 7',
        flatName: 'Eb7',
        displayFlatName: 'Eb 7',
      },
      {
        name: 'E7',
        displayName: 'E 7',
        flatName: 'E7',
        displayFlatName: 'E 7',
      },
      {
        name: 'F7',
        displayName: 'F 7',
        flatName: 'F7',
        displayFlatName: 'F 7',
      },
      {
        name: 'F#7',
        displayName: 'F# 7',
        flatName: 'Gb7',
        displayFlatName: 'Gb 7',
      },
      {
        name: 'G7',
        displayName: 'G 7',
        flatName: 'G7',
        displayFlatName: 'G 7',
      },
      {
        name: 'G#7',
        displayName: 'G# 7',
        flatName: 'Ab7',
        displayFlatName: 'Ab 7',
      },
      {
        name: 'A7',
        displayName: 'A 7',
        flatName: 'A7',
        displayFlatName: 'A 7',
      },
      {
        name: 'A#7',
        displayName: 'A# 7',
        flatName: 'Bb7',
        displayFlatName: 'Bb 7',
      },
      {
        name: 'B7',
        displayName: 'B 7',
        flatName: 'B7',
        displayFlatName: 'B 7',
      },
    ],
  },
  {
    name: 'octave8',
    displayName: 'Octave 8',
    options: [
      {
        name: 'C8',
        displayName: 'C 8',
        flatName: 'C8',
        displayFlatName: 'C 8',
      },
      {
        name: 'C#8',
        displayName: 'C# 8',
        flatName: 'Db8',
        displayFlatName: 'Db 8',
      },
      {
        name: 'D8',
        displayName: 'D 8',
        flatName: 'D8',
        displayFlatName: 'D 8',
      },
      {
        name: 'D#8',
        displayName: 'D# 8',
        flatName: 'Eb8',
        displayFlatName: 'Eb 8',
      },
      {
        name: 'E8',
        displayName: 'E 8',
        flatName: 'E8',
        displayFlatName: 'E 8',
      },
      {
        name: 'F8',
        displayName: 'F 8',
        flatName: 'F8',
        displayFlatName: 'F 8',
      },
      {
        name: 'F#8',
        displayName: 'F# 8',
        flatName: 'Gb8',
        displayFlatName: 'Gb 8',
      },
      {
        name: 'G8',
        displayName: 'G 8',
        flatName: 'G8',
        displayFlatName: 'G 8',
      },
      {
        name: 'G#8',
        displayName: 'G# 8',
        flatName: 'Ab8',
        displayFlatName: 'Ab 8',
      },
      {
        name: 'A8',
        displayName: 'A 8',
        flatName: 'A8',
        displayFlatName: 'A 8',
      },
      {
        name: 'A#8',
        displayName: 'A# 8',
        flatName: 'Bb8',
        displayFlatName: 'Bb 8',
      },
      {
        name: 'B8',
        displayName: 'B 8',
        flatName: 'B8',
        displayFlatName: 'B 8',
      },
    ],
  },
];

const INSTRUMENTS = [
  {
    type: 'bass',
    displayName: 'Bass',
    choices: [
      OCTAVES[0],
      OCTAVES[1],
      OCTAVES[2],
      OCTAVES[3],
      OCTAVES[4],
    ],
  },
  {
    type: 'chords',
    displayName: 'Chords',
    choices: [
      OCTAVES[1],
      OCTAVES[2],
      OCTAVES[3],
      OCTAVES[4],
      OCTAVES[5],
      OCTAVES[6],
      OCTAVES[7],
    ],
  },
  {
    type: 'melody',
    displayName: 'Melody',
    choices: [
      OCTAVES[1],
      OCTAVES[2],
      OCTAVES[3],
      OCTAVES[4],
      OCTAVES[5],
      OCTAVES[6],
      OCTAVES[7],
    ],
  },
];

export { DRUMS, INSTRUMENTS };
