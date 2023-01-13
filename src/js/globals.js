const G_SHEET_MODES = ['character', 'crew'];

const G_EDITORS = ['gear', 'your_character', 'traits'];

const G_REPEATING_FIELDSETS = [
  // character
  'gear',
  'traits',
  'mods',
  'legacy',
  'doom',

  // crew sheet
  'crews',
  'sponsors',
  'fractures',
  'authorities',
  'sponsors',
  'crowds',
];

const G_PLAYBOOKS = {
  grit: {
    attitude: { dice: 3, kick: 1 },
    traits: ['patient', 'sacrifice_your_body', 'diligent', 'walk_it_off', 'skill'],
    gear: ['something_everyone_else_forgot', 'backup_portaling_device'],
    beat: { grinding: '2_style' },
    arc: [
      { a_goal: '1_style' },
      { setbacks: '2_style' },
      { quitting: '4_trouble' },
      { perseverance: '3_style' },
    ],
    vibes: [
      'one_song_on_repeat',
      'never_smile',
      'your_drink_matches_your_shoes',
      'sleep_when_youre_dead',
      'adult_in_residence',
      'overachiever',
    ],
  },
  guts: {
    attitude: { dice: 1, kick: 3 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
  smart: {
    attitude: { dice: 2, kick: 2 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
  chill: {
    attitude: { dice: 1, kick: 2 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
  chill: {
    attitude: { dice: 1, kick: 0 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
};

const G_EXTRA_GEAR = [
  'your_phone',
  'personal_gear_1',
  'personal_gear_2',
  'grappling_hook',
  'spacetime_ampimeter',
  'hacking_tools',
  'multiversal_maps',
  'repair_tools',
  'small_drone',
  'pro_camera_gear',
  'peel_back_kit',
  'hazwear',
  'backup_portaling_device',
  'logic_binder',
  'advanced_portal_tech',
  'hardecker_sludge_flares',
  'hardlight_marker',
  'maser_grenades',
  'smartcord',
  'the_fust_mix',
  'beam_filter',
  'wilkies_gravity_stickers',
  'panic_energy_fuel_line',
  'fust_stasis_stickers',
  'aug_band',
  'particle_bond_tights',
  '3d_printed_ablatine',
  'knock_off_scram_cat_tee',
  'miper_escape_bag',
  'awf_bracelet',
  'duraweave_jacket',
  'link_patch_duo',
  'slam_patch',
];
