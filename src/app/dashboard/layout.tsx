import DashboardBackground from '@/components/DashboardBackground'
import KidsNavbar from '@/components/KidsNavbar'

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-deep_blue ">
      <KidsNavbar/>
      <div className="z-50 relative">
        {children}
      </div>
      <DashboardBackground/>
    </section>
  )
}