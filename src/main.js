#!/usr/bin/env node

const boxen = require('boxen');

const nameCardContent = 'My name is Onoyama Shodai';

const boxenStyle = {
  padding: 2,
  borderStyle: "double",
  borderColor: "cyan",
};

console.log(boxen(nameCardContent, boxenStyle));
