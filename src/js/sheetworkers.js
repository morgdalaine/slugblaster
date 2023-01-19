const getSectionID = (eventInfo) => eventInfo.sourceAttribute.split('_').at(2);

const doNumcontrol = (numcontrol, step, min = null, max = null) => {
  getAttrs([numcontrol, numcontrol + '_max'], (values) => {
    let value = +values[numcontrol] || 0;
    value += step;

    if (min !== null) value = Math.max(value, min);

    if (max !== null) {
      if (isNaN(max)) {
        let value_max = +values[max];
        value = Math.min(value, value_max);
      } else value = Math.min(value, max);
    }

    setAttrs({ [numcontrol]: value });
  });
};

const nopeTrouble = () => {
  getAttrs(['trouble', 'trouble_max'], (values) => {
    const max = +values.trouble_max || 8;
    const current = +values.trouble || 0;
    const newValue = Math.min(current + 2, max);
    setAttrs({ trouble: newValue });
  });
};

const makeTrack = (sectionId) => {
  const repeatingPrefix = `repeating_tracks_${sectionId}_`;
  const request = [repeatingPrefix + 'track_name'];
  getAttrs(request, (values) => {
    const update = {};
    const trackName = values[repeatingPrefix + 'track_name'];
    update[repeatingPrefix + 'track_name'] = trackName.trim().toUpperCase();
    update[repeatingPrefix + 'track_size'] = trackName.length;

    for (let index = 0; index < G_TRACK.max; index++) {
      const key = repeatingPrefix + 'track_letter_' + (index + 1);
      const letter = trackName[index];

      update[key] = letter ? letter.toUpperCase() : '';
      if (!letter) update[repeatingPrefix + 'track_marker_' + (index + 1)] = 0;
    }

    setAttrs(update);
  });
};

const makeTrackString = (sectionId) => {
  const repeatingPrefix = `repeating_tracks_${sectionId}_`;
  const markers = Array.from(Array(G_TRACK.max).keys(), (index) => `track_marker_${index + 1}`);

  const request = ['track_name', 'track_size', ...markers].map((r) => repeatingPrefix + r);
  getAttrs(request, (values) => {
    const update = {};
    const trackName = values[repeatingPrefix + 'track_name'];
    const trackDisplay = Array(trackName.length);
    let trackCompleted = 0;

    Array.from(trackName, (letter, index) => {
      const marked = values[repeatingPrefix + 'track_marker_' + (index + 1)];

      trackDisplay[index] = marked === 'on' ? 'X' : trackName[index];
      if (marked === 'on') trackCompleted++;
    });

    update[repeatingPrefix + 'track_display'] = trackDisplay.join(' ');
    update[repeatingPrefix + 'track_completed'] = trackCompleted;
    setAttrs(update);
  });
};

const loadPersonality = (personality) => {
  const isValid = G_PLAYBOOKS.hasOwnProperty(personality);
  if (!isValid) return;

  const update = {};
  const data = G_PLAYBOOKS[personality];

  // personal gear
  data.gear.forEach((gear, index) => {
    const personalGear = `personal_gear_${index + 1}_name`;
    update[personalGear] = gear;
  });

  // attitude
  const { boost, kick } = data.attitude;
  update.attitude_boost = boost;
  update.attitude_kick = kick;
  update.attitude_subtitle = getTranslationByKey(`${personality}_attitude`);

  // style & trouble
  update.style_run_bonus = getTranslationByKey(`${personality}_style`);

  // traits
  // importFieldset('traits', data.traits);

  setAttrs(update);
};

const loadSignature = (signature) => {
  const isValid = G_SIGNATURES.hasOwnProperty(signature);
  if (!isValid) return;

  const update = {};
  const data = G_SIGNATURES[signature];

  // text stuff
  update.signature_function = getTranslationByKey(`${signature}_function`);
  update.signature_description = getTranslationByKey(`${signature}_description`);

  // mods
  // importFieldset('mods', data.mods);

  //
  setAttrs(update);
};

// https://wiki.roll20.net/Sheet_Worker_Scripts#WARNING
/**
 * Need to map from attribute data map to populate translations
 * getAllAttrs to leave user created rows in the repeating section
 * @param {*} fieldset
 * @param {*} data
 */
const importFieldset = (fieldset, data) => {
  getSectionIDs(`repeating_${fieldset}`, (sections) => {
    const update = {};

    data.forEach((key) => {
      let rowId = generateRowID();
      while (rowId in sections) {
        rowId = generateRowID();
      }
      sections.push(rowId);

      const repeatingPrefix = `repeating_${fieldset}_${rowId}_trait_`;
      update[repeatingPrefix + 'name'] = getTranslationByKey(key);
      update[repeatingPrefix + 'description'] = getTranslationByKey(key + '_description');
      update[repeatingPrefix + 'autogen'] = 1;
    });

    setAttrs(update);
  });
};
