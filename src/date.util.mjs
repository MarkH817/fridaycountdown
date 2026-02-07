// @ts-check
const FRIDAY_DAY_OF_WEEK = 5

/**
 * @param {Date} date
 */
export function isFriday(date) {
  return date.getDay() === FRIDAY_DAY_OF_WEEK
}

/** @param {Date} date */
export function daysUntilFriday(date) {
  return (FRIDAY_DAY_OF_WEEK - date.getDay() + 7) % 7
}

/**
 * @param {Readonly<Date>} date
 * @param {number} days
 */
export function addDays(date, days) {
  const resultDate = new Date()
  resultDate.setDate(date.getDate() + days)
  return resultDate
}
