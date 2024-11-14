'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import {useRouter, usePathname} from 'next/navigation'
import Link from 'next/link'
import Vector2 from '../../public/icons/Vector2.svg'
import kid_avatar from '../../public/icons/kid_avatar.svg'
import { GoHomeFill } from "react-icons/go";
import { FaBookOpen, FaRegFileLines, FaFileLines } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { PiFileTextFill } from "react-icons/pi";
import { LuHome } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";



const KidsNavbar = () => {
	const router = useRouter()
	const pathname = usePathname()
	const [closeMobile, setCloseMobile] = useState<boolean>(false);
	const handleMobileClick = (path:string): void => {
		router.push(`/${path}`)
		setCloseMobile(false)
	}

	return (
		<nav className="sticky top-0 z-[99999] h-20 lg:h-24 ">
			<div className=" bg-deep_blue bg-[#091A396B] border-b-[1px] border-[#112448] hidden lg:flex justify-between items-center md:px-8 lg:px-16 py-4 w-full">
				<div className="w-1/3 ">
					<Image
						src={Vector2}
						width={107}
						height={29.11}
						quality={100}
						alt="Logo"
						className=""
				    />
				</div>
				{ !pathname.startsWith("/dashboard/parents") && <div className="flex justify-center items-center gap-4 w-1/3 ">
					<Link href="/dashboard" className="flex flex-col items-center justify-center gap-2 bg-[#11244842] w-[71px] h-[64px] border-[1px] border-[#112448] rounded-[14px]">
					    {pathname === "/dashboard" ? <GoHomeFill className="text-sunglow-main text-xl"/>
					    : <LuHome className="text-[#3E64AB] text-xl"/>}
					    <h3 className={`font-nunito font-medium text-sm ${pathname === "/dashboard" ? "text-sunglow-main":"text-[#3E64AB]" }`}>Home</h3>
					</Link>
					<Link href="/dashboard" className="flex flex-col items-center justify-center gap-2 bg-[#11244842] w-[71px] h-[64px] border-[1px] border-[#112448] rounded-[14px]">
					    {/*<FaBookOpen className="text-sunglow-main text-xl"/>*/}
					    <IoBookOutline className="text-[#3E64AB] text-xl"/>
					    <h3 className="text-[#3E64AB] font-nunito font-medium text-sm">Activity</h3>
					</Link>
					<Link href="/dashboard/report" className="flex flex-col items-center justify-center gap-2 bg-[#11244842] w-[71px] h-[64px] border-[1px] border-[#112448] rounded-[14px]">
					    {pathname === "/dashboard/report" ? <FaFileLines className="text-sunglow-main text-xl"/>
					    : <FaRegFileLines className="text-[#3E64AB] text-xl"/>}
					    <h3 className={`font-nunito font-medium text-sm ${pathname === "/dashboard/report" ? "text-sunglow-main":"text-[#3E64AB]" }`}>Report</h3>
					</Link>
				</div>}
				<div className="flex justify-end items-center gap-4 w-1/3 ">
					<div className="flex items-center gap-2 h-[42px] w-[109px] bg-[#11244842] border-[1px] border-[#112448] rounded-[12px] px-1">
						<Image
							src={kid_avatar}
							width={36}
							height={32}
							quality={100}
							alt="Logo"
							className=""
				        />
				        <p className="font-nunito font-semibold text-sm text-retro_blue-main">Sammy</p>
					</div>
					<button onClick={() => router.push('/dashboard/parents')} className="text-white font-nunito font-medium text-sm flex justify-center items-center gap-1 bg-retro_blue-main h-[2.25rem] w-[7.8rem] rounded-[9px] shadowbox3"><MdOutlinePeopleAlt className="text-white text-xl"/>For Parents</button>
				</div>
			</div>
		    {/*mobile view*/}
			{   
				<div className="  lg:hidden w-full flex flex-col">
					<div className="bg-deep_blue bg-[#091A396B] px-8 py-6 border-b-[1px] border-[#112448] flex justify-between items-center w-full ">
					   { closeMobile ?  <LiaTimesSolid onClick={() => setCloseMobile(false)} className="text-2xl font-bold text-[#F3FAFD] cursor-pointer" />
					        :<MdOutlineMenu onClick={() => setCloseMobile(true)} className="text-2xl text-[#F3FAFD] cursor-pointer" />   
					   }
						<Image
							src={Vector2}
							width={72.5}
							height={19.72}
							quality={100}
							alt="Logo"
							className=""
					    />
					</div>
					<div 
					    className={`${closeMobile ? "opacity-100 translate-x-0 duration-1000 ease-in" : "absolute opacity-0 translate-x-[-200%] duration-1000 ease-in-out z-[-999999]"} flex flex-col gap-8 w-1/2 px-8 py-8 h-screen bg-deep_blue`}
					>
						{ !pathname.startsWith("/dashboard/parents") && <div className=" flex flex-col justify-center gap-8 ">
							<div className="flex items-center justify-start gap-2 ">
							    <GoHomeFill className="text-[#3E64AB] text-xl"/>
							    <h3 className="text-[#3E64AB] font-nunito font-medium text-sm">Home</h3>
							</div>
							<div className="flex items-center justify-start gap-2 ">
							    <IoBookOutline className="text-[#3E64AB] text-xl"/>
							    <h3 className="text-[#3E64AB] font-nunito font-medium text-sm">Activity</h3>
							</div>
							<div className="flex items-center justify-start gap-2">
							    <FaRegFileLines className="text-[#3E64AB] text-xl"/>
							    <h3 className="text-[#3E64AB] font-nunito font-medium text-sm">Report</h3>
							</div>
						</div>}
						<div className="flex flex-col gap-8 ">
							<div className="flex items-center gap-2 h-[42px] w-[109px] bg-[#11244842] border-[1px] border-[#112448] rounded-[12px] px-1">
								<Image
									src={kid_avatar}
									width={36}
									height={32}
									quality={100}
									alt="Logo"
									className=""
						        />
						        <p className="font-nunito font-semibold text-sm text-retro_blue-main">Sammy</p>
							</div>
							<button onClick={() => handleMobileClick("dashboard/parents")} className="text-white font-nunito font-medium text-sm flex justify-center items-center gap-1 bg-retro_blue-main h-[2.25rem] w-[7.8rem] rounded-[9px] shadowbox3"><MdOutlinePeopleAlt className="text-white text-xl"/>For Parents</button>
						</div>
					</div>
				</div>
			}
		</nav>
	)
}

export default KidsNavbar