import { DateTime, Info, Interval } from 'luxon'
import produce from 'immer'
import React, { useState, useEffect } from 'react'
import { Pane } from '../Box'
import { Button } from '../Button'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icon'
import { Strong, Text } from '../Text'
import { getCalendarDatesForRange, getMonthForDay, isDateDisabled } from './utils'

export type Calendar = Omit<Pane, 'onChange'> & {
  selected: DateTime
  disabledDates?: Interval | DateTime[]
  onChange: (date: DateTime) => void
}

/**
 * Controlled Calendar component used in the DatePicker
 */
export function Calendar({ selected, onChange, disabledDates, ...props }: Calendar) {
  const [internalSelected, setInternalSelected] = useState(selected)

  useEffect(() => {
    setInternalSelected(selected)
  }, [selected])

  const weekdayHeader = produce(Info.weekdays('short'), draft => {
    draft.unshift(draft.pop())
  })
  const selectedMonth = getMonthForDay(internalSelected)
  const calendarDates = getCalendarDatesForRange(selectedMonth)

  return (
    <Pane {...props}>
      <Pane marginBottom={2} display="flex" justifyContent="space-between" alignItems="center">
        <Button
          icon={ChevronLeftIcon}
          appearance="minimal"
          iconSize={1.75}
          marginLeft={1}
          onClick={() => setInternalSelected(internalSelected.minus({ month: 1 }))}
        />
        <Text>{internalSelected.toLocaleString({ month: 'long', year: 'numeric' })}</Text>
        <Button
          icon={ChevronRightIcon}
          appearance="minimal"
          iconSize={1.75}
          marginRight={1}
          onClick={() => setInternalSelected(internalSelected.plus({ month: 1 }))}
        />
      </Pane>
      <Pane
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        paddingX={0.5}
        justifyItems="center"
        marginY={1.5}
      >
        {weekdayHeader.map(weekday => (
          <Strong key={weekday}>{weekday}</Strong>
        ))}
      </Pane>
      <Pane
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        justifyItems="center"
        alignItems="center"
      >
        {calendarDates.map(date => {
          const isSelected = date.hasSame(selected, 'day')
          const isDisabled = isDateDisabled(date, disabledDates)
          return (
            <Button
              disabled={isDisabled}
              appearance={isSelected ? 'primary' : 'minimal'}
              width="100%"
              key={date.toMillis()}
              color={date.month === selected.month ? 'text' : 'muted'}
              onClick={() => onChange(date)}
              zIndex={isSelected ? 1 : 0}
            >
              {date.day}
            </Button>
          )
        })}
      </Pane>
    </Pane>
  )
}

Calendar.defaultProps = {
  width: 36,
  padding: 1,
  selected: DateTime.local(),
}
