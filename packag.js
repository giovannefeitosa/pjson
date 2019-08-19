#!/usr/bin/env node

import * as omelette from 'omelette';
import packageJson from './package.json';

const scriptArgument = ({ reply }) => {
  let scripts = Object.keys(packageJson.scripts)
  reply(scripts)
}

function Packag() {
  omelette`packag ${scriptArgument}`.init()
}

module.exports = Packag
