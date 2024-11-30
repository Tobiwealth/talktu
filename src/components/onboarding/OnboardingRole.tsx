import React, {useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import OnboardingOptions from '@/components/onboarding/OnboardingOptions'
import {useOnboardingStore} from '@/store/onboardingStore'

const OnboardingRole = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
    const role = searchParams.get('user')
    const onboardingStatus = useOnboardingStore((state) => state.onboardingAccess);
    const setOnboardingStatus = useOnboardingStore((state) => state.setOnboardingAccess);

	interface SlpStatus{
		account: boolean,
		verify: boolean,
		plan: boolean
	}
	const [slpOnboardingStatus, setSlpOnboardingStatus] = useState<SlpStatus>({
		account: true,
		verify: false,
		plan: false
	})

	const handleAssessment = () => {
		if(!onboardingStatus?.childProfileCreated){
			return;
		}
		router.push('/onboarding/parent-assessment'); 
		setOnboardingStatus({...onboardingStatus, assessmentTaken:true })
	}

	const handleSubscription = () => {
		if(!onboardingStatus?.childProfileCreated || !onboardingStatus.assessmentTaken){
			return;
		}
		router.push('/subscription'); 
		setOnboardingStatus({...onboardingStatus, subscribed:true })
	}

	return (
		<div>
			{ role === 'parent' && <div className="pt-6">
		        <OnboardingOptions handleClick={() => setOnboardingStatus({...onboardingStatus, accountCreated:true })}  onboardingStatusOption={onboardingStatus.accountCreated} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
		        <OnboardingOptions handleClick={() => {router.push('/create-child-profile'); setOnboardingStatus({...onboardingStatus, childProfileCreated:true })}} onboardingStatusOption={onboardingStatus.childProfileCreated} title="Create Child’s profile" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Id mollis.</p> buttonTitle="Create Profile"/>
		        <OnboardingOptions handleClick={handleAssessment} onboardingStatusOption={onboardingStatus.assessmentTaken} title="Complete Assessment" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Complete Assessment"/>
		        <OnboardingOptions handleClick={handleSubscription} onboardingStatusOption={onboardingStatus.subscribed} title="Subscribe to a plan" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Egestas.</p> buttonTitle="Select a plan"/>
		    </div>}

		   {/*slp onboarding*/}
		    {role === 'slp' && <div className="pt-6">
		        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, account:true })} onboardingStatusOption={slpOnboardingStatus.account} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
		        <OnboardingOptions handleClick={() => {router.push('/slp/verification'); setSlpOnboardingStatus({...slpOnboardingStatus, verify:true })}} onboardingStatusOption={slpOnboardingStatus.verify} title="Verify Identity" details=<p>Verify your mrtb certification</p> buttonTitle="Verify"/>
		        <OnboardingOptions handleClick={() => {router.push('/subscription'); setSlpOnboardingStatus({...slpOnboardingStatus, plan:true })}} onboardingStatusOption={slpOnboardingStatus.plan} title="Subscribe to a plan" details=<p>Choose a plan and get started</p> buttonTitle="Select a plan"/>
		    </div>}

		    {/*school onboarding*/}
		    {role === 'schools' && <div className="pt-6">
		        <OnboardingOptions handleClick={() => setSlpOnboardingStatus({...slpOnboardingStatus, account:true })} onboardingStatusOption={slpOnboardingStatus.account} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
		        <OnboardingOptions handleClick={() => {router.push('/schools/verification'); setSlpOnboardingStatus({...slpOnboardingStatus, verify:true })}} onboardingStatusOption={slpOnboardingStatus.verify} title="School Verification" details=<p>Verify your school address</p> buttonTitle="Verify"/>
		        <OnboardingOptions handleClick={() => {router.push('/subscription'); setSlpOnboardingStatus({...slpOnboardingStatus, plan:true })}} onboardingStatusOption={slpOnboardingStatus.plan} title="Subscribe to a plan" details=<p>Choose a plan and get started</p> buttonTitle="Select a plan"/>
		    </div>}
		</div>
	)
}

export default OnboardingRole