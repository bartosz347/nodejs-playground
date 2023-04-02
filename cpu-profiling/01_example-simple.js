/*

# Flame chart
Chrome: chrome://inspect -> Open dedicated DevTools for Node
node --inspect-brk 01_example-simple.js
Chrome DevTools: Profiler tab -> start
--- Wait for Node.js script to finish ---
Chrome DevTools: Profiler tab -> stop


# Flame graph
0x -D "output/0x/{timestamp}" 01_example-simple.js

*/

import {setTimeout} from 'timers/promises';

const very_slow_operation = () => {
  for (const i of Array(1000000).fill(0)) {
    const t = Math.random() * Math.random();
  }
};
const slow_operation = () => {
  for (const i of Array(300000).fill(0)) {
    const t = Math.random() * Math.random();
  }
};

const fast_operation = () => {
  for (const i of Array(100000).fill(0)) {
    const t = Math.random() * Math.random();
  }
};

await setTimeout(500);
console.log('start');

for (const _ of Array(10).fill(0)) {
  slow_operation();
  fast_operation();
  very_slow_operation();

  console.log('loop');
  await setTimeout(500);
}
