// Switch between sheet modes
for (const mode of G_SHEET_MODES) {
  on(`clicked:${mode}`, (eventInfo) => {
    setAttrs({ sheet_mode: mode });
  });
}

// Edit / View panel modes
// QUESTION: should the editor and minimizer be linked?
for (const toggle of G_EDITORS) {
  on(`clicked:${toggle}-editor`, (eventInfo) => {
    getAttrs([`${toggle}_editor`, `${toggle}_minimizer`], (values) => {
      const isMinimized = values[`${toggle}_minimized`] === 'on';

      const value = values[`${toggle}_editor`] === '0' ? 'on' : '0';
      setAttrs({ [`${toggle}_editor`]: value });
    });
  });

  on(`clicked:${toggle}-minimizer`, (eventInfo) => {
    getAttrs([`${toggle}_minimizer`], (values) => {
      const value = values[`${toggle}_minimizer`] === '0' ? 'on' : '0';
      setAttrs({ [`${toggle}_minimizer`]: value });
    });
  });
}

for (const toggle of G_BLADES) {
  on(`clicked:${toggle}-blade`, (eventInfo) => {
    getAttrs([`${toggle}_blade`], (values) => {
      const value = values[`${toggle}_blade`] === '0' ? 'on' : '0';
      setAttrs({ [`${toggle}_blade`]: value });
    });
  });
}

// Update empty fieldsets
for (const fieldset of G_REPEATING_FIELDSETS) {
  on(`change:repeating_${fieldset} remove:repeating_${fieldset}`, async (eventInfo) => isFieldsetEmpty(fieldset));
}

// Load personality data
on('change:personality change:personality_custom', (eventInfo) => {
  console.debug(eventInfo);
  const personality = eventInfo.newValue;
  if (personality) loadPersonality(personality);
});

// Load signature data
on('change:signature', (eventInfo) => {
  let signature = eventInfo.newValue;
  signature = signature.trim().replace(' ', '_').toLowerCase();
  if (signature) loadSignature(signature);
});

// Load faction data
on('clicked:load-factions', () => loadFactions());
const factionAutogen = Object.keys(G_FACTIONS)
  .flatMap((section) => G_FACTION_AUTOGEN.map((field) => `change:repeating_${section}-factions`))
  .join(' ');
on(factionAutogen, (eventInfo) => {
  const autogen = `${eventInfo.sourceAttribute.split('_').slice(0, 4).join('_')}_autogen`;
  getAttrs([autogen], (values) => {
    if (values[autogen] && eventInfo.sourceType === 'player') {
      console.log(eventInfo);
      setAttrs({ [autogen]: '' }, { silent: true });
    }
  });
});

// Style & Trouble
on('clicked:nope', (eventInfo) => nopeTrouble());

// Progress Tracks / SKATE / tracks
on('change:repeating_tracks:track_name clicked:repeating_tracks:track-reset', (eventInfo) => {
  const sectionId = getSectionID(eventInfo);
  makeTrack(sectionId);
});

Array.from(Array(G_CONSTANTS.progress_track_max).keys(), (index) => {
  on(`change:repeating_tracks:track_marker_${index + 1}`, (eventInfo) => {
    const sectionId = getSectionID(eventInfo);
    makeTrackString(sectionId);
  });
});

on('sheet:opened', () => {
  getAllAttrs(
    (attributes, sections) => {
      console.log(attributes);
      console.log(sections);
    },
    [...G_FACTION_FIELDSET],
    [...G_BLADES]
  );
});
