'use client'
import React, { Suspense } from 'react'
import OnboardingRole from '@/components/onboarding/OnboardingRole'
import {useAuthStore} from '@/store/authStore'
import {useChildStore} from '@/store/childStore'



const Onboarding = () => {
	const token = useAuthStore((state) => state.token);
	const child = useChildStore((state) => state.childProfile);
	const Loading = () => <div>Loading...</div>;


	return (
		<div className="bg-[#EEF3FE] py-20 pb-60 flex flex-col items-center gap-12 min-h-screen max-h-full px-5">
		    <div>
				<h1 className="text-[#000D26] font-bold font-nunitosans text-[2rem] text-center">Welcome Jane Doe</h1>
				<p className="font-nunito font-normal text-base text-[#334155] text-center">Lorem ipsum dolor sit amet consectetur. Nulla risus in quam mi sit purus lacus <br/>eu aliquam. Blandit nunc justo sagittis risus.</p>
			</div>
			<div className="bg-white rounded-[16px] shadowbox w-full md:w-[75vw] lg:w-[62vw] xl:w-[55vw] pb-8">
				<div className="border-b-[2px] border-[#E6EBF0] px-4 lg:px-6 py-3 flex justify-between items-center relative">
				    <div className="font-nunito">
					    <h2 className="font-nunito font-bold text-[#000D26] text-lg pb-1">Setup Checklist</h2>
					    <p className="font-normal text-sm text-[#334155]">Ready to start? Complete the simple <br className="md:hidden"/>steps below to get started 🚀</p>
					</div>
					<p className="font-semibold text-[#5C6879] text-sm lg:text-base font-nunito">3 Steps left</p>
					<div className="w-[82px] h-[1.8px] bg-[#518AF5] absolute bottom-[-1.8px] left-0"></div>
				</div>
				<Suspense fallback={<Loading />}>
				    <OnboardingRole/>
			    </Suspense>
			</div>
		</div>
	)
}

export default Onboarding