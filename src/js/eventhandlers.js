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
on(`change:personality`, (eventInfo) => {
  let personality = eventInfo.newValue;
  personality = personality.trim().replace(' ', '_').toLowerCase();
  if (personality) loadPersonality(personality);
});

// Load signature data
on(`change:signature`, (eventInfo) => {
  let signature = eventInfo.newValue;
  signature = signature.trim().replace(' ', '_').toLowerCase();
  console.log(signature);
  if (signature) loadSignature(signature);
});

// Style & Trouble
on('clicked:nope', (eventInfo) => nopeTrouble());
