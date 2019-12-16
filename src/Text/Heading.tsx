import styled from '@emotion/styled'
import { Box } from '../Box'
import { variant } from 'styled-system'
import { LiteralNumberUnion } from '../utils/types'
import React from 'react'

export type HeadingProps = Box & {
  level?: LiteralNumberUnion<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>
}

const HeadingMap = new Map<number, string>()
HeadingMap.set(900, 'h1')
HeadingMap.set(800, 'h1')
HeadingMap.set(700, 'h2')
HeadingMap.set(600, 'h2')
HeadingMap.set(500, 'h3')
HeadingMap.set(400, 'h4')
HeadingMap.set(300, 'h4')
HeadingMap.set(200, 'h5')
HeadingMap.set(100, 'h6')

export function Heading(props: HeadingProps) {
  return <HeadingFactory as={HeadingMap.get(props.level as number)} {...props} />
}

export const HeadingFactory = styled(Box)<HeadingProps>(
  {},
  variant({
    prop: 'level',
    variants: {
      '900': {
        fontSize: '35px',
        fontWeight: 500,
        lineHeight: '40px',
        letterSpacing: '-0.2px',
        fontFamily: 'display',
        color: 'text',
      },
      '800': {
        fontSize: '29px',
        fontWeight: 500,
        lineHeight: '32px',
        letterSpacing: '-0.2px',
        fontFamily: 'display',
        color: 'text',
      },
      '700': {
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: '28px',
        letterSpacing: '-0.07px',
        fontFamily: 'display',
        color: 'text',
      },
      '600': {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: '-0.07px',
        fontFamily: 'display',
        color: 'text',
      },
      '500': {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '-0.05px',
        fontFamily: 'ui',
        color: 'text',
      },
      '400': {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
        letterSpacing: '-0.05px',
        fontFamily: 'ui',
        color: 'text',
      },
      '300': {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: '0',
        fontFamily: 'ui',
        color: 'text',
      },
      '200': {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: '0',
        fontFamily: 'ui',
        color: 'text',
      },
      '100': {
        fontSize: '11px',
        fontWeight: 400,
        textTransform: 'uppercase',
        lineHeight: '16px',
        letterSpacing: '0.6px',
        fontFamily: 'ui',
        color: 'text',
      },
    },
  }),
)

Heading.defaultProps = {
  level: 500,
}
