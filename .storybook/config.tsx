import { withContexts } from '@storybook/addon-contexts/react'
import { addDecorator, configure } from '@storybook/react'
import { Theme, ThemeProvider } from '../src/theme'

addDecorator(
  withContexts([
    {
      icon: 'chroma',
      title: 'Themes',
      components: [ThemeProvider],
      params: [
        {
          name: 'Light',
          props: { theme: new Theme('light') },
          default: true,
        },
        { name: 'Dark', props: { theme: new Theme('dark') } },
      ],
    },
  ]),
)

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module)
