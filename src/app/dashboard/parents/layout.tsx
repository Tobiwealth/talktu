import ParentSidebar from '@/components/parentDashboard/ParentSidebar'

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="lg:flex ">
      <ParentSidebar currentPage="dashboard"/>
      {children}
    </section>
  )
}