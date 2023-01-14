data.character = {
  //- finish run clean up button?
  personalities: ['grit', 'guts', 'smarts', 'heart', 'chill'],
  header: {
    personality: {
      name: 'personality',
      label: 'Personality',
      placeholder: 'Personality',
      options: [
        { name: 'grit', text: 'The Grit' },
        { name: 'guts', text: 'The Guts' },
        { name: 'smarts', text: 'The Smarts' },
        { name: 'heart', text: 'The Heart' },
        { name: 'chill', text: 'The Chill' },
      ],
      type: 'text',
      blockName: 'header',
    },
    fields: [
      {
        name: 'character_name',
        label: 'Name',
        placeholder: 'Farrah',
        type: 'text',
        blockName: 'header',
      },
      {
        name: 'look',
        label: 'Look',
        placeholder: 'all black, muted, chains',
        type: 'text',
        blockName: 'header',
      },
      { name: 'family', label: 'Family', placeholder: 'strict', type: 'text', blockName: 'header' },
      {
        name: 'bond',
        label: 'Bond',
        placeholder: 'natural chemistry',
        type: 'text',
        blockName: 'header',
      },
      {
        name: 'vibes',
        label: 'Vibes',
        placeholder: 'space cadet',
        type: 'text',
        blockName: 'header',
      },
      {
        name: 'stickers',
        label: 'Stickers, etc.',
        placeholder: "'Skate and/or Die' beside a cat in a box",
        type: 'text',
        blockName: 'header',
      },
    ],
  },
  attitude: {
    subtitle: { name: 'attitude_subtitle', type: 'span', blockName: 'style' },
    fields: [
      { name: 'attitude_boost', label: 'Boost', type: 'hidden', blockName: 'attitude' },
      { name: 'attitude_kick', label: 'Kick', type: 'hidden', blockName: 'attitude' },
    ],
  },
  gear: {
    board: {
      name: 'your_board',
      label: 'Your Board',
      placeholder: 'street deck with hologram griptape',
      type: 'text',
      blockName: 'gear',
    },
    raygun: {
      name: 'your_raygun',
      label: 'Your Raygun',
      placeholder: 'circuit-bent photon pistol',
      type: 'text',
      blockName: 'gear',
    },
    hidden: [{ name: 'gear_autogen', type: 'hidden', blockName: 'gear' }],
    repeating: [
      { name: 'gear_check', label: 'Select Gear', type: 'checkbox', span: 1, blockName: 'gear' },
      {
        name: 'gear_name',
        label: 'Gear',
        placeholder: 'grappling hook',
        type: 'text',
        span: 11,
        blockName: 'gear',
      },
      { name: 'gear_cost', label: 'Cost', placeholder: '1 coil', type: 'text', blockName: 'gear' },
      {
        name: 'gear_description',
        label: 'Description',
        placeholder:
          'A pistol-sized launcher that fires an anti-negafriction dart which sticks firmly to most surfaces until switched off. The dart is attached to a hundred feet of lightweight carbon-fibre cable, which can be retracted via the launcher’s micro-winch.',
        type: 'textarea',
        blockName: 'gear',
      },
    ],
  },
  style: {
    hidden: [{ name: 'style', type: 'hidden', blockName: 'style' }],
    subtitle: { name: 'style_run_bonus', type: 'span', blockName: 'style' },
    track: Array.from(Array(9).keys(), (i) => ({
      name: 'style',
      value: i,
      type: 'radio',
      blockName: 'style',
    })),
  },
  trouble: {
    hidden: [{ name: 'trouble', type: 'hidden', blockName: 'trouble' }],
    actions: [
      { name: 'nope', label: 'Nope!', type: 'action', blockName: 'trouble' },
      { name: 'disaster', label: 'Disaster', type: 'action', blockName: 'trouble' },
    ],
    track: Array.from(Array(9).keys(), (i) => ({
      name: 'trouble',
      value: i,
      type: 'radio',
      blockName: 'trouble',
    })),
  },
  traits: {
    hidden: [{ name: 'trait_autogen', type: 'hidden', blockName: 'traits' }],
    repeating: [
      {
        name: 'trait_check',
        label: 'Select trait',
        type: 'checkbox',
        span: 1,
        blockName: 'traits',
      },
      {
        name: 'trait_name',
        label: 'trait',
        placeholder: 'Patient',
        type: 'text',
        span: 11,
        blockName: 'traits',
      },
      {
        name: 'trait_description',
        label: 'Description',
        placeholder:
          'When you reveal how you’ve been waiting to act, get +1d6 or +1 kick on your action.',
        type: 'textarea',
        blockName: 'traits',
      },
    ],
  },
  legacy: {
    repeating: [
      {
        name: 'legacy_name',
        label: 'Legacy',
        placeholder: 'viral video of 1080',
        type: 'text',
        blockName: 'legacy',
      },
      {
        name: 'legacy_description',
        label: 'Description',
        placeholder: 'Description',
        type: 'textarea',
        blockName: 'legacy',
      },
    ],
  },
  doom: {
    repeating: [
      {
        name: 'doom_name',
        label: 'doom',
        placeholder: "broke mom's trust",
        type: 'text',
        blockName: 'doom',
      },
      {
        name: 'doom_description',
        label: 'Description',
        placeholder: 'Description',
        type: 'textarea',
        blockName: 'doom',
      },
    ],
  },
  slams: {
    fields: [
      {
        name: 'slam_1',
        label: 'Slams',
        placeholder: 'super bruised ribs',
        type: 'text',
        blockName: 'slams',
      },
      {
        name: 'slam_2',
        label: 'Slams',
        placeholder: 'frustrated',
        type: 'text',
        blockName: 'slams',
      },
      { name: 'slam_3', label: 'Slams', placeholder: 'slimed', type: 'text', blockName: 'slams' },
    ],
  },
  downtime: {
    sections: ['trait_beats', 'grit_arc', 'family_arc', 'angst_arc', 'crew_beats', 'other_beats'],
    fields: [
      { name: 'check', label: 'Check', placeholder: 'Check', type: 'text', blockName: 'downtime' },
      { name: 'name', label: 'Name', placeholder: 'Name', type: 'text', blockName: 'downtime' },
      { name: 'cost', label: 'Cost', placeholder: 'Cost', type: 'text', blockName: 'downtime' },
      {
        name: 'description',
        label: 'Description',
        placeholder: 'Description',
        type: 'text',
        blockName: 'downtime',
      },
      {
        name: 'result',
        label: 'Result',
        placeholder: 'Result',
        type: 'text',
        blockName: 'downtime',
      },
    ],
  },
};
