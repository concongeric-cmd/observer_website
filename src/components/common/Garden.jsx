export default function Garden() {
  return (
    <svg
      className="garden"
      viewBox="0 0 620 430"
      role="img"
      aria-label="Generic learning garden editorial illustration"
    >
      <circle cx="478" cy="88" r="47" fill="#e3ae7d" />
      <path d="M22 300L315 135 600 290 309 454Z" fill="#b8c5a7" />
      <path d="M22 300v17l287 156v-19z" fill="#91a184" />
      <path d="M309 454l291-164v17L309 473z" fill="#7d947b" />
      <path d="M104 277L311 161 513 274 307 391Z" fill="#e0d9c6" />
      <path d="M104 277v35l203 113v-34z" fill="#dfc6a0" />
      <path d="M307 391l206-117v35L307 425z" fill="#c8aa82" />
      <path d="M91 269L310 146 530 269 307 395Z" fill="#f4e9d5" />
      <ellipse cx="308" cy="270" rx="116" ry="66" fill="#a5b193" />
      <ellipse cx="308" cy="264" rx="116" ry="66" fill="#c6d1ae" />
      <path
        d="M193 267c33 20 57 29 116 20 40-6 61-1 103 9"
        fill="none"
        stroke="#eadcbd"
        strokeWidth="17"
      />
      {[130, 166, 202, 238, 274].map((x, i) => (
        <g key={x} transform={'translate(' + x + ' ' + (292 + i * 20) + ')'}>
          <path d="M0 0v29l22 12v-29z" fill="#596e60" />
          <path d="M4 5v21l14 8v-21z" fill="#9aaf9e" />
        </g>
      ))}
      {[340, 376, 412, 448, 484].map((x, i) => (
        <path
          key={x}
          transform={'translate(' + x + ' ' + (380 - i * 20) + ')'}
          d="M0 0v28l20-12v-28z"
          fill="#567360"
        />
      ))}
      {[
        [166, 211, 1],
        [380, 211, 0.9],
        [478, 326, 0.8],
        [100, 326, 0.8],
        [314, 245, 0.8],
      ].map(([x, y, s], i) => (
        <g
          key={i}
          transform={'translate(' + x + ' ' + y + ') scale(' + s + ')'}
        >
          <path d="M0 0v69" stroke="#706f4d" strokeWidth="7" />
          <ellipse
            cy="-3"
            rx="26"
            ry="38"
            fill={i % 2 ? '#6f8868' : '#456f56'}
          />
          <ellipse cx="-15" cy="6" rx="20" ry="27" fill="#64855f" />
          <path
            d="M0 5v-22M0 24l-13-16"
            stroke="#92a178"
            fill="none"
            strokeWidth="2"
          />
        </g>
      ))}
      <path
        d="M226 193l32-18M237 200l32-18M248 207l32-18M259 214l32-18M270 221l32-18"
        stroke="#fff8e7"
        strokeWidth="2"
      />
      {[
        [342, 307, '#bd7256'],
        [287, 317, '#e2b356'],
        [420, 265, '#49675b'],
        [216, 275, '#b56f54'],
      ].map(([x, y, c], i) => (
        <g key={i} transform={'translate(' + x + ' ' + y + ')'}>
          <circle cy="-9" r="5" fill="#d1a57b" />
          <path d="M-4 0v14m8-14v14" stroke="#596550" strokeWidth="3" />
          <path d="M-5-3h10v10h-10z" fill={c} />
        </g>
      ))}
    </svg>
  )
}
