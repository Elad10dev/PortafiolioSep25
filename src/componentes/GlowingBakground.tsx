// src/componentes/GlowingBackground.tsx
import React from 'react'
import '../styles/glowing.css'

export default function GlowingBackground() {
  return (
    <div className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div className="glow-wrapper">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glowing">
            {[1, 2, 3].map((n) => (
              <span key={n} style={{ '--i': n } as React.CSSProperties}></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}