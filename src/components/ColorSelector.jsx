import React from 'react'

export function ColorSelector(props) {
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
            value={props.hue}
            onInput={(event) => props.changeHSL(event, 1)}
            style={{
              backgroundColor: `hsl(${props.hue},
                     100%,
                     50%)`,
            }}
          />
          <input
            type="text"
            className="textBox"
            value={props.hue}
            onInput={(event) => props.changeHSL(event, 1)}
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
            value={props.saturation}
            onInput={(event) => props.changeHSL(event, 2)}
            style={{
              backgroundColor: `hsl(${props.hue},
                     ${props.saturation}%,
                     50%)`,
            }}
          />
          <input
            type="text"
            className="textBox"
            value={props.saturation}
            onInput={(event) => props.changeHSL(event, 2)}
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
            value={props.lightness}
            onInput={(event) => props.changeHSL(event, 3)}
            style={{
              backgroundColor: `hsl(${props.hue},
                     0%,
                     ${props.lightness}%)`,
            }}
          />
          <input
            type="text"
            className="textBox"
            value={props.lightness}
            onInput={(event) => props.changeHSL(event, 3)}
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
            value={props.alpha}
            onInput={(event) => props.changeHSL(event, 4)}
            style={{
              backgroundColor: `hsla(${props.hue},
                     100%,
                     50%,
                     ${props.alpha})`,
            }}
          />
          <input
            type="text"
            className="textBox"
            value={props.alpha}
            onInput={(event) => props.changeHSL(event, 4)}
          />
        </li>
      </ul>
    </figcaption>
  )
}
