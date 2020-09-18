import produce from 'immer'
import { Text } from '../Text'
import { DateObject, DateTime } from 'luxon'
import React from 'react'
import { TextInput } from '../TextInput'
import { Box } from '../Box'
import { Button } from '../Button'
import { ChevronUpIcon, ChevronDownIcon } from '../Icon'
import { Select } from '../Select/Select'

export type TimePicker = Omit<TextInput, 'onChange'> & {
  selected: DateTime
  onChange: (time: DateTime) => void
  seconds?: boolean
}

export function TimePicker({ selected, height, seconds, onChange, ...props }: TimePicker) {
  const displayValues = produce<DateObject & { pm?: boolean }>(selected.toObject(), draft => {
    if (draft.hour > 12) {
      draft.hour = draft.hour - 12
      draft.pm = true
    } else {
      draft.pm = false
    }
  })

  return (
    <Box>
      <Box display="flex">
        <Box>
          <Box display="flex">
            <Button
              appearance="minimal"
              height={2}
              width={5}
              marginBottom={0.5}
              icon={ChevronUpIcon}
              onClick={() => onChange(selected.plus({ hour: 1 }))}
            />
            <Box width={2} />
            <Button
              appearance="minimal"
              height={2}
              width={5}
              marginBottom={0.5}
              icon={ChevronUpIcon}
              onClick={() => onChange(selected.plus({ minute: 1 }))}
            />
          </Box>
          <TextInput
            as="div"
            alignItems="center"
            display="flex"
            height={height}
            width={seconds ? 17 : 12}
            paddingX={0}
            justifyContent="space-between"
            {...props}
          >
            <TextInput
              value={displayValues.hour}
              height={height}
              boxShadow="none"
              width={5}
              textAlign="center"
            />
            <Text color="default" textAlign="center" width={2} height={height}>
              :
            </Text>
            <TextInput
              value={displayValues.minute < 10 ? `0${displayValues.minute}` : displayValues.minute}
              height={height}
              boxShadow="none"
              width={5}
              textAlign="center"
            />
          </TextInput>
        </Box>
        <Select marginTop={2.5} marginLeft={1} value={displayValues.pm ? 'PM' : 'AM'}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </Select>
      </Box>
      <Box display="flex">
        <Button
          appearance="minimal"
          height={2}
          width={5}
          marginTop={0.5}
          icon={ChevronDownIcon}
          onClick={() => onChange(selected.minus({ hour: 1 }))}
        />
        <Box width={2} />
        <Button
          appearance="minimal"
          height={2}
          width={5}
          marginTop={0.5}
          icon={ChevronDownIcon}
          onClick={() => onChange(selected.minus({ minute: 1 }))}
        />
      </Box>
    </Box>
  )
}

TimePicker.defaultProps = {
  seconds: false,
}
