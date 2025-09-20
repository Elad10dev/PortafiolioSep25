// src/components/ProfileCard.tsx

import profileImg from '../assets/ladio.jpg'

export default function ProfileCard() {
  return (
    <section className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      {/* Imagen reducida y posicionada */}
      <img
            src={profileImg}
            alt="Eladio"
            className="relative top-4 right-4 rounded-full shadow-sm object-cover w-16 h-16"
            style={{ width: '5rem', height: '5rem' }}
            />

      {/* Contenido principal */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Eladio
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Desarrollador autodidacta, resiliente y metódico. Apasionado por la
          automatización, scripting multiplataforma y creación de entornos
          reproducibles.
        </p>
      </div>
    </section>
  )
}
