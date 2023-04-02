/*
npm run start-dummy-server

# Flame chart
node --inspect-brk 02_example-api-call_flame-chart.js

*/

import {setTimeout} from 'timers/promises';
import fetch from 'node-fetch';

const foo_request = async () => {
  const result = await fetch("http://localhost:3000");
  console.log(result.status);
};


console.log('start');
await setTimeout(500);

for (const _ of Array(5).fill(0)) {
  await foo_request();
}
