import { styleText } from 'node:util'

/**
 * @param {Parameters<typeof styleText>[0]} format
 */
export function styledLog(format) {
  /** @param {string} text */
  return (text) => console.log(styleText(format, text))
}
