// @ts-check
import { parseArgs } from 'node:util'

/** @satisfies {import('node:util').ParseArgsOptionsConfig} */
const options = {
  version: { type: 'boolean', short: 'v', default: false },
  red: { type: 'boolean', short: 'r', default: false },
}

/** @param {readonly string[]} args */
export function parse(args) {
  try {
    return parseArgs({ args, options }).values
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    process.exit(1)
  }
}
