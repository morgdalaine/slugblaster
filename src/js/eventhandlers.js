// Switch between sheet modes
G_SHEET_MODES.forEach((mode) => {
  on(`clicked:${mode}`, (eventInfo) => {
    setAttrs({ sheet_mode: mode });
  });
});

// Edit / View panel modes
// QUESTION: should the editor and minimizer be linked?
G_EDITORS.forEach((toggle) => {
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
});

G_BLADES.forEach((toggle) => {
  on(`clicked:${toggle}-blade`, (eventInfo) => {
    getAttrs([`${toggle}_blade`], (values) => {
      const value = values[`${toggle}_blade`] === '0' ? 'on' : '0';
      setAttrs({ [`${toggle}_blade`]: value });
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
  if (signature) loadSignature(signature);
});

// Style & Trouble
on('clicked:nope', (eventInfo) => nopeTrouble());
