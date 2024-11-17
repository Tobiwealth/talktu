import NavHeader from "@/components/NavHeader";
import Image from "next/image";
import Link from "next/link";

export default function CreateChildProfile() {
	return (
		<div className="relative flex flex-col w-screen min-h-screen bg-retro_blue-100 overflow-hidden">
			<NavHeader backLink />
			<div className="relative flex justify-center flex-1 overflow-hidden px-4 pt-16 md:pt-24">
				<div className="relative z-50 bg-white rounded-3xl w-full shadow-[0px_12px_0px] shadow-retro_blue-400 h-fit flex flex-col px-4 sm:px-8 py-12 gap-9 max-w-[450px] self-start lg:max-w-[533px] lg:px-8 min-[1300px]:scale-[0.9]  sm:scale-[0.8]">
					<form className="space-y-6">
						<div className="space-y-6">
							<div className="size-[100px] rounded-[25px] bg-neutral-200 mx-auto lg:size-[120px]"></div>
							<h2 className="text-2xl font-bold lg:text-3xl text-dark-800 font-nunitosans text-center">
								Create child’s profile
							</h2>
						</div>
						<div className="space-y-6">
							<div className="form-field">
								<label htmlFor="phone">Child’s full name</label>
								<input
									id="phone"
									type="text"
									placeholder="Enter full name"
									className="input-box"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="phone">Choose a Nickname</label>
								<input
									id="phone"
									type="text"
									placeholder="Enter a nickname"
									className="input-box"
								/>
							</div>
						</div>
						<Link
							href={"/onboarding?user=parent"}
							className="form-btn block text-center"
						>
							Create Profile
						</Link>
					</form>
				</div>
				{/* <SuccessModal
					title="Payment Received"
					description="Login to your account to access your Sammy’s learning plan"
					CTA="Log In"
					redirectTo="/auth/login"
				/> */}
				<Image
					src={"/images/pill.svg"}
					alt="bg-icon-1"
					width={100}
					height={100}
					className="hidden lg:block absolute top-8 left-0 z-10 w-[120px]"
				/>
				<Image
					src={"/images/star2.svg"}
					alt="bg-icon-3"
					width={100}
					height={100}
					className="hidden lg:block absolute z-10 w-auto -top-5 right-0"
				/>
				<Image
					src={"/images/tube2.svg"}
					alt="bg-icon-2"
					width={100}
					height={100}
					className="hidden lg:block absolute z-10 right-0 bottom-0 w-auto"
				/>
				<Image
					src={"/images/periwinkle2.svg"}
					alt="bg-icon-4"
					width={100}
					height={100}
					className="hidden lg:block absolute bottom-0 -left-16 z-10 size-[300px]"
				/>
			</div>
			<Image
				src={"/images/bg-icon-1.svg"}
				alt="bg-icon-1"
				width={100}
				height={100}
				className="lg:hidden absolute -top-5 left-0 z-10 w-[70px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-2.svg"}
				alt="bg-icon-2"
				width={100}
				height={100}
				className="lg:hidden absolute z-10 -right-2 -top-7 w-[80px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-3.svg"}
				alt="bg-icon-3"
				width={100}
				height={100}
				className="lg:hidden absolute z-10 w-auto -bottom-20 -left-10 sm:bottom-0 sm:left-0"
			/>
			<Image
				src={"/images/bg-icon-4.svg"}
				alt="bg-icon-4"
				width={100}
				height={100}
				className="lg:hidden absolute -bottom-5 -right-16 z-10 size-[200px] sm:size-auto sm:bottom-0 sm:right-0"
			/>
		</div>
	);
}
