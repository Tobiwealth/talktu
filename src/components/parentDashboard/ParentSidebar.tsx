'use client'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import GoBackButton from '@/components/GoBackButton'

interface ParentSidebarProps {
  currentPage: string;
}

const ParentSidebar: React.FC<ParentSidebarProps> = ({currentPage}) => {
	const pathname = usePathname()

	return (
		<div className="px-8 lg:px-16">
			<GoBackButton />
			<div className="w-[16.3125rem] h-[15.875rem] border-[1px] border-[#112448] bg-[#11244842] rounded-[12px] mt-8 hidden lg:block">
				<ul className="font-nunito font-medium text-sm flex flex-col justify-center items-center gap-6 py-4">
					<Link 
					    className={`${pathname.includes("/profile") ? "text-white rounded-[8px] bg-[#112448] py-2 py-2 w-[80%] text-center" : "text-[#3E64AB]"}  `} 
					    href={currentPage === 'dashboard' ? "/dashboard/parents/profile" : currentPage === 'slp' ? "/slp": "/school/profile"}
					>Profile</Link>
					<Link 
					    className={`${pathname.includes("/feedback") ? "text-white rounded-[8px] bg-[#112448] py-2 w-[80%] text-center" : "text-[#3E64AB]"}  `} 
					    href={currentPage === 'dashboard' ? "/dashboard/parents/feedback" : currentPage === 'slp' ? "/slp/feedback": "/school/feedback"}
					>Feedback</Link>
					<Link 
					    className={`${pathname.includes("/help") ? "text-white rounded-[8px] bg-[#112448] py-2 py-2 w-[80%] text-center" : "text-[#3E64AB]"}  `} 
					    href={currentPage === 'dashboard' ? "/dashboard/parents/help" : currentPage === 'slp' ? "/slp/help": "/school/help"}
					>Help</Link>
					<Link 
					    className={`${pathname.includes("/settings") ? "text-white rounded-[8px] bg-[#112448] py-2 py-2 w-[80%] text-center" : "text-[#3E64AB]"}  `} 
					    href={currentPage === 'dashboard' ? "/dashboard/parents/settings" : currentPage === 'slp' ? "/slp/settings": "/school/settings"}
					>Account Settings</Link>
				</ul>
			</div>
		</div>
	)
}

export default ParentSidebar