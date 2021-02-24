import React from 'react'

export function ColorSelector({
  hue,
  saturation,
  lightness,
  alpha,
  changeHSL,
}) {
  return (
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
  )
}
