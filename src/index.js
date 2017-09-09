#!/usr/bin/env node

import clear from 'clear'
import {cyan, red} from 'chalk'
import commander from 'commander'

function log (msg) {
  if (commander.red) {
    console.log(red(msg))
  } else {
    console.log(cyan(msg))
  }
}

commander
  .version('1.0.5')
  .option('-C, --clear', 'Clear the terminal')
  .option('-r, --red', 'Make text red')
  .parse(process.argv)

if (commander.clear) {
  clear()
}

let today = new Date()
let friday = new Date(today)
let daysBeforeFriday = (5 + 7 - today.getDay()) % 7
friday.setDate(today.getDate() + daysBeforeFriday)

log(`~~Countdown to Friday~~`)
log(`Today is ${today.toLocaleDateString('en-US')}`)

if (daysBeforeFriday === 0) {
  log(`Today is Friday!`)
  log(`Woo!`)
} else if (daysBeforeFriday === 1) {
  log(`Tomorrow is Friday ${friday.toLocaleDateString('en-US')}!`)
} else {
  log(`${daysBeforeFriday} days until Friday ${friday.toLocaleDateString('en-US')}!`)
}
