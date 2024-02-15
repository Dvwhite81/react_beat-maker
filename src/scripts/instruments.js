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
    choices: [],
  },
];

export { DRUMS, INSTRUMENTS };
