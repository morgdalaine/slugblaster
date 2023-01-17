on('clicked:roll-character', async (eventInfo) => {
  makeCharacterRoll();
});

on('clicked:roll-character-trick', async (eventInfo) => {
  makeCharacterRoll(true);
});

const results = {
  roll: {
    result: 4,
    dice: [4, 3, 4],
    expression: '{1d6,1d6,1d6}kh1',
    rolls: [],
  },
  die1: {
    result: 0,
    dice: [],
    expression: '0',
    rolls: [],
  },
  die2: {
    result: 0,
    dice: [],
    expression: '0',
    rolls: [],
  },
  die3: {
    result: 0,
    dice: [],
    expression: '0',
    rolls: [],
  },
};
