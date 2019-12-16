import React from 'react'
import { Text, Strong } from '../Text'
import { Box } from './Box'
import { Pane } from './Pane'
import { Card } from './Card'
import { Theme } from '../theme'
import { motion } from 'framer-motion'

export default {
  title: 'Box',
  component: Box,
}

const colors = ['blue', 'red', 'purple', 'gray', 'orange', 'yellow', 'teal', 'green']

export const box = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 200px)" gridGap={3}>
      {colors.map(color => (
        <Box key={color} size={25} backgroundColor={color} padding={3}>
          <Text color="white" level={600}>
            {color}
          </Text>
        </Box>
      ))}
    </Box>
  )
}

export const animatedbox = () => (
  <Box
    margin={20}
    size={20}
    padding={2}
    tint
    as={motion.div}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
    transition={{
      duration: 2,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
      loop: Infinity,
      repeatDelay: 1,
    }}
  >
    This is a box rendered as a motion div
  </Box>
)

export const Panes = () => (
  <Box margin={3}>
    <Text display="block" my={2}>
      Pane composes the {`<Box/>`} component and adds a few helper props
    </Text>
    <Strong level={500} marginBottom={2}>
      Borders
    </Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 150px)" gridGap={3}>
      {['border', 'borderTop', 'borderBottom', 'borderRight', 'borderLeft'].map(b => (
        <Pane padding={2} {...{ [b]: true }}>
          <Text>{b}</Text>
        </Pane>
      ))}
    </Box>
    <Strong level={500} marginY={2}>
      Borders (muted)
    </Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 150px)" gridGap={3}>
      {['border', 'borderTop', 'borderBottom', 'borderRight', 'borderLeft'].map(b => (
        <Pane padding={2} {...{ [b]: 'muted' }}>
          <Text>{b}</Text>
        </Pane>
      ))}
    </Box>
    <Strong mt={2} level={500}>
      Tints
    </Strong>
    <Text display="block" marginBottom={2}>
      Borders are added thematically
    </Text>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 150px)" gridGap={3}>
      {new Theme().themeColors.map(b => (
        <Pane padding={2} tint={b} border>
          <Text>{b}</Text>
        </Pane>
      ))}
    </Box>
    <Strong mt={2} level={500}>
      Gradients
    </Strong>
    <Text display="block" marginBottom={2}>
      Text color is adapted based on luminance
    </Text>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 150px)" gridGap={3}>
      {new Theme().themeColors.map(b => (
        <Pane padding={2} gradient={b}>
          <Text>{b}</Text>
        </Pane>
      ))}
    </Box>
    <Strong level={500} marginY={2}>
      Elevations
    </Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 150px)" gridGap={3}>
      {[0, 1, 2, 3, 4].map(e => (
        <Pane key={e} elevation={e} padding={2} height={10}>
          <Text>{e}</Text>
        </Pane>
      ))}
    </Box>
    <Strong level={500} marginY={2}>
      Hover Elevations
    </Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 150px)" gridGap={3}>
      {[0, 1, 2, 3, 4].map(e => (
        <Pane key={e + 'hover'} hoverElevation={e} elevation={0} padding={2} height={10}>
          <Text>{e}</Text>
        </Pane>
      ))}
    </Box>
    <Strong level={500} marginY={2}>
      Active Elevation
    </Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 150px)" gridGap={3}>
      <Pane activeElevation={3} elevation={0} padding={2} height={10}>
        <Text>Click or Focus</Text>
      </Pane>
    </Box>
  </Box>
)

export const Cards = () => (
  <Box margin={3}>
    <Text my={2}>
      Card composes the {`<Pane/>`} component but with a default border according to its size
    </Text>
    <Card
      border
      tint
      height={25}
      width={35}
      p={3}
      hoverElevation={4}
      activeElevation={2}
      elevation={3}
    >
      A Card component
    </Card>
  </Box>
)
