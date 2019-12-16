import React, { useState } from 'react'
import { Text } from '../Text'
import { Portal } from './Portal'
import { Overlay } from './Overlay'
import { Box } from '../Box'
import { Button } from '../Button/Button'

export default {
  title: 'Layout',
  component: Portal,
}

export const Portals = () => (
  <Portal>
    <Text>
      This is being rendered inside of a Portal
      <br />
      This component is a helper for rendering a React Portal with SSR support
    </Text>
  </Portal>
)

export const Overlays = () => {
  const [isShown, setShown] = useState(false)
  return (
    <Box>
      <Button onClick={() => setShown(true)}>Show Overlay</Button>
      <Text m={3} display="block">
        This is some Text below the overlay
      </Text>
      <Overlay onHide={() => setShown(false)} isShown={isShown} />
    </Box>
  )
}
