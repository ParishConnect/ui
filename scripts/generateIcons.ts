import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { minify } from 'html-minifier'
import camelCase from 'camelcase'

const GENERATED_ICONS_PATH = path.resolve(__dirname, '../src/Icon/generated')

function createSVGObject() {
  const files = fs.readdirSync(path.join(__dirname, './icons'))

  return files
    .filter(file => path.extname(file) === '.svg')
    .map(file => {
      const name = `${camelCase(path.basename(file, '.svg'), { pascalCase: true })}Icon`
      const svg = fs.readFileSync(path.join(__dirname, './icons', file))
      const $ = cheerio.load(svg)
      $('path, polyline, line').removeAttr('class')
      $('defs, title').remove()
      const contents = minify($('svg').html(), { collapseWhitespace: true })
      return { name, contents }
    })
    .reduce((icons, icon) => {
      icons[icon.name] = icon.contents
      return icons
    }, {})
}

function createJSONIconStore(svgs: object) {
  fs.writeFileSync(path.join(__dirname, './icons/icons.json'), JSON.stringify(svgs))
}

function generateIconFiles(svgs: object) {
  Object.entries(svgs).forEach(([name, contents]) => {
    const iconFile = `
  import React from 'react'
  import { Icon, IconProps } from '../Icon'

  export function ${name}(props: IconProps) {
   return (
    <Icon name="${name}" viewBox="0 0 24 24" {...props}>
      ${contents}
    </Icon>
   )
  }
  `
    const iconPath = path.join(GENERATED_ICONS_PATH, `${name}.tsx`)
    return fs.writeFileSync(iconPath, iconFile)
  })
}

function ensureGeneratedPath() {
  try {
    fs.mkdirSync(GENERATED_ICONS_PATH)
  } catch (error) {}
}

function main() {
  const svgs = createSVGObject()
  createJSONIconStore(svgs)
  ensureGeneratedPath()
  generateIconFiles(svgs)
}

main()
