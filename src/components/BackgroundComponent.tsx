import React from 'react'
import Image from 'next/image'
import Rectangle1 from '../../public/icons/Rectangle1.svg'
import Subtract from '../../public/icons/Subtract.svg'
import Union from '../../public/icons/Union.svg'
import Unionshape from '../../public/icons/Unionshape.svg'

const BackgroundComponent = () => {
	return (
		<div className=" ">

			<Image src={Union} width={106.59} height={293.48} quality={100} alt="stroke" className="w-[25px] md:w-[106px] absolute top-[7rem] right-0" />
			<Image src={Unionshape} width={104.35} height={191.16} quality={100} alt="stroke" className="w-[23px] md:w-[104px] absolute top-[8.5rem] left-0" />
			<div className="relative">
				<Image src={Rectangle1} width={199.84} height={248.25} quality={100} alt="stroke" className="w-[80px] md:w-[199px] absolute bottom-0 left-0"/>
				<Image src={Subtract} width={230.34} height={176.78} quality={100} alt="stroke" className="w-[100px] md:w-[230px] absolute bottom-0 right-0"/>
			</div>
		</div>
	)
}

export default BackgroundComponent