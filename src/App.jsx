import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(1)

  // @ts-ignore
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
        <figure>
          <div
            className="box"
            style={{
              backgroundColor: `hsla(${hue},
                   ${saturation}%,
                   ${lightness}%,
                   ${alpha})`,
            }}
          >
            <h2
              style={{
                color: `hsl(${hue},
                 ${saturation}%,
                 ${lightness}%)`,
              }}
            >
              Sometimes the things that you're searching for has been in front
              of you the whole time.
            </h2>
          </div>
          <figcaption>
            <ul>
              <li>
                <h3>Hue</h3>
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="360"
                  value={hue}
                  onInput={(event) => changeHSL(event, 1)}
                  style={{
                    backgroundColor: `hsl(${hue},
                       100%,
                       50%)`,
                  }}
                />
                <input
                  type="text"
                  className="textBox"
                  value={hue}
                  onInput={(event) => changeHSL(event, 1)}
                />
                <p>&#176;</p>
              </li>
              <li>
                <h3>Saturation</h3>
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="100"
                  value={saturation}
                  onInput={(event) => changeHSL(event, 2)}
                  style={{
                    backgroundColor: `hsl(${hue},
                       ${saturation}%,
                       50%)`,
                  }}
                />
                <input
                  type="text"
                  className="textBox"
                  value={saturation}
                  onInput={(event) => changeHSL(event, 2)}
                />
                <p>&#37;</p>
              </li>
              <li>
                <h3>Lightness</h3>
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="100"
                  value={lightness}
                  onInput={(event) => changeHSL(event, 3)}
                  style={{
                    backgroundColor: `hsl(${hue},
                       0%,
                       ${lightness}%)`,
                  }}
                />
                <input
                  type="text"
                  className="textBox"
                  value={lightness}
                  onInput={(event) => changeHSL(event, 3)}
                />
                <p>&#37;</p>
              </li>
              <li>
                <h3>Alpha</h3>
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="1"
                  step="0.01"
                  value={alpha}
                  onInput={(event) => changeHSL(event, 4)}
                  style={{
                    backgroundColor: `hsla(${hue},
                       100%,
                       50%,
                       ${alpha})`,
                  }}
                />
                <input
                  type="text"
                  className="textBox"
                  value={alpha}
                  onInput={(event) => changeHSL(event, 4)}
                />
              </li>
            </ul>
          </figcaption>
        </figure>
      </main>
      <footer>
        <button onClick={randomize}> Color Randomizer</button>
        <h2>Created by Jerid Fenderson</h2>
      </footer>
    </div>
  )
}
