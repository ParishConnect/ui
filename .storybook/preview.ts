import { withContexts } from '@storybook/addon-contexts/react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '../src/theme'

addDecorator(
  withContexts([
    {
      icon: 'chroma',
      title: 'Themes',
      components: [ThemeProvider],
      params: [
        {
          name: 'Light',
          props: { colorMode: 'light' },
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

// automatically import all files ending in *.stories.tsx
// configure(require.context('../src', true, /\.stories\.tsx$/), module)
