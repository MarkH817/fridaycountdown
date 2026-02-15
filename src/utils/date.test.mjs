// @ts-check
import assert from 'node:assert'
import { describe, it } from 'node:test'
import {
  addDays,
  daysUntilFriday,
  formatDate,
  formatRelativeDays,
} from './date.mjs'

describe('date', () => {
  // 1969/12/31 (Wednesday)
  const input = new Date(0)

  it('addDays', () => {
    assert.equal(addDays(input, 0).valueOf() - input.valueOf(), 0)
    assert.equal(
      addDays(input, 1).valueOf() - input.valueOf(),
      24 * 3_600 * 1_000,
    )
  })

  it('daysUntilFriday', () => {
    assert.equal(daysUntilFriday(input), 2)
  })
})
