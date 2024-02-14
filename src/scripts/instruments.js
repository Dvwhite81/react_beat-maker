const INSTRUMENTS = [
  {
    type: 'kick-snare',
    displayName: 'Kick and Snare',
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
        ],
      },
    ],
  },
  {
    type: 'closed-open',
    displayName: 'Hi Hats',
    choices: [
      {
        name: 'closedhat',
        displayName: 'Closed Hi-Hat',
        options: [
          {
            soundName: 'hihat-808',
            soundSrc: '/sounds/hihat-808.wav',
          },
          {
            soundName: 'hihat-digital',
            soundSrc: '/sounds/hihat-digital.wav',
          },
        ],
      },
      {
        name: 'openhat',
        displayName: 'Open Hi-Hat',
        options: [
          {
            soundName: 'openhat-1',
            soundSrc: '/sounds/openhat-1.mp3',
          },
          {
            soundName: 'openhat-808',
            soundSrc: '/sounds/openhat-808.wav',
          },
        ],
      },
    ],
  },
  {
    type: 'ride-crash',
    displayName: 'Ride and Crash',
    choices: [
      {
        name: 'ride',
        displayName: 'Ride',
        options: [
          {
            soundName: 'ride-acoustic01',
            soundSrc: '/sounds/ride-acoustic01.wav',
          },
          {
            soundName: 'ride-acoustic02',
            soundSrc: '/sounds/ride-acoustic02.wav',
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
        ],
      },
    ],
  },
  {
    type: 'clap-tom',
    displayName: 'Clap and Tom',
    choices: [
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
            soundName: 'tom-acoustic01',
            soundSrc: '/sounds/tom-acoustic01.wav',
          },
        ],
      },
    ],
  },
];

export default INSTRUMENTS;
