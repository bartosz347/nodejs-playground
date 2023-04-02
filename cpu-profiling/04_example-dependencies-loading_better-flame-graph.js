/*

# Flame graph
0x -D "output/0x/{timestamp}" 05_example-dependencies-loading.js

*/
import {setTimeout} from 'timers/promises';
import {faker} from '@faker-js/faker';

const slow_operation = async () => {
  // for (const i of Array(300000).fill(0)) {
  //   const t = Math.random() * Math.random();
  // }
  await import('@faker-js/faker');

};


console.log('start');
await setTimeout(500);

for (const i of Array(100).fill(0)) {
  await slow_operation();
}

console.log(faker.name.firstName());
