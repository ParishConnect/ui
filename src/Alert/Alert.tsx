import { useTheme } from '@emotion/core'
import React from 'react'
import { Pane, PaneProps, Box } from '../Box'
import { Intent } from '../theme'
import { LiteralStringUnion } from '../utils/types'
import { Heading, Paragraph } from '../Text'
import { Button } from '../Button'
import { CloseIcon } from '../Icon'

export type AlertProps = PaneProps & {
  intent?: LiteralStringUnion<Intent>
  hasIcon?: boolean
  title: string
  isRemoveable?: boolean
  onRemove?: () => void
}

export function Alert({
  intent,
  hasIcon,
  title,
  children,
  css,
  isRemoveable,
  onRemove,
  ...props
}: AlertProps) {
  const theme = useTheme()
  const Icon = hasIcon && theme.icons[intent]
  return (
    <Pane
      role="alert"
      backgroundColor="background"
      border="muted"
      overflow="hidden"
      position="relative"
      paddingY={1.5}
      paddingX={2}
      css={{
        ...css,
        '&::before': {
          content: '""',
          width: 0.5,
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: theme.colors[intent],
        },
      }}
      {...props}
    >
      <Box display="flex" width="100%" alignItems={!children && 'center'}>
        {Icon && (
          <Box marginRight={1} marginLeft="2px" marginTop={0.5}>
            <Icon color={intent} size={1.75} />
          </Box>
        )}

        <Heading level={400}>{title}</Heading>

        {isRemoveable && (
          <Box marginLeft="auto" paddingLeft={12}>
            <Button
              color="text"
              icon={CloseIcon}
              appearance="minimal"
              css={{ path: { strokeWidth: 3 } }}
              onClick={onRemove}
              iconSize={0.8}
            />
          </Box>
        )}
      </Box>
      <Box display="flex" marginLeft={Icon && 3}>
        {typeof children === 'string' ? (
          <Paragraph level={300} color="muted">
            {children}
          </Paragraph>
        ) : (
          children
        )}
      </Box>
    </Pane>
  )
}

Alert.defaultProps = {
  hasIcon: true,
  intent: 'info',
  isRemoveable: false,
}
