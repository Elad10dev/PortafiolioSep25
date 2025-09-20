

export default function ProjectGrid() {
  return (
    <section className="mt-10 px-6">
      <h3 className="text-xl font-semibold mb-4">Proyectos destacados</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí irán las tarjetas de proyectos */}
        <div className="bg-white shadow rounded p-4">
          <h4 className="font-bold">Proyecto 1</h4>
          <p className="text-sm text-gray-600">Descripción breve del proyecto.</p>
          <button className="mt-2 text-blue-600 hover:underline">Ver más</button>
        </div>
      </div>
    </section>
  )
}