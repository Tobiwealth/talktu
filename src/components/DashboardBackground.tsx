import React from 'react'
import Image from 'next/image'
import curve from '../../public/icons/curve.svg'
import Ellipse1231 from '../../public/icons/Ellipse1231.svg'
import Periwinkle2 from '../../public/icons/Periwinkle2.svg'
import UTube from '../../public/icons/UTube.svg'
import Star from '../../public/icons/Star.svg'
import Starr from '../../public/icons/Starr.svg'
import Starrr from '../../public/icons/Starrr.svg'
import Star3 from '../../public/icons/Star3.svg'
import Star4 from '../../public/icons/Star4.svg'
import Star5 from '../../public/icons/Star5.svg'
import Polygon from '../../public/icons/Polygon.svg'
import circle from '../../public/icons/circle.svg'

const DashboardBackground = () => {
	return (
		<div className="-z-50 ">
			<Image src={Ellipse1231} width={56.59} height={293.48} quality={100} alt="stroke" className="absolute top-[7.9rem] right-0" />
			<Image src={UTube} width={75.35} height={191.16} quality={100} alt="stroke" className="absolute top-[8.8rem] left-0" />
			<div className="flex justify-center items-center -z-50">
				<Image src={Star} width={15.4} height={15.4} quality={100} alt="star" className="absolute top-[20rem] right-[30rem]" />
				<Image src={Starr} width={22.4} height={22.4} quality={100} alt="star" className="absolute top-[10rem] left-[10rem]" />
				<Image src={Starrr} width={22.4} height={22.4} quality={100} alt="star" className="absolute top-[10rem] right-[15rem]" />
				<Image src={Star3} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[5.4rem] right-[28.3rem]" />
				<Image src={Star4} width={17.4} height={17.4} quality={100} alt="star" className="absolute bottom-[8.4rem] right-[2.3rem] z-10 " />
				<Image src={Star5} width={14.4} height={14.4} quality={100} alt="star" className="absolute bottom-[1.2rem] left-[14.3rem]" />
				<Image src={Starr} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[50%] right-[2rem]" />
				<Image src={circle} width={12.2} height={12.2} quality={100} alt="circle" className="absolute bottom-[30%] left-[17rem]" />
				<Image src={Polygon} width={15.4} height={15.4} quality={100} alt="polygon" className="absolute bottom-[40%] right-[15rem]" />
				<Image src={circle} width={14.2} height={14.2} quality={100} alt="circle" className="absolute bottom-[40%] left-[4rem]" />
			</div>
			<div className="relative">
				<Image src={curve} width={149.84} height={248.25} quality={100} alt="stroke" className="absolute bottom-0 left-0"/>
				<Image src={Periwinkle2} width={132.34} height={176.78} quality={100} alt="stroke" className="absolute bottom-0 right-0"/>
			</div>
		</div>
	)
}

export default DashboardBackground