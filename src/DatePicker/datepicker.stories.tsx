import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { Box } from '../Box'
import { Calendar } from './Calendar'
import { Pre } from '../Text'
import { DatePicker } from './DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker,
}

export const datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(DateTime.local())
  return (
    <Box>
      <DatePicker selected={selectedDate} onChange={setSelectedDate} keepOpenOnSelect />
      <Pre>{selectedDate.toLocaleString()} </Pre>
    </Box>
  )
}

export const calendar = () => {
  const [selectedDate, setSelectedDate] = useState(DateTime.local())
  return (
    <Box>
      <Calendar
        selected={selectedDate}
        onChange={setSelectedDate}
        disabledDates={[DateTime.local().plus({ day: 2 })]}
      />
      <Pre>{selectedDate.toLocaleString()} </Pre>
    </Box>
  )
}
