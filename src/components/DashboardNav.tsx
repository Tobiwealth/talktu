import React from 'react'
import Image from 'next/image'
import Vector from '../../public/icons/Vector.svg'

const DashboardNav = () => {
	return (
		<nav>
			<div className="bg-[#DCE8FD] border-b-[1px] border-[#CBDCFC] py-8 flex justify-center items-center">
				<Image
					src={Vector}
					width={104.64}
					height={28.47}
					quality={100}
					alt="Logo"
					className=""
			    />
			</div>
		</nav>
	)
}

export default DashboardNav