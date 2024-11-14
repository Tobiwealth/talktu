'use client'
import React, {useState} from 'react'
import { FaCheck } from "react-icons/fa6";
import { useRouter, useSearchParams } from 'next/navigation'

interface OnboardingOptionsProps {
  onboardingStatusOption: boolean; 
  title: string;
  details: string | React.ReactNode;
  buttonTitle: string;
  handleClick: () => void;
}

const OnboardingOptions: React.FC<OnboardingOptionsProps> = ({onboardingStatusOption, title, details, buttonTitle, handleClick}) => {
	return(
		<div className="px-6 py-3 flex flex-col lg:flex-row justify-between lg:items-center py-4 gap-4 lg:gap-0">
		    <div className="flex items-center gap-4">
		    	<div className={`w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] border-[2px] border-[#518AF5] rounded-[100%] flex justify-center items-center ${onboardingStatusOption ? "bg-[#518AF5]" : "bg-white"}`}><FaCheck className="text-white text-sm lg:text-base "/></div>
		        <div className=" font-nunito">
		    	    <h3 className={`font-semibold text-base ${onboardingStatusOption ? "line-through text-[#2065E6]" : "#1E293B"}`}>{title}</h3>
		    	    <div className={`font-normal text-sm ${onboardingStatusOption ? "line-through text-[#2065E6]" : "#64748B"}`}>{details}</div>
		        </div>
		    </div>
		    <button onClick={handleClick} className={`font-nunito font-semibold text-[#000D26] text-sm bg-[#F1F5F9] w-[180px] h-[40px] rounded-[8px] ml-[40px] buttonshadow ${onboardingStatusOption ? 'hidden' : ""}`}>{buttonTitle}</button>
	    </div>
	)
}

const Onboarding = () => {
	const router = useRouter()
	//const searchParams = useSearchParams()
    //const role = searchParams.get('user')
    const [role, setRole] = useState<string>('child')

	interface Status {
	    account: boolean,
		childProfile: boolean,
		assessment: boolean,
		plan: boolean
	}
	interface SlpStatus{
		account: boolean,
		verify: boolean,
		plan: boolean
	}
	const [onboardingStatus, setOnboardingStatus] = useState<Status>({
		account: true,
		childProfile: false,
		assessment: false,
		plan: false
	})
	const [slpOnboardingStatus, setSlpOnboardingStatus] = useState<SlpStatus>({
		account: true,
		verify: false,
		plan: false
	})


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
				{ role === 'child' && <div className="pt-6">
			        <OnboardingOptions handleClick={() => setOnboardingStatus({...onboardingStatus, account:true })} onboardingStatusOption={onboardingStatus.account} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
			        <OnboardingOptions handleClick={() => setOnboardingStatus({...onboardingStatus, childProfile:true })} onboardingStatusOption={onboardingStatus.childProfile} title="Create Child’s profile" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Id mollis.</p> buttonTitle="Create Profile"/>
			        <OnboardingOptions handleClick={() => {router.push('/onboarding/parent-assessment'); setOnboardingStatus({...onboardingStatus, assessment:true });}} onboardingStatusOption={onboardingStatus.assessment} title="Complete Assessment" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Complete Assessment"/>
			        <OnboardingOptions handleClick={() => {router.push('/subscription'); setOnboardingStatus({...onboardingStatus, plan:true })}} onboardingStatusOption={onboardingStatus.plan} title="Subscribe to a plan" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Egestas.</p> buttonTitle="Select a plan"/>
			    </div>}

			   {/*slp onboarding*/}
			    {role === 'slp' && <div className="pt-6">
			        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, account:true })} onboardingStatusOption={slpOnboardingStatus.account} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
			        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, verify:true })} onboardingStatusOption={slpOnboardingStatus.verify} title="Verify Identity" details=<p>Verify your mrtb certification</p> buttonTitle="Verify"/>
			        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, plan:true })} onboardingStatusOption={slpOnboardingStatus.plan} title="Subscribe to a plan" details=<p>Choose a plan and get started</p> buttonTitle="Select a plan"/>
			    </div>}

			    {/*school onboarding*/}
			    {role === 'school' && <div className="pt-6">
			        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, account:true })} onboardingStatusOption={slpOnboardingStatus.account} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
			        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, verify:true })} onboardingStatusOption={slpOnboardingStatus.verify} title="School Verification" details=<p>Verify your school address</p> buttonTitle="Verify"/>
			        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, plan:true })} onboardingStatusOption={slpOnboardingStatus.plan} title="Subscribe to a plan" details=<p>Choose a plan and get started</p> buttonTitle="Select a plan"/>
			    </div>}
			</div>
		</div>
	)
}

export default Onboarding