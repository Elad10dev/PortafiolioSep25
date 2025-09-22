// src/App.tsx
import AppRoutes from './routes/AppRoutes'
import GlowingBackground from './componentes/GlowingBakground'

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-gray-100">
      {/* Fondo animado en toda la pantalla */}
      <GlowingBackground />

      {/* Contenido principal centrado */}
      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-8">
        <AppRoutes />
      </main>
    </div>
  )
}