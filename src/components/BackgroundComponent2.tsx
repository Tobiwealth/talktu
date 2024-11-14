import React from 'react'
import Image from 'next/image'
import Periwinkle from '../../public/icons/Periwinkle.svg'
import Tube from '../../public/icons/Tube.svg'
import Star2 from '../../public/icons/Star2.svg'
import Pill from '../../public/icons/Pill.svg'

const BackgroundComponent2 = () => {
	return (
		<div className=" ">
			<Image src={Star2} width={156.59} height={293.48} quality={100} alt="stroke" className="absolute top-[5.8rem] right-0" />
			<Image src={Pill} width={105.35} height={191.16} quality={100} alt="stroke" className="absolute top-[7.5rem] left-0" />
			<div className="relative">
				<Image src={Periwinkle} width={169.84} height={248.25} quality={100} alt="stroke" className="absolute bottom-0 left-0"/>
				<Image src={Tube} width={292.34} height={176.78} quality={100} alt="stroke" className="absolute bottom-0 right-0"/>
			</div>
		</div>
	)
}

export default BackgroundComponent2