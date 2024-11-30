"sue client";
import CTAButton from "@/components/subscription/CTAButton";
import FadeUp from "./_components/animated components/FadeUp";
import MaskText from "./_components/animated components/MaskText";
import FadeIn from "./_components/animated components/FadeIn";

export default function GettingStartedSection() {
	return (
		<section className="px-4 py-[106px] xl:pb-[181px] bg-[#EBF9FF]">
			<div className="container space-y-10">
				<div className="flex flex-col items-center gap-4 text-center">
					<MaskText
						phrases={["Get Started in three", "easy steps"]}
						tag="h2"
						className="font-bold text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] !leading-[120%]"
					/>
					<FadeUp
						delay={0.3}
						className="max-w-md mx-auto text-deep_blue md:text-lg lg:text-xl md:max-w-xl xl:text-2xl xl:max-w-2xl"
					>
						Getting started is simple—take the first step towards
						empowering your child with a personalized learning
						journey that builds confidence and communication skills
					</FadeUp>
					<FadeUp delay={0.4} className="w-full justify-center flex">
						<CTAButton href="/auth/signup" />
					</FadeUp>
				</div>
				<FadeUp className="max-w-[1137px] grid justify-center gap-8 mx-auto md:grid-cols-2 md:gap-4 md:grid-rows-2 lg:gap-6 xl:gap-8 lg:grid-cols-[4fr_3.5fr]">
					<div className="relative rounded-[15px] bg-[#C6E2FF] pt-8 group overflow-hidden max-w-[414px] md:row-span-2  md:justify-self-end lg:max-w-none lg:pt-[53px] flex flex-col justify-between">
						<div className="relative z-20 px-4 space-y-2 transition-all duration-300 ease-in-out lg:space-y-3 text-deep_blue group-hover:text-white sm:px-6 lg:px-8">
							<div className="text-2xl font-bold lg:text-3xl xl:text-[2rem]">
								Create an Account and take Assessment
							</div>
							<p className="lg:text-lg xl:text-xl lg:pr-12">
								Create your child’s account to set up a learning
								experience tailored to their unique strengths
								and need and take an assessment, guided by
								expert Speech-Language Pathologists, which helps
								us understand your child’s current communication
								abilities.
							</p>
						</div>
						<div className="relative z-20 mt-6">
							<svg
								width="310"
								height="415"
								viewBox="0 0 310 415"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="size-[250px] -translate-x-10 md:size-[300px] lg:size-[400px]"
							>
								<path
									d="M209.064 9.64385L-13.1705 41.4564L-86.0556 350.907L176.339 306.779L159.179 635.023L298.356 202.941L164.223 222.142L209.064 9.64385Z"
									fill="#3C7AEF"
									stroke="#0D41A2"
									strokeWidth="16"
									className="transition-all duration-300 ease-in-out group-hover:fill-sunglow-main group-hover:stroke-white"
								/>
							</svg>
						</div>
						<div className="absolute -top-[6rem] -right-[6rem] size-[100px] bg-[#3C7AEF] rounded-full rounded-tr-none origin-bottom-left z-10 group-hover:size-[1000px] lg:group-hover:size-[1500px] transition-all duration-300 ease-in"></div>
					</div>
					<div className="rounded-[15px] bg-[#E0D7FF] py-8 space-y-6 max-w-[414px] lg:max-w-none lg:py-[53px]">
						<div className="px-4 space-y-2 lg:space-y-3 sm:px-6 lg:px-8">
							<div className="text-2xl font-bold lg:text-3xl xl:text-[2rem]">
								Subscribe to a Plan
							</div>
							<p className="lg:text-lg xl:text-xl">
								Once the assessment is complete, choose a
								subscription plan that suits your family’s
								needs. Each plan unlocks full access to our
								comprehensive 12-month program, including video
								lessons, interactive flashcards, and
								activities—all designed to engage your child
								while they learn at their own pace
							</p>
						</div>
					</div>
					<div className="rounded-[15px] bg-[#FFDFC7] py-8 space-y-6 max-w-[414px] lg:max-w-none lg:py-[53px]">
						<div className="px-4 space-y-2 lg:space-y-3 sm:px-6 lg:px-8">
							<div className="text-2xl font-bold lg:text-3xl xl:text-[2rem]">
								Start Learning
							</div>
							<p className="lg:text-lg xl:text-xl">
								It’s time to begin the journey! Your child will
								have access to an exciting array of expert-led
								video lessons, hands-on activities, and fun
								flashcards to help them build essential speech
								and language skills. Every lesson is designed to
								be engaging and easy to follow, encouraging your
								child to enjoy learning and make steady progress
							</p>
						</div>
					</div>
				</FadeUp>
			</div>
		</section>
	);
}
