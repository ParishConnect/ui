import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'
// import logo from './public/ParishKitLogo.svg'

addons.setConfig({
  readme: {
    codeTheme: 'github',
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'ParishKit UI',
      brandImage: '/ParishKitLogo.svg',
      brandUrl: 'https://parishconnect.io',
      textColor: 'rgb(51,51,51)',
    }),
  },
})
