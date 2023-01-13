const createRollTemplate = (params) => {
  const template = [
    `&{template:slugblaster}`,
    `{{character=@{character_name}}}`,
    `{{title=${title}}}`,
    `{{subtitle=${subtitle}}}`,
  ];
};
