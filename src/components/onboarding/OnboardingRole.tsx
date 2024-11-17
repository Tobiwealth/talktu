import React, {useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import OnboardingOptions from '@/components/onboarding/OnboardingOptions'

const OnboardingRole = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
    const role = searchParams.get('user')

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
		<div>
			{ role === 'parent' && <div className="pt-6">
		        <OnboardingOptions handleClick={() => setOnboardingStatus({...onboardingStatus, account:true })} onboardingStatusOption={onboardingStatus.account} title="Create an Account" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Create Profile"/>
		        <OnboardingOptions handleClick={() => {router.push('/create-child-profile'); setOnboardingStatus({...onboardingStatus, childProfile:true })}} onboardingStatusOption={onboardingStatus.childProfile} title="Create Child’s profile" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Id mollis.</p> buttonTitle="Create Profile"/>
		        <OnboardingOptions handleClick={() => {router.push('/onboarding/parent-assessment'); setOnboardingStatus({...onboardingStatus, assessment:true });}} onboardingStatusOption={onboardingStatus.assessment} title="Complete Assessment" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Semper ipsum.</p> buttonTitle="Complete Assessment"/>
		        <OnboardingOptions handleClick={() => {router.push('/subscription'); setOnboardingStatus({...onboardingStatus, plan:true })}} onboardingStatusOption={onboardingStatus.plan} title="Subscribe to a plan" details=<p>Lorem ipsum dolor sit amet consectetur. <br className="md:hidden"/>Egestas.</p> buttonTitle="Select a plan"/>
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