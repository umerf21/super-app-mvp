#!/usr/bin/env node
const concurrently = require('concurrently');

concurrently([
  { command: 'yarn --filter host start', name: 'host', prefixColor: 'blue' },
  { command: 'yarn --filter notes start', name: 'notes', prefixColor: 'green' },
], {
  killOthersOn: ['failure', 'success'], // kill all if one fails or succeeds
  restartTries: 0
})
