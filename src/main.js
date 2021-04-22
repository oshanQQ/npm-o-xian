#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const boxen = require('boxen');

const nameCardContent = 'My name is Onoyama Shodai';

const boxenStyle = {
  padding: 2,
  borderStyle: "double",
  borderColor: "cyan",
};

console.log(boxen(nameCardContent, boxenStyle));
