import { withContexts } from '@storybook/addon-contexts/react'
import { addDecorator, configure, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { ThemeProvider } from '../src/theme'
import logo from './ParishKitLogo.svg'

addDecorator(
  withContexts([
    {
      icon: 'chroma',
      title: 'Themes',
      components: [ThemeProvider],
      params: [
        {
          name: 'Light',
          props: { colorMode: 'light', color: 'red' },
          default: true,
        },
        {
          name: 'Dark',
          props: { colorMode: 'dark' },
        },
      ],
    },
  ]),
)

addParameters({
  readme: {
    codeTheme: 'github',
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'ParishKit UI',
      brandImage: logo,
      brandUrl: 'https://parishconnect.io',
      textColor: 'rgb(51,51,51)',
    }),
  },
})

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module)
