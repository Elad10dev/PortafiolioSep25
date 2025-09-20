
import Banner from '../componentes/Banner'
import ProfileCard from '../componentes/ProfileCard'
import ProjectGrid from '../componentes/ProjectGrid'

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Banner />
      <ProfileCard />
      <ProjectGrid />
    </main>
  )
}