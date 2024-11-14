import NavHeader from "@/components/NavHeader";
import Image from "next/image";

export default function SLPVerificationPage() {
	return (
		<div className="relative flex flex-col w-screen min-h-screen bg-retro_blue-100 overflow-hidden">
			<NavHeader backLink />
			<div className="relative flex justify-center flex-1 overflow-hidden sm:items-center px-4 py-16 lg:py-32">
				<div className="relative z-50 bg-white rounded-3xl w-full shadow-[0px_12px_0px] shadow-retro_blue-400 h-fit flex flex-col px-4 py-8 gap-9 max-w-[408px] self-start lg:max-w-[500px] lg:px-8">
					<form className="space-y-6">
						<div className="space-y-3">
							<h2 className="text-2xl font-bold lg:text-3xl text-dark-800 font-nunitosans">
								Verify Identity
							</h2>
							<div className="bg-green-100 w-fit text-green-700 flex items-center py-2 px-3 gap-1 rounded-[10px] font-medium text-sm sm:text-base">
								<Image
									src={"/images/lock.svg"}
									alt="lock"
									width={20}
									height={20}
									className=""
								/>
								<span>
									Your data is safely stored and private
								</span>
							</div>
						</div>

						<div className="space-y-[27px]">
							<div className="form-field">
								<label htmlFor="phone">
									Have you completed the MRTB Certification?
								</label>
								<input
									id="phone"
									type="text"
									placeholder="Select"
									className="input-box"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="phone">
									If Yes, please enter your MRTB Number
								</label>
								<input
									id="phone"
									type="text"
									placeholder="Enter"
									className="input-box"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="phone">
									Upload Supporting certifications
								</label>
								<div className="flex flex-col items-center bg-neutral-100 border border-neutral-300 outline-none py-4 gap-1 focus-within:bg-sunglow-100 focus-within:border-sunglow-main duration-200 ease-in-out relative">
									<Image
										src={"/images/upload.svg"}
										alt="upload icon"
										width={28}
										height={28}
										className=""
									/>
									<div className="text-sm font-medium text-neutral-800">
										Click to Upload document
									</div>
									<div className="text-xs text-neutral-600">
										Minimum file size (5mb)
									</div>
									<input
										type="file"
										className="absolute inset-0 opacity-0 cursor-pointer"
									/>
								</div>
							</div>
						</div>
						<button className="form-btn">Create Profile</button>
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
