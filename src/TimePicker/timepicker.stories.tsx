import { TimePicker } from './TimePicker'
import React, { useState } from 'react'
import { DateTime } from 'luxon'

export default {
  title: 'TimePicker',
  component: TimePicker,
}

export const timepicker = () => {
  const [selected, setSelected] = useState(DateTime.local())
  return <TimePicker selected={selected} onChange={setSelected} />
}
