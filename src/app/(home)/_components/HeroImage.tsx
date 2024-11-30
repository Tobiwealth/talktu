import Image from "next/image";
import React from "react";
import FadeIn from "./animated components/FadeIn";

export default function HeroImage() {
	return (
		<FadeIn
			delay={0.8}
			className="absolute bottom-0 left-0 right-0 flex overflow-hidden h-[300px] lg:h-[420px] xl:max-w-[1536px] xl:mx-auto"
		>
			{/* rounded lines */}
			<Image
				src="/images/rounded-lines-1.svg"
				alt="illustration"
				width={200}
				height={200}
				className="absolute -bottom-[30%] -left-[41%] w-[80%] max-w-[335px] z-20 min-[480px]:-left-[30%] sm:-left-[30%] sm:-bottom-[50%] sm:max-w-[400px] md:-left-[24%] md:-bottom-[46%] min-[900px]:-left-[18%] lg:max-w-none lg:w-auto lg:-left-[17%] lg:-bottom-[70%] xl:-bottom-[77%] xl:top-0"
			/>
			<Image
				src="/images/rounded-lines-2.svg"
				alt="illustration"
				width={200}
				height={200}
				className="absolute -bottom-[30%] -right-[41%] w-[80%] max-w-[335px] z-20 min-[480px]:-right-[30%] sm:max-w-[400px] sm:-bottom-[34%] md:-bottom-[41%] md:-right-[24%] min-[900px]:-right-[18%] lg:max-w-[500px] lg:w-auto xl:top-[5px] xl:-right-[15%]"
			/>

			{/* kid 1 */}
			<div className="absolute bottom-[40%] w-full max-w-[90px] left-[4%] z-30 sm:max-w-[100px] sm:bottom-[45%] md:max-w-[140px] md:bottom-[38%] lg:max-w-[192px] -rotate-[16.5deg] xl:left-[3%] lg:bottom-[19%]  xl:bottom-[50%]">
				<Image
					src="/images/crown-lines.svg"
					alt="illustration"
					width={200}
					height={200}
					className="absolute w-[4.5rem] -top-[1.75rem] right-[0rem] min-[900px]:right-4 lg:right--0 md:w-[6rem] md:-top-[2.3rem] xl:w-[7rem] lg:w-auto lg:-top-[3rem] xl:-top-[2rem]"
				/>
				<Image
					src="/images/kid-1.png"
					alt="illustration"
					width={458}
					height={470}
					className="max-w-full"
				/>
			</div>

			{/* kid 2 */}
			<div className="absolute bottom-[70%] w-full max-w-[60px] left-[41%] z-30 sm:max-w-[80px] sm:left-[28%] sm:bottom-[35%] md:max-w-[110px] min-[900px]:max-w-[130px] min-[900px]:bottom-[45%] rotate-[7.77deg] lg:left-[24%] lg:bottom-[52%] xl:max-w-[162px] xl:left-[25%] xl:bottom-[54%]">
				<Image
					src="/images/crown-lines.svg"
					alt="illustration"
					width={200}
					height={200}
					className="absolute w-[4.5rem] -top-[1.6rem] right-0 sm:-top-[2rem] md:w-[6rem] md:-top-[2.5rem] min-[900px]:right-4 lg:w-auto lg:-top-[3rem] lg:right-0 xl:right-[14px] xl:-top-[3.5rem]"
				/>
				<Image
					src="/images/kid-2.png"
					alt="illustration"
					width={351}
					height={376}
					className="max-w-full"
				/>
			</div>

			{/* kid 3 */}
			<div className="absolute bottom-[26%] w-full max-w-[80px] left-[39%] z-30 sm:max-w-[90px] sm:left-[52%] sm:bottom-[23%] md:max-w-[110px] min-[900px]:max-w-[140px] -rotate-[16.5deg] lg:max-w-[172px] lg:bottom-[25%] xl:max-w-[192px] xl:bottom-[41%]">
				<Image
					src="/images/crown-lines.svg"
					alt="illustration"
					width={200}
					height={200}
					className="absolute w-[4.5rem] -top-[1.75rem] right-[0rem] min-[900px]:right-4 lg:right--0 md:w-[6rem] md:-top-[2.3rem] lg:w-auto lg:-top-[3rem]"
				/>
				<Image
					src="/images/kid-3.png"
					alt="illustration"
					width={458}
					height={470}
					className="max-w-full"
				/>
			</div>

			{/* kid 4 */}
			<div className="absolute bottom-[30%] w-full max-w-[90px] right-[4%] z-30 sm:max-w-[100px] sm:right-[8%] sm:bottom-[45%] md:max-w-[130px] md:bottom-[30%] md:right-[6%] rotate-[7.77deg] lg:max-w-[192px] lg:bottom-[26%] lg:right-[6%] xl:bottom-[49%] xl:right-[7%]">
				<Image
					src="/images/crown-lines.svg"
					alt="illustration"
					width={200}
					height={200}
					className="absolute w-[4.5rem] -top-[1.75rem] right-[0rem] min-[900px]:right-4 lg:right--0 md:w-[6rem] md:-top-[2.3rem] lg:w-auto lg:-top-[3rem] xl:-top-[3.5rem]"
				/>
				<Image
					src="/images/kid-4.png"
					alt="illustration"
					width={468}
					height={501}
					className="max-w-full"
				/>
			</div>

			{/* dots group */}
			<Image
				src="/images/dots.svg"
				alt="illustration"
				width={200}
				height={200}
				className="absolute -bottom-[30%] left-[50%] w-[60%] max-w-[335px] -translate-x-1/2	z-10 min-[480px]:-bottom-[50%] min-[480px]:w-full sm:-bottom-[60%] md:max-w-[60%] md:-bottom-[100%]  min-[900px]:-bottom-[125%] lg:-bottom-[100%] xl:-bottom-[130%]"
			/>

			{/* single dots */}
			<div className="absolute size-3 rounded-full bg-[#F8C741] left-[10%] top-[10%] sm:left-[4%] sm:top-[3%]"></div>
			<div className="absolute size-3 rounded-full bg-[#FFB6C1] left-[85%] top-[11%] sm:left-[93%] sm:top-[2%]"></div>
			<div className="absolute size-3 rounded-full bg-[#F8C741] left-[65%] top-[30%] sm:left-[69%] sm:top-[36%] xl:hidden"></div>
			<div className="absolute size-3 rounded-full bg-[#F8C741] left-[32%] top-[30%] sm:left-[46%] sm:top-[50%] xl:hidden"></div>
			<div className="absolute size-3 rounded-full bg-[#FFB6C1] right-[25%] bottom-[11%] hidden min-[900px]:block"></div>
			<div className="absolute size-3 rounded-full bg-[#FFB6C1] left-[29%] bottom-[31%] hidden min-[900px]:block"></div>
			<div className="absolute rounded-full bg-[#F8C741] left-[73%] top-[27%] size-[19px] hidden xl:block"></div>
			<div className="absolute rounded-full bg-[#F8C741] left-[44%] top-[29%] size-[19px] hidden xl:block"></div>
		</FadeIn>
	);
}
