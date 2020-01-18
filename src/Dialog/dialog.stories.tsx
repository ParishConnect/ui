import React, { useState } from 'react'
import { Box } from '..'
import { Button } from '../Button'
import { LockIcon, UnlockIcon, CheckCircleIcon } from '../Icon'
import { Dialog } from './Dialog'
import { Paragraph, Heading } from '../Text'

export default {
  title: 'Dialog',
  component: Dialog,
}

export const Basic = () => {
  const [isShown, setShown] = useState(true)
  return (
    <Box m={3}>
      <Button onClick={() => setShown(true)}>Open Dialog</Button>
      <Dialog title="Dialog Title" isShown={isShown} onCancel={() => setShown(false)}>
        This is some text
      </Dialog>
    </Box>
  )
}

export const noHeaderOrFooter = () => {
  const [isShown, setShown] = useState(true)
  return (
    <Box m={3}>
      <Button onClick={() => setShown(true)}>Open Dialog</Button>
      <Dialog
        title="Dialog Title"
        isShown={isShown}
        onCancel={() => setShown(false)}
        hasHeader={false}
        hasFooter={false}
      >
        This dialog isn't much of a dialog since it's just an empty Pane
      </Dialog>
    </Box>
  )
}

export const customLabels = () => {
  const [isShown, setShown] = useState(true)
  return (
    <Box m={3}>
      <Button onClick={() => setShown(true)}>Open Dialog</Button>
      <Dialog
        title="Custom Title"
        cancelLabel="Undo"
        confirmLabel="Save"
        intent="success"
        icon={CheckCircleIcon}
        isShown={isShown}
        onCancel={() => setShown(false)}
      >
        This dialog isn't much of a dialog since it's just an empty Pane
      </Dialog>
    </Box>
  )
}

export const overflowingContent = () => {
  const [isShown, setShown] = useState(true)
  return (
    <Box m={3}>
      <Button onClick={() => setShown(true)}>Open Dialog</Button>
      <Dialog title="Dialog Title" isShown={isShown} onCancel={() => setShown(false)}>
        <Heading marginBottom={1}>A nice heading</Heading>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <Paragraph key={i} marginBottom={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Paragraph>
        ))}
      </Dialog>
    </Box>
  )
}

export const preventBodyScrolling = () => {
  const [preventScrolling, setPreventScrolling] = useState(false)
  const [isShown, setShown] = useState(true)
  return (
    <Box m={3}>
      <Box paddingY="70vh">This will check body scrolling</Box>
      <Dialog
        title="Dialog Title"
        isShown={isShown}
        onCancel={() => {
          setShown(false)
          setPreventScrolling(false)
        }}
        hasFooter={false}
        preventBodyScroll={preventScrolling}
      >
        <Button
          iconBefore={preventScrolling ? UnlockIcon : LockIcon}
          onClick={() => setPreventScrolling(!preventScrolling)}
        >
          {preventScrolling ? 'Unlock Scrolling' : 'Lock Scrolling'}
        </Button>
      </Dialog>
    </Box>
  )
}
