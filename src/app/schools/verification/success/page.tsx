import NavHeader from "@/components/NavHeader";
import SuccessModal from "@/components/SuccessModal";
import Image from "next/image";

export default function page() {
	return (
		<div className="relative flex flex-col w-screen min-h-screen bg-retro_blue-100 overflow-hidden">
			<NavHeader backLink />
			<div className="relative flex justify-center flex-1 overflow-hidden sm:items-center px-4 py-16 lg:py-32">
				<SuccessModal
					title="Details successfully Submitted"
					description="Thanks for your Interest In Talktu. Your signup will e reviewed and your account will be verified. We will send you a mail to that effect within the next 24 hours"
					CTA="Okay"
					redirectTo="/"
				/>

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
