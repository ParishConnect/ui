![ParishKit Logo](/.storybook/public/ParishKitLogo.svg?raw=true&sanitize=true 'ParishKit')

## Installation

```bash
yarn add @parishconnect/ui
# or
npm install @parishconnect/ui
```

## Usage

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, ThemeProvider } from '@parishconnect/ui'

ReactDOM.render(
  <ThemeProvider>
    <Button>This is a nice looking button!</Button>
  <ThemeProvider>,
  document.getElementById('root')
)

```

## Theming

ParishKit is built with theming in mind. It uses it's own theming internally to change things like primary theme colors and dark mode but since it uses `styled-system` under the hood, theming is as easy as using a different `ThemeProvider`. Check out [/src/theme/ThemeProvider.tsx](/src/theme/ThemeProvider.tsx) for an example on how to do that.

## Server Side Rendering

ParishKit supports SSR out of the box without any configuration. This is made possible by [emotion](https://emotion.sh/docs/ssr)

## License

ParishKit is released under the MIT license.
