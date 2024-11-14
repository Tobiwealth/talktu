import BackgroundComponent from '@/components/BackgroundComponent'
import DashboardNav from '@/components/DashboardNav'

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      <DashboardNav/>
      {children}
      <BackgroundComponent/>
    </section>
  )
}