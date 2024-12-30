"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import FadeIn from "./_components/animated components/FadeIn";
import FadeUp from "./_components/animated components/FadeUp";
import MaskText from "./_components/animated components/MaskText";
import { teamMembers } from "./data";

export default function About() {
	const [defaultCard, setDefaultCard] = useState(0);
	const [activeCard, setActiveCard] = useState<number | null>(null);

	const handleActiveMobile = (id: number) => {
		setActiveCard((prev) => (prev === id ? null : id));
	};

	useEffect(() => {
		if (activeCard !== null) {
			setDefaultCard(activeCard - 1);
		}
	}, [activeCard]);

	return (
		<section id="about" className="px-4 pt-[123px] lg:px-8 pb-[157px]">
			<div className="container space-y-14 md:space-y-[89px] max-w-[1202px]">
				<div className="flex flex-col">
					<MaskText
						phrases={["ABOUT US"]}
						tag="p"
						className="font-bold font-nunitosans text-[#4E5F76] lg:text-lg xl:text-2xl"
					/>
					<FadeUp delay={0.1} className="min-[515px]:hidden">
						<h2 className="font-bold text-2xl !leading-[120%] mb-8 mt-2">
							Building a world where every child has the ability
							to communicate.
						</h2>
					</FadeUp>
					<div className="mb-8 mt-2 max-w-[500px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[800px] hidden min-[515px]:block">
						<MaskText
							phrases={[
								"Building a world where every child has the",
								"ability to communicate.",
							]}
							tag="h2"
							className="font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem] !leading-[120%]"
						/>
					</div>
					<div className="text-[#4E5F76] max-w-xl md:text-lg lg:text-xl md:max-w-2xl lg:max-w-3xl space-y-2 lg:space-y-3">
						<FadeUp delay={0.2}>
							Our team possesses over 15 years of collective
							experience in Audiology, Speech-Language Therapy,
							Early Child Education, Special Education, Software
							Engineering, Machine Learning, Data Engineering,
							Business Operations, and Project Management.
						</FadeUp>
						<FadeUp delay={0.3}>
							With a collective vision to build an impactful
							solution, we are committed to building a world where
							every child has the ability to communicate.
						</FadeUp>
					</div>
				</div>

				<div className="flex flex-wrap justify-center gap-8 sm:gap-x-4 sm:gap-y-10 lg:flex-nowrap sm:p-0 md:hidden">
					{teamMembers.map((member) => (
						<FadeUp key={member.name}>
							<div
								onClick={() => handleActiveMobile(member.id)}
								className="max-w-[400px]"
							>
								<Image
									src={member.imgSmall}
									alt={member.name}
									width={581}
									height={588}
								/>
								<div className="flex justify-between gap-4 mt-3">
									<div className="font-nunitosans">
										<div className="text-xl font-bold xl:text-2xl">
											{member.name}
										</div>
										<div className="font-semibold text-[#4E5F76]">
											{member.role}
										</div>
									</div>
									<div className="flex gap-3">
										<Link
											href={member.linkedIn}
											target="_blank"
											rel="noreferrer"
											className="size-[35px] flex items-center rounded-full justify-center bg-neutral-300 hover:bg-neutral-400 transition-all duration-200 ease-in-out"
										>
											<Image
												src="images/linkedin.svg"
												alt="linkedin logo"
												width={17}
												height={16}
												className="size-[20px]"
											/>
										</Link>
										<div
											className={twMerge(
												clsx(
													"size-[35px] flex items-center rounded-full justify-center bg-neutral-300 transition-all duration-[600ms] hover:bg-neutral-400",
													activeCard === member.id
														? "rotate-180"
														: "rotate-0"
												)
											)}
										>
											<Image
												src="images/arrow-down.svg"
												alt="arrow"
												width={17}
												height={16}
												className="size-[20px]"
											/>
										</div>
									</div>
								</div>
								<div
									className={twMerge(
										clsx(
											"font-nunito text-[#4E5F76] space-y-2 overflow-hidden mt-4 transition-all duration-[600ms] ease-in-out",
											activeCard === member.id
												? "max-h-[1000px]"
												: "max-h-0"
										)
									)}
								>
									{member.bio.map((item, index) => (
										<p key={index}>{item}</p>
									))}
								</div>
							</div>
						</FadeUp>
					))}
				</div>

				<div className="md:flex gap-10 lg:gap-20 hidden">
					<div className="w-[40%] lg:w-full lg:max-w-[450px] xl:max-w-[489px]">
						<FadeIn>
							<Image
								src={teamMembers[defaultCard].imgBig}
								alt={teamMembers[defaultCard].name}
								width={200}
								height={200}
								className="min-w-full"
							/>
						</FadeIn>
					</div>
					<ul className="flex-1 space-y-6 max-w-[613px] justify-self-end lg:hidden">
						{teamMembers.map((member, index) => (
							<FadeUp key={member.name} delay={index * 0.1}>
								<li
									onClick={() =>
										handleActiveMobile(member.id)
									}
									className="border-b border-neutral-300 pb-4 transition-all duration-[600ms] ease-in-out"
								>
									<div className="flex justify-between">
										<div className="font-nunitosans">
											<div className="text-xl font-bold xl:text-2xl">
												{member.name}
											</div>
											<div className="font-semibold text-[#4E5F76] max-w-[300px]">
												{member.role}
											</div>
										</div>
										<Link
											href={member.linkedIn}
											target="_blank"
											rel="noreferrer"
											className="size-[35px] flex items-center rounded-full justify-center bg-neutral-300 hover:bg-neutral-400 transition-all duration-200 ease-in-out"
										>
											<Image
												src="images/linkedin.svg"
												alt="linkedin logo"
												width={17}
												height={16}
												className="size-[20px]"
											/>
										</Link>
									</div>
									<div
										className={twMerge(
											clsx(
												"font-nunito text-[#4E5F76] space-y-2 overflow-hidden mt-2 transition-all duration-[600ms] ease-in-out",
												activeCard === member.id
													? "max-h-[1000px]"
													: "max-h-0"
											)
										)}
									>
										{member.bio.map((item, index) => (
											<p key={index}>{item}</p>
										))}
									</div>
								</li>
							</FadeUp>
						))}
					</ul>
					<ul className="flex-1 space-y-6 max-w-[613px] justify-self-end hidden lg:block xl:flex-none xl:ml-auto">
						{teamMembers.map((member, index) => (
							<FadeUp key={member.name} delay={index * 0.15}>
								<li
									key={member.id}
									onMouseEnter={() =>
										setActiveCard(member.id)
									}
									onMouseLeave={() => setActiveCard(null)}
									className={twMerge(
										clsx(
											"border-b border-neutral-300 transition-all duration-[600ms] ease-in-out",
											activeCard === member.id
												? "pb-4"
												: "pb-10"
										)
									)}
								>
									<div className="flex justify-between">
										<div className="font-nunitosans">
											<div className="text-xl font-bold xl:text-2xl">
												{member.name}
											</div>
											<div className="font-semibold text-[#4E5F76] max-w-[300px]">
												{member.role}
											</div>
										</div>
										<Link
											href={member.linkedIn}
											target="_blank"
											rel="noreferrer"
											className="size-[41px] flex items-center rounded-full justify-center bg-neutral-300 hover:bg-neutral-400 transition-all duration-200 ease-in-out"
										>
											<Image
												src="images/linkedin.svg"
												alt="linkedin logo"
												width={17}
												height={16}
												className="size-[20px]"
											/>
										</Link>
									</div>
									<div
										className={twMerge(
											clsx(
												"font-nunito text-[#4E5F76] space-y-2 overflow-hidden mt-3 transition-all duration-[1000ms] ease-in-out",
												activeCard === member.id
													? "max-h-[1000px]"
													: "max-h-0"
											)
										)}
									>
										{member.bio.map((item, index) => (
											<p key={index}>{item}</p>
										))}
									</div>
								</li>
							</FadeUp>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
