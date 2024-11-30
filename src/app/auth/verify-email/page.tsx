import React, { Suspense } from 'react'
import VerifyEmailComponent from './VerifyEmailComponent'

const VerifyEmail = () => {
	const Loading = () => <div>Loading...</div>;
	return (
		<Suspense fallback={<Loading />}>
		    <VerifyEmailComponent/>
		</Suspense>
	)
}

export default VerifyEmail