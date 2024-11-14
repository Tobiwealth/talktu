import DashboardBackground from '@/components/DashboardBackground'
import KidsNavbar from '@/components/KidsNavbar'
import ParentSidebar from '@/components/parentDashboard/ParentSidebar'


export default function SLPLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-deep_blue ">
      <KidsNavbar/>
      <div className="z-50 relative">
        <section className="lg:flex ">
          <ParentSidebar currentPage="slp"/>
          {children}
        </section>
      </div>
      <DashboardBackground/>
    </section>
  )
}