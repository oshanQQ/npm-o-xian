#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const boxen = require('boxen');

const data = {
  name: "Onoyama Shodai",
  handleName: "o-xian",
  twitter: "https://twitter.com/oshanQQ",
  github: "https://github.com/oshanQQ",
  qiita: "https://qiita.com/oshanQQ",
  blog: "https://o-xian.netlify.app/",
  speakerdeck: "https://speakerdeck.com/oshanqq"
};

const displayData = data.speakerdeck + "\n" + data.qiita;

const boxenStyle = {
  padding: 2,
  borderStyle: "double",
  borderColor: "cyan",
};

console.log(boxen(displayData, boxenStyle));
