import { Box } from '../Box'
import React from 'react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/core'

export function Spinner({ size, ...props }: Box) {
  return (
    <Box size={size} lineHeight="0px" {...props}>
      <Box
        as={motion.svg}
        css={{
          animation: `${keyframes({
            '0%': {
              transform: 'rotate(0)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          })} 2s linear infinite`,
        }}
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
      >
        <Box
          as="circle"
          css={{
            strokeDashoffset: 600,
            strokeDasharray: 300,
            strokeWidth: 12,
            strokeMiterlimit: 10,
            strokeLinecap: 'round',
            animation: `${keyframes({
              '0%': {
                strokeDashoffset: 600,
              },
              '100%': {
                strokeDashoffset: 0,
              },
            })} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
            stroke: 'currentColor',
            fill: 'transparent',
          }}
          cx="75"
          cy="75"
          r="60"
        />
      </Box>
    </Box>
  )
}

Spinner.defaultProps = {
  size: 5,
}
