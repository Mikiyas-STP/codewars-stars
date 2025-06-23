export default {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
//```This file tells Babel: "When you run, use the `@babel/preset-env` preset and compile the code to be compatible with the current version of Node.js that is running."