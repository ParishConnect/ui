import { DateTime, Interval } from 'luxon'

export function getMonthForDay(date: DateTime): Interval {
  return Interval.fromDateTimes(date.startOf('month'), date.endOf('month'))
}

export function getCalendarDatesForRange(range: Interval): DateTime[] {
  // Extend behind so that we always start on the weekstart
  const startOffset = range.start.weekday
  // Extend forward so we always have 42 (6 weeks) for the calendar
  const endOffset = 42 - (range.count('days') + startOffset)

  const expandedRange = Interval.fromDateTimes(
    range.start.minus({ days: startOffset }),
    range.end.plus({ days: endOffset }),
  )

  return expandedRange.divideEqually(expandedRange.count('days')).map(interval => interval.end)
}

export function isDateDisabled(date: DateTime, disabledDates: Interval | DateTime[]): boolean {
  if (!disabledDates) {
    return false
  }

  if (disabledDates instanceof Interval && disabledDates.contains(date)) {
    return true
  }

  if (Array.isArray(disabledDates)) {
    for (const disabledDate of disabledDates) {
      if (disabledDate.hasSame(date, 'day')) {
        return true
      }
    }
  }

  return false
}
