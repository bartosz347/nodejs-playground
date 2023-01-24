import { v4 } from 'uuid';
import { Client, EvaluationContext } from '@openfeature/js-sdk';

const MEOW_AT_START_FLAG_KEY = 'meowAtStartFlag';
const FONT_SIZE_FLAG_KEY = 'fontSizeFlag';

export const flagEvaluationDemo = async (client: Client) => {
  // Fake user data
  const userId = v4();
  const userAge = new Date().getSeconds();

  const meowAtStart = await client.getBooleanValue(MEOW_AT_START_FLAG_KEY, false);

  const context: EvaluationContext = {
    targetingKey: userId,
    age: userAge,
  };
  const userFontSize = await client.getNumberValue(FONT_SIZE_FLAG_KEY, 14, context);

  console.log();
  console.log(meowAtStart ? 'Meeeoow! 🐈 =^._.^= ' : '---');
  console.log('Font size is', userFontSize);
};
