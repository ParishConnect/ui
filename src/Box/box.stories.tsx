import React from 'react'
import { Box } from './Box'

export default {
  title: 'Box',
  component: Box,
}

export const box = () => {
  return (
    <Box tint borderRadius={2} padding={1} width={200} height={200}>
      Hi this is a Box component!
    </Box>
  )
}
