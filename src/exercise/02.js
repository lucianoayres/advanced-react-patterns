// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, toggle})
  })
}

// function Toggle({children}) {
//   const [on, setOn] = React.useState(false)
//   const toggle = () => setOn(!on)
//   return React.Children.map(children, child => {
//     return typeof child.type === 'string'
//       ? child
//       : allowedTypes.includes(child.type)
//       ? React.cloneElement(child, {on, toggle})
//       : null
//   })
// }

// const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]
// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
function ToggleOn({on, children}) {
  return on ? children : null
}

function ToggleOff({on, children}) {
  return on ? null : children
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
function ToggleButton({on, toggle, ...props}) {
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
