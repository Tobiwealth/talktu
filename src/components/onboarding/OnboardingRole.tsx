import React, {useState, useEffect} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import OnboardingOptions from '@/components/onboarding/OnboardingOptions'
import { getCookie } from 'cookies-next';
import axios from "@/api/useAxios";
import {useAuthStore} from '@/store/authStore'
// import { AxiosError } from "axios";

interface OnboardingStatusType{
	onboarded: boolean;
    subscribed: boolean;
}


const OnboardingRole = () => {
	const name = useAuthStore((state) => state.name)
	const router = useRouter()
	const searchParams = useSearchParams()
    const role = searchParams.get('user')
    const childId = searchParams.get('childId')
    const token = getCookie('token');
	const [currentStep, setCurrentStep] = useState<number>(1)
	const [onboardingStatus, setOnboardingStatus] = useState<OnboardingStatusType>({
		onboarded: false,
        subscribed: false
	})


	const handleAssessment = () => {
		if(!childId){
			return;
		}
		router.push('/onboarding/parent-assessment'); 
	}

	const handleSubscription = () => {
		if(!childId || !onboardingStatus?.onboarded){
			return;
		}
		router.push(`/subscription/${childId}`); 
	}
	// console.log(childId)
	const handleStep = (status:{onboarded: boolean,subscribed: boolean }) => {
		if(childId && !status.onboarded && !status?.subscribed){
			setCurrentStep(2)
		}
		if(status.onboarded && !status?.subscribed){
			setCurrentStep(3)
		}
		if(status?.subscribed){
			setCurrentStep(4)
		}
	}

	useEffect(() => {
		if(childId === 'null'){
			return;
		}
		const checkOnboardingStatus = async() =>{
			try{
				const res = await axios.get(
	        	`/onboarding/status/${childId}`,
				{
					headers: { 
						"Content-Type": "application/json",
						'Authorization':`Bearer ${token}` 
					},
					// withCredentials: true
				}
	        )
	        console.log(res.data)
	        await setOnboardingStatus(res.data)
	        handleStep(res.data)
			}catch(err){
				console.error(err)
			} 
		}
		checkOnboardingStatus();
	}, [childId])

	console.log(currentStep)
	console.log("onboard",onboardingStatus)
	console.log(role, childId)

	return (
		<div className="bg-[#EEF3FE] py-20 pb-60 flex flex-col items-center gap-12 min-h-screen max-h-full px-5">
		    <div>
				<h1 className="text-[#000D26] font-bold font-nunitosans text-[2rem] text-center">Welcome <strong>{name}</strong></h1>
				<p className="font-nunito font-normal text-base text-[#334155] text-center">Start your Onboarding Journey.</p>
			</div>
			<div className="bg-white rounded-[16px] shadowbox w-full md:w-[75vw] lg:w-[62vw] xl:w-[55vw] pb-8">
			    <div className="border-b-[2px] border-[#E6EBF0] px-4 lg:px-6 py-3 flex justify-between items-center relative">
				    <div className="font-nunito">
					    <h2 className="font-nunito font-bold text-[#000D26] text-lg pb-1">Setup Checklist</h2>
					    <p className="font-normal text-sm text-[#334155]">Ready to start? Complete the simple <br className="md:hidden"/>steps below to get started 🚀</p>
					</div>
					<p className="font-semibold text-[#5C6879] text-sm lg:text-base font-nunito">{4-currentStep} Steps left</p>
					<div style={{width:`${currentStep*25}%`}} className=" h-[1.8px] bg-[#518AF5] absolute bottom-[-1.8px] left-0"></div>
				</div>
		        <div>
					{ role === 'parent' && <div className="pt-6">
				        <OnboardingOptions handleClick={() => null}  onboardingStatusOption={true} title="Create an Account" details=<p>Sign up quickly and easily to begin your <br className="md:hidden"/>child's personalized therapy journey.</p> buttonTitle="Create Profile"/>
				        <OnboardingOptions handleClick={() => router.push('/create-child-profile')} onboardingStatusOption={childId !== 'null'} title="Create Child’s profile" details=<p>Create an account for your child<br className="md:hidden"/>and get started</p> buttonTitle="Create Profile"/>
				        <OnboardingOptions handleClick={handleAssessment} onboardingStatusOption={onboardingStatus?.onboarded} title="Complete Assessment" details=<p>Help us understand your child's unique <br className="md:hidden"/>needs through an <br className="md:hidden"/>interactive assessment.</p> buttonTitle="Complete Assessment"/>
				        <OnboardingOptions handleClick={handleSubscription} onboardingStatusOption={onboardingStatus?.subscribed} title="Subscribe to a plan" details=<p>Subscribe to receive a customized therapy <br className="md:hidden"/>plan with engaging activities.</p> buttonTitle="Select a plan"/>
				    </div>}

				   {/*slp onboarding*/}
				    {role === 'therapist' && <div className="pt-6">
				        <OnboardingOptions handleClick={() => null} onboardingStatusOption={true} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
				        <OnboardingOptions handleClick={() => router.push('/slp/verification')} onboardingStatusOption={onboardingStatus.onboarded} title="Verify Identity" details=<p>Verify your mrtb certification</p> buttonTitle="Verify"/>
				        <OnboardingOptions handleClick={() => router.push('/subscription/56666')} onboardingStatusOption={onboardingStatus.subscribed} title="Subscribe to a plan" details=<p>Choose a plan and get started</p> buttonTitle="Select a plan"/>
				    </div>}

				    {/*school onboarding*/}
				    {role === 'schools' && <div className="pt-6">
				        <OnboardingOptions handleClick={() => null} onboardingStatusOption={true} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
				        <OnboardingOptions handleClick={() => router.push('/schools/verification')} onboardingStatusOption={onboardingStatus.onboarded} title="School Verification" details=<p>Verify your school address</p> buttonTitle="Verify"/>
				        <OnboardingOptions handleClick={() => router.push('/subscription/9877')} onboardingStatusOption={onboardingStatus.subscribed} title="Subscribe to a plan" details=<p>Choose a plan and get started</p> buttonTitle="Select a plan"/>
				    </div>}
		        </div>
		    </div>
		</div>
	)
}

export default OnboardingRole