module.exports = {
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  expandProps: 'end',
  svgoConfig: {
    plugins: {
      inlineStyles: {
        onlyMatchedOnce: false,
      },
      removeRasterImages: true,
    },
  },
  template({ types, template }, opts, { imports, componentName, props, jsx, exports }) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })

    jsx.openingElement.name.name = 'Icon'
    jsx.closingElement.name.name = 'Icon'
    jsx.openingElement.attributes.push(types.JSXSpreadChild(props))

    componentName.name = componentName.name.replace(/Svg/, '') + 'Icon'

    return typeScriptTpl.ast`
    import React from 'react';
    import {Icon, IconProps} from '../Icon'

    export function ${componentName}(props: IconProps){
     return (
       ${jsx}
     )
    };
  `
  },
}
