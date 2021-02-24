import React from 'react'

export function ColorDisplay(props) {
  return (
    <figure>
      <div
        className="box"
        style={{
          backgroundColor: `hsla(${props.hue},
               ${props.saturation}%,
               ${props.lightness}%,
               ${props.alpha})`,
        }}
      >
        <h2
          style={{
            color: `hsl(${props.hue},
             ${props.saturation}%,
             ${props.lightness}%)`,
          }}
        >
          Sometimes the things that you're searching for has been in front of
          you the whole time.
        </h2>
      </div>
    </figure>
  )
}
