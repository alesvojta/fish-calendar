import { h, render } from 'preact'
import { App } from './index/App'

const element = document.getElementById('fish-calendar')
if (element && element.hasAttribute('data-url')) {
  render(<App dataUrl={element.getAttribute('data-url')} />, element)
}
