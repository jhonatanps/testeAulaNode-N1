const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args); //{ _: [], a: 1, b: 2 }

const a = args.a;
const b = args.b;

console.log(a + b);