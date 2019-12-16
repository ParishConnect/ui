import { Spinner } from './Spinner'
import { Box } from '..'
import React from 'react'
import { Strong } from '../Text'

export default {
  title: 'Spinner',
  component: Spinner,
}

export const All = () => (
  <Box margin={3}>
    <Strong mb={2}>Spinner extends {`<Icon/>`}</Strong>
    <Spinner />
  </Box>
)
