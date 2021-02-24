import React from 'react'

export function ColorDisplay({ hue, saturation, lightness, alpha }) {
  return (
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
          Sometimes the things that you're searching for has been in front of
          you the whole time.
        </h2>
      </div>
    </figure>
  )
}
