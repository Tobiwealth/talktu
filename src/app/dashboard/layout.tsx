import DashboardBackground from '@/components/DashboardBackground'
import KidsNavbar from '@/components/KidsNavbar'
import QueryProvider from '@/providers/QueryProvider'

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-deep_blue ">
      <KidsNavbar/>
      <div className="relative z-50">
        <QueryProvider>
        {children}
        </QueryProvider>
      </div>
      <DashboardBackground/>
    </section>
  )
}

