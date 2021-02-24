import React, { useState } from 'react'
import { ColorSelector } from './components/ColorSelector'
import { ColorDisplay } from './components/ColorDisplay'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(1)

  const changeHSL = (event, hslPicker) => {
    switch (hslPicker) {
      case 1:
        setHue(event.target.value)
        break
      case 2:
        setSaturation(event.target.value)
        break
      case 3:
        setLightness(event.target.value)
        break
      case 4:
        setAlpha(event.target.value)
        break
      default:
        break
    }
  }

  const randomize = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
  }

  return (
    <div>
      <header>
        <h1>Color Picker</h1>
      </header>
      <main>
        <ColorDisplay
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          alpha={alpha}
        />
        <ColorSelector
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          alpha={alpha}
          changeHSL={changeHSL}
        />
      </main>
      <footer>
        <button onClick={randomize}> Color Randomizer</button>
        <h2>Created by Jerid Fenderson</h2>
      </footer>
    </div>
  )
}
