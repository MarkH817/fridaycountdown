#!/usr/bin/env node
// @ts-check
import { styleText } from 'node:util'
import clear from 'clear'
import { program } from 'commander'
import info from '../package.json' with { type: 'json' }

/**
 * @param {string} msg
 */
function log(msg) {
  if (program.getOptionValue('red')) {
    console.log(styleText('red', msg))
  } else {
    console.log(styleText('cyan', msg))
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
  log(`It's Friday!`)
  log(`Woo!`)
} else if (daysBeforeFriday === 1) {
  log(`Tomorrow is Friday ${friday.toLocaleDateString('en-US')}!`)
} else {
  log(
    `${daysBeforeFriday} days until Friday ${friday.toLocaleDateString('en-US')}!`,
  )
}
