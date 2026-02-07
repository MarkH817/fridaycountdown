#!/usr/bin/env node
// @ts-check
import info from '../package.json' with { type: 'json' }
import { parse } from './args.mjs'
import { addDays, daysUntilFriday } from './date.util.mjs'
import { styledLog } from './log.mjs'

const args = parse(process.argv.slice(2))

if (args.version) {
  console.log(info.version)
  process.exit(0)
}

const log = styledLog(args.red ? 'red' : 'cyan')
const today = new Date()
const daysBeforeFriday = daysUntilFriday(today)

log(`~~Countdown to Friday~~`)
log(`Today is ${today.toLocaleDateString('en-US')}`)

if (daysBeforeFriday === 0) {
  log("It's Friday!")
  log('Woo!')
} else {
  const friday = addDays(today, daysBeforeFriday)
  if (daysBeforeFriday === 1) {
    log(`Tomorrow is Friday ${friday.toLocaleDateString('en-US')}!`)
  } else {
    log(
      `${daysBeforeFriday} days until Friday ${friday.toLocaleDateString('en-US')}!`,
    )
  }
}
