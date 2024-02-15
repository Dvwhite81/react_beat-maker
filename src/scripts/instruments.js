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

const INSTRUMENTS = [
  {
    type: 'bass',
    displayName: 'Bass',
    choices: [
      {
        name: 'octave1',
        displayName: 'Octave 1',
        options: [
          {
            name: 'C1',
            displayName: 'C 1',
          },
          {
            name: 'C#1',
            displayName: 'C# 1',
          },
          {
            name: 'D1',
            displayName: 'D 1',
          },
          {
            name: 'D#1',
            displayName: 'D# 1',
          },
          {
            name: 'E1',
            displayName: 'E 1',
          },
          {
            name: 'F1',
            displayName: 'F 1',
          },
          {
            name: 'F#1',
            displayName: 'F# 1',
          },
          {
            name: 'G1',
            displayName: 'G 1',
          },
          {
            name: 'G#1',
            displayName: 'G# 1',
          },
          {
            name: 'A1',
            displayName: 'A 1',
          },
          {
            name: 'A#1',
            displayName: 'A# 1',
          },
          {
            name: 'B1',
            displayName: 'B 1',
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
          },
          {
            name: 'C#2',
            displayName: 'C# 2',
          },
          {
            name: 'D2',
            displayName: 'D 2',
          },
          {
            name: 'D#2',
            displayName: 'D# 2',
          },
          {
            name: 'E2',
            displayName: 'E 2',
          },
          {
            name: 'F2',
            displayName: 'F 2',
          },
          {
            name: 'F#2',
            displayName: 'F# 2',
          },
          {
            name: 'G2',
            displayName: 'G 2',
          },
          {
            name: 'G#2',
            displayName: 'G# 2',
          },
          {
            name: 'A2',
            displayName: 'A 2',
          },
          {
            name: 'A#2',
            displayName: 'A# 2',
          },
          {
            name: 'B2',
            displayName: 'B 2',
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
          },
          {
            name: 'C#3',
            displayName: 'C# 3',
          },
          {
            name: 'D3',
            displayName: 'D 3',
          },
          {
            name: 'D#3',
            displayName: 'D# 3',
          },
          {
            name: 'E3',
            displayName: 'E 3',
          },
          {
            name: 'F3',
            displayName: 'F 3',
          },
          {
            name: 'F#3',
            displayName: 'F# 3',
          },
          {
            name: 'G3',
            displayName: 'G 3',
          },
          {
            name: 'G#3',
            displayName: 'G# 3',
          },
          {
            name: 'A3',
            displayName: 'A 3',
          },
          {
            name: 'A#3',
            displayName: 'A# 3',
          },
          {
            name: 'B3',
            displayName: 'B 3',
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
          },
          {
            name: 'C#4',
            displayName: 'C# 4',
          },
          {
            name: 'D4',
            displayName: 'D 4',
          },
          {
            name: 'D#4',
            displayName: 'D# 4',
          },
          {
            name: 'E4',
            displayName: 'E 4',
          },
          {
            name: 'F4',
            displayName: 'F 4',
          },
          {
            name: 'F#4',
            displayName: 'F# 4',
          },
          {
            name: 'G4',
            displayName: 'G 4',
          },
          {
            name: 'G#4',
            displayName: 'G# 4',
          },
          {
            name: 'A4',
            displayName: 'A 4',
          },
          {
            name: 'A#4',
            displayName: 'A# 4',
          },
          {
            name: 'B4',
            displayName: 'B 4',
          },
        ],
      },
    ],
  },
];

export { DRUMS, INSTRUMENTS };
