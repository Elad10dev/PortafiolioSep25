export default function Banner() {
  return (
    <header className="w-full bg-blue-600 text-white py-5 px-4 shadow-md">
      <div className="max-w-5xl mx-auto grid grid-cols-3 items-center">
        {/* Columna izquierda vacía para balance */}
        <div></div>

        {/* Texto centrado y más pequeño */}
        <h1 className="text-center text-lg font-medium col-span-1 whitespace-nowrap">
          Bienvenido a mi portafolio... 👍
        </h1>

        {/* Botón a la derecha */}
        <div className="flex justify-end">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition font-medium">
            Iniciar sesión
          </button>
        </div>
      </div>
    </header>
  )
}