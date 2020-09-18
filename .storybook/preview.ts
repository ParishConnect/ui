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
        ...['red', 'purple', 'orange', 'teal', 'green'].map(color => ({
          name: `Light ${color}`,
          props: { colorMode: 'light', color },
        })),
        {
          name: 'Dark',
          props: { colorMode: 'dark' },
        },
        ...['red', 'purple', 'orange', 'teal', 'green'].map(color => ({
          name: `Dark ${color}`,
          props: { colorMode: 'dark', color },
        })),
      ],
    },
  ]),
)

// automatically import all files ending in *.stories.tsx
// configure(require.context('../src', true, /\.stories\.tsx$/), module)
