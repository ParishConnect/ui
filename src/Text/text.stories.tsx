import React from 'react'
import { Text } from './Text'
import { Strong } from './Strong'
import { Box } from '..'
import { Heading } from './Heading'
import { Code } from './Code'
import { Label } from './Label'
import { Link } from './Link'
import { Paragraph } from './Paragraph'
import { Pre } from './Pre'

export default {
  title: 'Text',
  component: Text,
}

export const text = () => {
  return (
    <Box>
      {[200, 300, 400, 500, 600].map(level => (
        <>
          <Text key={level} level={level}>
            This is some text at level: {level}
          </Text>
          <br />
        </>
      ))}
    </Box>
  )
}

export const paragraph = () => {
  return (
    <Box maxWidth={100}>
      {[300, 400, 500].map(level => (
        <>
          <Paragraph key={level} level={level}>
            This is a paragraph at level: {level}
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Paragraph>
          <br />
        </>
      ))}
    </Box>
  )
}

export const strong = () => {
  return (
    <Box>
      {[200, 300, 400, 500, 600].map(level => (
        <>
          <Strong key={level} level={level}>
            This is some strong text at level: {level}
          </Strong>
          <br />
        </>
      ))}
    </Box>
  )
}

export const heading = () => (
  <Box>
    {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(level => (
      <>
        <Heading key={level} level={level}>
          This is some heading text at level: {level}
        </Heading>
        <br />
      </>
    ))}
  </Box>
)

export const code = () => (
  <Box>
    {[200, 300, 400, 500, 600].map(level => (
      <>
        <Code key={level} level={level}>
          This is some code text at level: {level}
        </Code>
        <br />
      </>
    ))}
  </Box>
)

export const label = () => (
  <Box>
    <Text>Labels are used in form field inputs</Text>
    <br />
    <Label>This is a label</Label>
  </Box>
)

export const pre = () => (
  <Box>
    <Text>Pres are used for preformatted text</Text>
    <br />
    <Pre marginY={2} display="block">
      {JSON.stringify({
        an: { object: ['is', 'a'], good: { ['use-case']: ['for', 'a pre', 'element'] } },
      })}
    </Pre>
  </Box>
)

export const link = () => (
  <Box>
    <Text>Links are used for internal and external anchors</Text>
    <br />
    <Link href="#">Default</Link>
  </Box>
)
