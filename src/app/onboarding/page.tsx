'use client'
import React, { Suspense} from 'react'
import OnboardingRole from '@/components/onboarding/OnboardingRole'




const Onboarding = () => {
	const Loading = () => <div>Loading...</div>;




	return (	    
		<Suspense fallback={<Loading />}>
		    <OnboardingRole/>
	    </Suspense>
	)
}

export default Onboarding