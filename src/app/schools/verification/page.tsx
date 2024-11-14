import NavHeader from "@/components/NavHeader";
import Image from "next/image";

export default function SchoolsVerificationPage() {
	return (
		<div className="relative flex flex-col w-screen min-h-screen bg-retro_blue-100 overflow-hidden">
			<NavHeader backLink />
			<div className="relative flex justify-center flex-1 overflow-hidden sm:items-center px-4 py-16 lg:py-32">
				<div className="relative z-50 bg-white rounded-3xl w-full shadow-[0px_12px_0px] shadow-retro_blue-400 h-fit flex flex-col px-4 py-8 gap-9 max-w-[408px] self-start lg:max-w-[500px] lg:px-8">
					<form className="space-y-6">
						<div className="space-y-3">
							<h2 className="text-2xl font-bold lg:text-3xl text-dark-800 font-nunitosans">
								School Verification
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
								<label htmlFor="state">State</label>
								<input
									id="state"
									type="text"
									placeholder="Select"
									className="input-box"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="lga">LGA</label>
								<input
									id="lga"
									type="text"
									placeholder="Select"
									className="input-box"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="phone">School Address</label>
								<input
									id="phone"
									type="text"
									placeholder="Enter Address"
									className="input-box"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="phone">
									Official school phone number
								</label>
								<input
									id="phone"
									type="text"
									placeholder="Enter phone number"
									className="input-box"
								/>
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
