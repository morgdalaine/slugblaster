const G_SHEET_MODES = ['character', 'crew', 'options'];

const G_EDITORS = [
  'angst-arc',
  'authority-factions',
  'crew-beats',
  'crew-factions',
  'header-crew',
  'crowd-factions',
  'dicetray',
  'doom',
  'family-arc',
  'gear',
  'header',
  'fame',
  'legacy',
  'mods',
  'notes',
  'other-beats',
  'personality-arc',
  'signature',
  'sponsor-factions',
  'tracks',
  'trait-beats',
  'traits',
];

const G_BLADES = ['downtimes', 'epilogue', 'factions', 'diary', 'multiverse'];

const G_REPEATING_FIELDSETS = [
  // character
  'doom',
  'gear',
  'legacy',
  'mods',
  'traits',

  // common
  'tracks',
  'notes',

  // downtime
  'trait-beats',
  'personality-arc',
  'family-arc',
  'angst-arc',
  'crew-beats',
  'other-beats',

  // crew sheet
  'crew-factions',
  'authority-factions',
  'sponsor-factions',
  'crowd-factions',
];

const G_CONSTANTS = {
  trouble_max: 8,
  progress_track_max: 12,
};

const G_PLAYBOOKS = {
  grit: {
    attitude: { boost: 3, kick: 1 },
    traits: ['patient', 'sacrifice_your_body', 'diligent', 'walk_it_off', 'skill', 'personal_growth'],
    gear: ['something_everyone_else_forgot', 'backup_portaling_device'],
    beat: { grinding: '2_style', origin_story: '3_style', sharpened: '4_style' },
    arc: [{ a_goal: '1_style' }, { setbacks: '2_style' }, { quitting: '4_trouble' }, { perseverance: '3_style' }],
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
    attitude: { boost: 1, kick: 3 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
  smarts: {
    attitude: { boost: 2, kick: 2 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
  heart: {
    attitude: { boost: 1, kick: 2 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
  chill: {
    attitude: { boost: 1, kick: 0 },
    traits: [],
    gear: [],
    beat: [''],
    arc: [],
  },
};

const G_SIGNATURES = {
  negafriction_sword: {
    mods: ['slip_rattle', 'field_projector', 'ref_coating', 'negafriction_wake', 'subdimensional_edge', 'kitbashed'],
    looks: [],
  },
  gravity_blaster: {},
  hardlight_board: {},
  hyperoptic_visor: {},
  kinetic_deck: {},
  photonic_jacket: {},
  powered_armour: {},
  reality_cannon: {},
  riftninja_sneakers: {},
  robotic_companion: {},
  skipmode_runners: {},
  voidwear_backpack: {},
};

const G_IMPORT_DATA_MAP = {
  traits: [],
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

const G_FACTIONS = {
  crew: ['brb', 'jet_collective', 'null_range', 'lazy_bunny', 'the_wicks'],
  sponsor: ['miper', 'hardecker', 'wilkies', 'scram_cat', 'fust'],
  authority: ['dara', 'the_arborists', 'shimmer', 'doorways', 'the_old_guard'],
  crowd: ['the_thrashers', 'the_heads', 'the_mavens', 'the_freaks', 'the_normies'],
};

const G_FACTION_FIELDSET = [
  {
    section: 'repeating_crew-factions',
    fields: ['faction_name', 'faction_description', 'faction_autogen'],
  },
];

const G_FACTION_AUTOGEN = ['faction_name', 'faction_relationship', 'faction_description'];

const attributes = {
  '_reporder_repeating_crew-factions': ['-nmgprevgublcxcngb9c', '-nmgl2wvnispwk-lxqtq', '-nmglyljz7cdnce90suj'],
  'repeating_crew-factions_-nmgl2wvnispwk-lxqtq_faction_name': 'Null Range',
  'repeating_crew-factions_-nmgl2wvnispwk-lxqtq_faction_description':
    'An obnoxious, anti-authoritarian crew of older kids from Hillview.',
  'repeating_crew-factions_-nmgl2wvnispwk-lxqtq_faction_autogen': '',
  'repeating_crew-factions_-nmglyljz7cdnce90suj_faction_name': 'The Wicks',
  'repeating_crew-factions_-nmglyljz7cdnce90suj_faction_description':
    'A crew of young, rowdy, disenfranchised up-and-comers.',
  'repeating_crew-factions_-nmglyljz7cdnce90suj_faction_autogen': '',
  'repeating_crew-factions_-nmgprevgublcxcngb9c_faction_name': 'BRB',
  'repeating_crew-factions_-nmgprevgublcxcngb9c_faction_description': '',
  'repeating_crew-factions_-nmgprevgublcxcngb9c_faction_autogen': '',
};

const sections = {
  'repeating_crew-factions': ['-nmgl2wvnispwk-lxqtq', '-nmglyljz7cdnce90suj', '-nmgprevgublcxcngb9c'],
};
