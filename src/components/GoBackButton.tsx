import React from 'react'
import { useRouter } from 'next/navigation';
import { HiArrowLongLeft } from "react-icons/hi2";

interface GoBtnProps{
	extraClass?: string;
}
const GoBackButton: React.FC<GoBtnProps> = ({extraClass}) => {
	const router = useRouter();
	const handleGoBack = () => {
        router.back();
    };
    
	return (
		<button 
		    className={`text-retro_blue-main font-nunito font-medium text-sm flex items-center justify-center gap-2 px-3 py-2 border-[1px] border-[#112448] rounded-[12px] bg-[#11244842] mt-4 md:mt-12 ${extraClass}`} 
		    onClick={handleGoBack}
		>
			<HiArrowLongLeft className="text-lg"/>Go back
		</button>
	)
}

export default GoBackButton