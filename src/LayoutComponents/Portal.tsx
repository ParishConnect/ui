import canUseDom from 'dom-helpers/canUseDOM'
import { Component } from 'react'
import ReactDOM from 'react-dom'

let portalContainer: HTMLDivElement

export class Portal extends Component {
  el: HTMLDivElement
  constructor(props: any) {
    super(props)

    // This fixes SSR
    if (!canUseDom) return

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('parishconnect-portal', '')
      document.body.append(portalContainer)
    }

    this.el = document.createElement('div')
    portalContainer.append(this.el)
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    // This fixes SSR
    if (!canUseDom) return null
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}
