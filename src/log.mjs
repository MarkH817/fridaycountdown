// @ts-check
import { styleText } from 'node:util'

/** @template T @typedef {T | readonly T[]} MaybeList */

/** @param {MaybeList<import('node:util').InspectColor>} format */
export function styledLog(format) {
  /** @param {string} text */
  return (text) => console.log(styleText(format, text))
}

/** @satisfies {readonly MaybeList<import('node:util').InspectColor>[]} */
const COLORS = [
  'red',
  'redBright',
  'yellow',
  'green',
  'blue',
  'blueBright',
  'magenta',
]
/** @param {string} text */
export function rainbowLog(text) {
  console.log(
    Array.from(text)
      .map((t, index) => styleText(COLORS[index % COLORS.length], t))
      .join(''),
  )
}
