import React, { useState } from 'react'
import { Box } from '../Box'
import { Heading, Pre, Text } from '../Text'
import { Autocomplete } from './Autocomplete'
import { Createable } from './Createable'
import { Select } from './Select'

export default {
  title: 'Select',
  component: Select,
  subcomponents: { Createable },
}

export const select = () => (
  <Box margin={3}>
    <Heading marginY={1}>Select</Heading>
    <Select>
      <option value="x">Some option</option>
      <option value="y">Another option</option>
    </Select>
  </Box>
)

export const autocomplete = () => {
  const [singleValue, setSingleValue] = useState()
  const [multiValue, setMultiValue] = useState<any>([{ label: 'Easter', value: 'easter' }])

  return (
    <Box margin={3}>
      <Heading>AutoComplete</Heading>
      <Text marginBottom={2} color="muted">
        Based on React Select.
      </Text>
      <Box maxWidth={40} marginBottom={2}>
        <Heading marginY={1} level={300}>
          Single
        </Heading>
        <Autocomplete
          onChange={value => setSingleValue(value)}
          isClearable
          options={[
            {
              label: 'Group',
              options: [
                { label: 'Easter', value: 'easter' },
                { label: 'Christmas', value: 'christmas' },
              ],
            },
          ]}
        />
        <Pre level={300}>{JSON.stringify(singleValue)}</Pre>
      </Box>
      <Box maxWidth={40}>
        <Heading marginY={1} level={300}>
          Multi
        </Heading>
        <Autocomplete
          isClearable
          isMulti
          defaultValue={[
            { label: 'Easter', value: 'easter' },
            { label: 'Easter', value: 'easter' },
            { label: 'Easter', value: 'easter' },
            { label: 'Easter', value: 'easter' },
          ]}
          onChange={value => setMultiValue(value)}
          options={[
            {
              label: 'Group',
              options: [
                { label: 'Easter', value: 'easter' },
                { label: 'Christmas', value: 'christmas' },
              ],
            },
          ]}
        />
        <Pre marginTop={1} level={300}>
          {JSON.stringify(multiValue)}
        </Pre>
      </Box>
    </Box>
  )
}
export const createable = () => (
  <Box margin={3}>
    <Heading>Createable Select</Heading>
    <Text marginBottom={2} color="muted">
      Based on React Select.
    </Text>
    <Box maxWidth={40}>
      <Heading marginY={1} level={300}>
        Single
      </Heading>
      <Createable
        isClearable
        options={[
          {
            label: 'Group',
            options: [
              { label: 'Easter', value: 'easter' },
              { label: 'Christmas', value: 'christmas' },
            ],
          },
        ]}
      />
    </Box>
    <Box maxWidth={40}>
      <Heading marginY={1} level={300}>
        Multi
      </Heading>
      <Createable
        isMulti
        isClearable
        options={[
          {
            label: 'Group',
            options: [
              { label: 'Easter', value: 'easter' },
              { label: 'Christmas', value: 'christmas' },
            ],
          },
        ]}
      />
    </Box>
  </Box>
)
