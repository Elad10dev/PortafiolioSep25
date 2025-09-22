import Banner from '../componentes/Banner'

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Banner arriba */}
      <Banner />

      {/* Contenedor principal en dos columnas */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna izquierda: Perfil */}
        

        {/* Columna derecha: Proyectos */}
        
      </div>
    </main>
  )
}