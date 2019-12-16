import { ThemeContext } from '@emotion/core'
import c from 'color'
import React from 'react'
import { Box } from '../Box'
import { Strong, Text } from '../Text'
import { Theme } from '../theme'

export default {
  title: 'Colors',
  component: Box,
}

const Swatch = ({ pick, name, ...props }: Box & { pick: c | c[]; name: string }) => {
  let background: string

  if (!Array.isArray(pick)) {
    background = pick.toString()
    pick = [pick]
  } else {
    background = new Theme().createGradient(pick[0].toString(), pick[1].toString())
  }

  const textColor = pick[0].isLight()
    ? c('black')
        .alpha(0.75)
        .toString()
    : c('white')
        .alpha(0.75)
        .toString()

  return (
    <Box
      background={background}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      size={10}
      css={{
        boxShadow: (t: Theme) =>
          `0 0 0 1px ${t.colors.background} inset, 0 0 0 2px ${pick[0].alpha(0.65).toString()}`,
      }}
      borderRadius={8}
      {...props}
    >
      <Strong color={textColor}>{name}</Strong>
      <Text color={textColor} level={300}>
        {pick[0].hex()}
      </Text>
    </Box>
  )
}

const Grid = (props: any) => (
  <Box display="grid" my={2} gridTemplateColumns="repeat(auto-fit, 80px)" gridGap={3} {...props} />
)

const themeColors = ['blue', 'red', 'purple', 'orange', 'yellow', 'teal', 'green']

export const All = () => (
  <ThemeContext.Consumer>
    {(theme: any) => (
      <Box margin={3}>
        <Strong level={600}>Solids</Strong>
        <Grid>
          {themeColors.map(color => {
            const cObj = c(theme.colors[color])
            return <Swatch name={color} pick={cObj} />
          })}
        </Grid>
        <Grid>
          <Swatch name="gray" pick={c(theme.colors.gray)} />
          {[0, 1, 2, 3, 4, 5].map(i => {
            const cObj = c(theme.colors.grays[i])
            return <Swatch name={`grays.${i}`} pick={cObj} />
          })}
        </Grid>
        <Strong level={600}>Tints</Strong>
        <Grid>
          {themeColors.map(color => {
            const cObj = c(theme.tints[color])
            return <Swatch name={color} pick={cObj} />
          })}
        </Grid>
        <Strong level={600}>Gradients</Strong>
        <Grid>
          {themeColors.map(color => {
            const gradient = theme.gradients[color]
            const cObj = gradient.map((g: string) => c(g))
            return <Swatch name={color} pick={cObj} />
          })}
        </Grid>
      </Box>
    )}
  </ThemeContext.Consumer>
)
