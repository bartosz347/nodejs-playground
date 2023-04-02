/*

# Flame chart
node --inspect-brk 04_example-dependencies-loading.js

# Flame graph
0x -D "output/0x/{timestamp}" 04_example-dependencies-loading.js

*/
import {setTimeout} from 'timers/promises';
import {faker} from '@faker-js/faker';

const slow_operation = () => {
  for (const i of Array(300000).fill(0)) {
    const t = Math.random() * Math.random();
  }
};


console.log('start');
await setTimeout(500);

for (const i of Array(10).fill(0)) {
  slow_operation();
}

faker.name.firstName();
console.log('finished');
