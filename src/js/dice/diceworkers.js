/**
 *
 * @param {*} params
 * @returns
 */
const makeRollTemplate = (params) => {
  const { title, subtitle, trick, dice } = params;
  let roll = params.roll || '[[1d6]]';

  console.log(roll);
  const template = [
    `&{template:slugblaster}`,
    `{{character=@{character_name}}}`,
    `{{title=${title}}}`,
    `{{subtitle=${subtitle}}}`,
    `{{roll=${roll}}}`,
    `{{result=[[0]]}}`,
    trick ? '{{trick=true}}' : '',
    `{{@{dicetray_dare}=true}}`,
    `{{boosts=@{dicetray_boosts}}}`,
    `{{kicks=@{dicetray_kicks}}}`,
  ];

  Array.from(Array(dice).keys(), (die) => {
    template.push(`{{die${die + 1}=[[0]]}}`);
  });

  return template.filter((line) => line).join(' ');
};

const handleRollResults = async (results) => {
  const final = {};
  const { result, dice } = results.roll;

  dice.forEach((die, index) => {
    const key = `die${index + 1}`;
    final[key] = die;
  });

  final.result = result <= 3 ? 'fail' : result <= 5 ? 'mixed' : result === 6 ? 'success' : 'unk';

  console.log(final);
  return final;
};

const makeRoll = async (template) => {
  const result = await startRoll(template);
  const { rollId, results } = result;
  const parsed = await handleRollResults(results);
  console.dir(parsed);
  finishRoll(rollId, parsed);
};

const makeCharacterRoll = (trick = false) => {
  const request = ['dicetray_boosts', 'dicetray_kicks', 'dicetray_dare'];
  getAttrs(request, (values) => {
    console.table(values);
    const boosts = +values.dicetray_boosts || 0;
    const kicks = +values.dicetray_kicks || 0;
    const dare = values.dicetray_dare || '';

    const dice = 1 + boosts + (dare === 'plus_1d6' ? 1 : 0);
    const kick = 1 + kicks + (dare === 'plus_kick' ? 1 : 0);
    const params = {
      title: 'Slugblaster Title',
      subtitle: 'Slugblaster Subtitle',
      dice: dice,
      roll: `[[${dice}d6kh1sd]]`,
      trick: trick,
      kick: kick,
    };

    const template = makeRollTemplate(params);
    makeRoll(template);
  });
};
