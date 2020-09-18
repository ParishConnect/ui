import { DateTime } from 'luxon'
import React, { ChangeEvent } from 'react'
import { Anchor } from 'react-laag/dist/ToggleLayer/anchor'
import { FormField } from '../FormField/FormField'
import { Position } from '../LayoutComponents/Positioner'
import { Popover } from '../Popover/Popover'
import { TextInput, TextInputField } from '../TextInput'
import { useMedia } from '../utils/useMedia'
import { Calendar } from './Calendar'

export type DatePicker = Omit<TextInputField, 'onChange'> &
  Calendar & {
    dateFormat?: Intl.DateTimeFormatOptions
    keepOpenOnSelect?: boolean
  }

/**
 * The DatePicker uses a custom picker on desktop/fine pointer devices
 * it automatically switches to the native picker for mobile/coarse pointer devices
 *
 * Additional props are sent to the input
 */
export function DatePicker({
  dateFormat,
  selected,
  label,
  hint,
  description,
  onChange,
  closeOnSelect,
  width,
  ...props
}: DatePicker) {
  const isTouch = useMedia('(pointer: coarse and max-width 1024px)', false)
  return isTouch ? (
    <TextInput
      width={width}
      type="date"
      cursor="pointer"
      value={selected.toISODate()}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(DateTime.fromISO(e.currentTarget.value))
      }
      {...props}
    />
  ) : (
    <Popover
      position="BOTTOM"
      content={({ close }) => (
        <Calendar
          width={width}
          selected={selected}
          onChange={date => {
            onChange(date)
            if (closeOnSelect) {
              close()
            }
          }}
        />
      )}
    >
      <FormField label={label} hint={hint} description={description}>
        <TextInput
          width={width}
          cursor="pointer"
          value={selected.toLocaleString(dateFormat)}
          {...props}
        />
      </FormField>
    </Popover>
  )
}

DatePicker.defaultProps = {
  dateFormat: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  selected: DateTime.local(),
  keepOpenOnSelect: false,
  width: 34,
}
