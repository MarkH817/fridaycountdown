#!/usr/bin/env node
// @ts-check
import info from '#package.json' with { type: 'json' }
import {
  addDays,
  daysUntilFriday,
  formatDate,
  formatRelativeDays,
} from '#utils'
import { parse } from './args.mjs'
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
log(`Today is ${formatDate(today)}.`)

if (daysBeforeFriday === 0) {
  log("Yippee!")
} else {
  const nextFriday = addDays(today, daysBeforeFriday)
  log(`${formatDate(nextFriday)} is ${formatRelativeDays(daysBeforeFriday)}!`)
}
