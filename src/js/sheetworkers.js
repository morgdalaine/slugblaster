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

const loadPersonality = (personality) => {
  const isValid = G_PLAYBOOKS.hasOwnProperty(personality);
  if (!isValid) return;

  const pData = G_PLAYBOOKS[personality];

  const update = {};

  // personal gear
  pData.gear.forEach((gear, index) => {
    const personalGear = `personal_gear_${index + 1}_name`;
    update[personalGear] = gear;
  });

  // attitude
  const { dice, kick } = pData.attitude;
  update.attitude_dice = dice;
  update.attitude_kick = kick;
  update.attitude_subtitle = getTranslationByKey(`${personality}_attitude`);

  // style & trouble
  update.style_run_bonus = getTranslationByKey(`${personality}_style`);

  // traits
  importFieldset('traits', pData.traits);

  // console.table(update);
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

      const repeatingPrefix = `repeating_traits_${rowId}_trait_`;
      update[repeatingPrefix + 'name'] = getTranslationByKey(key);
      update[repeatingPrefix + 'description'] = getTranslationByKey(key + '_description');
      update[repeatingPrefix + 'autogen'] = 1;
    });

    console.log(update);
    setAttrs(update);
  });
};
