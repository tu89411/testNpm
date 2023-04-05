#!/usr/bin/env node

const yargs = require('yargs')
const runner = require('./runner.js')

yargs
    .usage('$0 <cmd> [args]')
    .command('hello', 'say hello', runner.hello)
    .help()
    .argv
