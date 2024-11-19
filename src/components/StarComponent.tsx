import React from 'react'
import Image from 'next/image'
import Star from '../../public/icons/Star.svg'
import Starr from '../../public/icons/Starr.svg'
import Starrr from '../../public/icons/Starrr.svg'
import Star3 from '../../public/icons/Star3.svg'
import Star4 from '../../public/icons/Star4.svg'
import Star5 from '../../public/icons/Star5.svg'
import Polygon from '../../public/icons/Polygon.svg'
import circle from '../../public/icons/circle.svg'

const StarComponent = () => {
	return (
		<div className="flex flex-col justify-evenly h-full">
			
			<div className="flex justify-center items-center -z-50">
				<Image src={Star} width={15.4} height={15.4} quality={100} alt="star" className="absolute bottom-[30rem] right-[30rem]" />
				<Image src={Starr} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[40rem] left-[10rem]" />
				<Image src={Starrr} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[20rem] right-[15rem]" />
				<Image src={Starr} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[50rem] right-[2rem]" />
				<Image src={circle} width={12.2} height={12.2} quality={100} alt="circle" className="absolute bottom-[35rem] left-[17rem]" />
				<Image src={Star3} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[15.4rem] right-[28.3rem]" />
				<Image src={circle} width={12.2} height={12.2} quality={100} alt="circle" className="absolute bottom-[45rem] left-[17rem]" />
				<Image src={Star3} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[75.4rem] right-[28.3rem]" />
				<Image src={Star4} width={17.4} height={17.4} quality={100} alt="star" className="absolute bottom-[8.4rem] right-[2.3rem] z-10 " />
				<Image src={Star5} width={14.4} height={14.4} quality={100} alt="star" className="absolute bottom-[61.2rem] left-[14.3rem]" />
				<Image src={Star5} width={14.4} height={14.4} quality={100} alt="star" className="absolute bottom-[1.2rem] left-[14.3rem]" />
				<Image src={Starr} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[50%] right-[2rem]" />
				<Image src={circle} width={12.2} height={12.2} quality={100} alt="circle" className="absolute bottom-[30%] left-[17rem]" />
				<Image src={Starr} width={22.4} height={22.4} quality={100} alt="star" className="absolute bottom-[80%] right-[2rem]" />
				<Image src={circle} width={12.2} height={12.2} quality={100} alt="circle" className="absolute bottom-[50%] left-[17rem]" />
				<Image src={Polygon} width={15.4} height={15.4} quality={100} alt="polygon" className="absolute bottom-[40%] right-[15rem]" />
				<Image src={circle} width={14.2} height={14.2} quality={100} alt="circle" className="absolute bottom-[40%] left-[4rem]" />
			</div>
		</div>
	)
}

export default StarComponent