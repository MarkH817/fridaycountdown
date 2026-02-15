// @ts-check
const FRIDAY_DAY_OF_WEEK = 5
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  weekday: 'long',
})
const relativeDateFormatter = new Intl.RelativeTimeFormat('en-US', {
  numeric: 'auto',
  style: 'long',
})

/** @param {Date} date */
export function daysUntilFriday(date) {
  return (FRIDAY_DAY_OF_WEEK - date.getDay() + 7) % 7
}

/**
 * @param {Readonly<Date>} date
 * @param {number} days
 */
export function addDays(date, days) {
  const resultDate = new Date(date)
  resultDate.setDate(date.getDate() + days)
  return resultDate
}

/** @param {Date} date */
export function formatDate(date) {
  return dateFormatter.format(date)
}

/** @param {number} days */
export function formatRelativeDays(days) {
  return relativeDateFormatter.format(days, 'days')
}
