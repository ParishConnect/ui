import React from 'react'
import { Box } from '../Box'
import { Button } from '../Button'
import { Toast } from './Toast'
import { Toaster, useToaster } from './Toaster'

export default {
  title: 'Toaster',
  component: Toast,
}

export const toaster = () => (
  <Toaster>
    <ToasterStory />
  </Toaster>
)

const ToasterStory = () => {
  const { add, closeAll } = useToaster()

  return (
    <Box margin={10}>
      <Button
        marginLeft={1}
        intent="info"
        onClick={() =>
          add({
            title: 'Some information',
            description: 'ParishConnect is the most advanced Digital Catholic Platform.',
          })
        }
      >
        Pop an Info Toast
      </Button>
      <Button
        marginLeft={1}
        intent="warning"
        onClick={() => add({ title: 'Wow! Such warning.', intent: 'warning' })}
      >
        Pop a Warning Toast
      </Button>
      <Button
        marginLeft={1}
        intent="danger"
        onClick={() => add({ title: "Oops. That's dangerous", intent: 'danger' })}
      >
        Pop a Danger Toast
      </Button>
      <Button
        marginLeft={1}
        intent="success"
        onClick={() => add({ title: 'Hooray! You did it! 🎉', intent: 'success' })}
      >
        Pop a Success Toast
      </Button>
      <Button marginLeft={1} onClick={closeAll}>
        Close all toasts
      </Button>
    </Box>
  )
}
