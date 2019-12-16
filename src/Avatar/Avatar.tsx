import React, { useState } from 'react'
import { variant } from 'styled-system'
import { Box } from '../Box'
import { Text } from '../Text'
import { Theme } from '../theme'
import { getColorFromHash, getIntials } from './utils'
import styled from '@emotion/styled'

export type AvatarProps = Box & {
  /**
   * Uses a bolder backgroundColor instead of the regular tint
   * @since 1.0
   */
  solid?: boolean

  /**
   * Used for initials and title
   * @since 1.0
   */
  name: string

  /**
   * Override the hash value for the color.
   * @note Only for advanced usage
   * @since 1.0
   */
  hash?: string
}

const AvatarFactory = styled(Box)<AvatarProps>(
  {
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    display: 'inline-flex',
    overflow: 'hidden',
  },
  props => {
    let hashColor = props.color || 'default'
    if (props.color === 'auto') {
      const hashValue = getColorFromHash(props.hash || props.name)
      hashColor = props.theme.themeColors[hashValue % props.theme.themeColors.length]
    }

    return variant({
      prop: 'solid',
      variants: {
        true: {
          backgroundColor: hashColor,
          span: {
            color: 'white',
          },
        },
        false: {
          backgroundColor: (t: Theme) => t.tints[hashColor],
          span: {
            color: (t: Theme) => t.colors[hashColor],
          },
        },
      },
    })
  },
)

/**
 * The `Avatar` component is used to represent users. And should only be used for users.
 * @since 1.0
 * @author Evan Hennessy
 */
export function Avatar({ name, src, size, ...props }: AvatarProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const imageUnavailable = !src || imageFailed
  const initials = getIntials(name)

  return (
    <AvatarFactory title={name} name={name} size={size} {...props}>
      {imageUnavailable ? (
        <Text
          display="flex"
          alignItems="center"
          justifyContent="center"
          size={size}
          css={{
            // & Used to make sure Text component doesn't override these settings
            '&': {
              fontSize: (t: Theme) => t.safeLoop(size, s => `${Math.ceil((s / 2.6) * t.major)}px`),
              lineHeight: (t: Theme) =>
                t.safeLoop(size, s => `${Math.ceil((s / 2.2) * t.major)}px`),
            },
          }}
        >
          {initials}
        </Text>
      ) : (
        <Box
          as="img"
          css={{ objectFit: 'cover', objectPosition: 'center' }}
          width="100%"
          height="100%"
          src={src}
          onError={() => setImageFailed(true)}
        />
      )}
    </AvatarFactory>
  )
}

Avatar.defaultProps = {
  size: 5,
  color: 'auto',
  solid: false,
}
