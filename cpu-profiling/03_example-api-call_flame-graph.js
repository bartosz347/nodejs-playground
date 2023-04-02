/*
npm run start-dummy-server

# Flame graph
0x -D "output/0x/{timestamp}" 03_example-api-call_flame-graph.js

*/
import fetch from 'node-fetch';


const foo_request = async () => {
  const result = await fetch("http://localhost:3000");
  console.log(result.status);
};

console.log('start');

for (const _ of Array(1000).fill(0)) {
  await foo_request();
}
