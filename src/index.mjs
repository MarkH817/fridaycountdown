#!/usr/bin/env node
// @ts-check
import clear from 'clear'
import { program } from 'commander'
import { cyanBright as cyan, redBright as red } from 'yoctocolors'
import info from '../package.json' with { type: 'json' }

/**
 * @param {string} msg
 */
function log (msg) {
  if (program.getOptionValue('red')) {
    console.log(red(msg))
  } else {
    console.log(cyan(msg))
  }
}

program
  .version(info.version)
  .option('-c, --clear', 'Clear the terminal')
  .option('-r, --red', 'Make text red')
  .parse(process.argv)

if (program.getOptionValue('clear')) {
  clear()
}

let today = new Date()
let daysBeforeFriday = (5 - today.getDay()) % 7
let friday = new Date()
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
