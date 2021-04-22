#!/usr/bin/env node

const boxen = require('boxen');

const boxenStyle = {
  padding: 2,
  borderStyle: "double",
  borderColor: "cyan",
}

console.log(boxen("Hello, World!", boxenStyle));