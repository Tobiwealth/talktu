"use client";

import { useState } from "react";
import CTAButton from "./CTAButton";
import Plan from "./Plan";
import axios from '@/api/useAxios'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next';

interface Props {
	subscriberId: string;
}
const plans = [
	{ name: "Monthly", price: 10000 },
	{
		name: "Quarterly",
		price: 10000,
		recommended: true,
	},
	{ name: "Yearly", price: 10000 },
];

export default function PlanSection ({subscriberId}:Props) {
	const router = useRouter()
	const [selectedPlan, setSelectedPlan] = useState<string>("Quarterly");
	const token = getCookie('token');


	const handleSubscription = async() => {
		try {
            const response = await axios.post('subscriptions',
                JSON.stringify({
					"subscriberId": subscriberId,
					"userType": "child",
					"planCode": "PLN_x8t5j7f5d7bllx6"
                }),
                {
                    headers: { 
                    	'Content-Type': 'application/json',
                    	'Authorization':`Bearer ${token}` 
                    }
                }
            );
            console.log(response.data);
            router.push(response.data.authorization_url);

        } catch (err) {
            console.log(err)
        }
	}
	console.log("subscriberId",subscriberId)

	return (
		<div
			className="bg-retro_blue-100 gap-6 flex flex-col md:p-4 lg:p-8 rounded-[20px]"
			id="plans"
		>
			<div className="relative z-20 space-y-8">
				<h2 className="text-deep_blue text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-[120%]">
					Choose your plan
				</h2>
				<div className="grid gap-[10px] bg-white px-4 py-8 md:p-6 lg:p-8 rounded-2xl w-full max-w-[450px] md:max-w-[528px] mx-auto">
					{plans.map((plan, index) => (
						<Plan
							key={plan.name}
							selectedPlan={selectedPlan}
							setSelectedPlan={setSelectedPlan}
							{...plan}
						/>
					))}
					<div className="text-sm font-medium text-center text-neutral-600 md:text-left md:text-base">
						Subscription can be cancelled in{" "}
						<br className="sm:hidden" /> settings at anytime
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<CTAButton handleClick={handleSubscription} />
			</div>
		</div>
	);
}
