// Switch between sheet modes
G_SHEET_MODES.forEach((mode) => {
  on(`clicked:${mode}`, (eventInfo) => {
    setAttrs({ sheet_mode: mode });
  });
});

// Edit / View panel modes
G_EDITORS.forEach((toggle) => {
  on(`clicked:${toggle}-editor`, (eventInfo) => {
    getAttrs([`${toggle}_editor`], (values) => {
      const value = values[`${toggle}_editor`] === '0' ? 'on' : '0';
      setAttrs({ [`${toggle}_editor`]: value });
    });
  });
});

// Update empty fieldsets
G_REPEATING_FIELDSETS.forEach((fieldset) => {
  on(`change:repeating_${fieldset} remove:repeating_${fieldset}`, async (eventInfo) =>
    isFieldsetEmpty(fieldset)
  );
});

// Load personality data
on(`sheet:opened change:personality`, (eventInfo) => {
  const personality = eventInfo.newValue;
  if (personality) loadPersonality(personality.toLowerCase());
});

// Style & Trouble
on('clicked:nope', (eventInfo) => nopeTrouble());
