import React from 'react'
import Image from 'next/image'
import long_arrow from '../../../public/icons/long_arrow.svg'
import long_arrow_sun from '../../../public/icons/long_arrow_sun.svg'
import long_arrow_blue from '../../../public/icons/long_arrow_blue.svg'
import long_arrow_purple from '../../../public/icons/long_arrow_purple.svg'
import long_arrow_pink from '../../../public/icons/long_arrow_pink.svg'

interface graphDtails {
	score: number;
	questionId: string;
	name: string;
}
interface reportProps {
	title: string;
	details: string;
	graphArray: graphDtails[] | null;
	graphColor: string[];
	backgroundColor: string;
	boxColor: string; //color for the little box on top and below
	insideBoxColor: string; 
	textColor: string; 
	totalScore: number;
	childNickname?: string;
	insight?: string;
}

const ReportGraph: React.FC<reportProps> = ({title, details, graphArray, backgroundColor, boxColor, insideBoxColor, textColor, totalScore, graphColor, childNickname, insight}) => {
	if(graphArray === null){
		return(<p className="text-white">Loading...</p>)
	}
	return (
		<div className="">
		    <div className={`${backgroundColor} font-nunito rounded-[28px] p-4 md:p-6 pb-8 md:pb-12 mt-16 relative`}>
		        <p className={`font-nunito font-semibold text-[8px] md:text-base px-1.5 md:px-3 py-[1px] md:py-1 w-fit h-fit ${textColor} rounded-[4px] md:rounded-[11px] ${boxColor} `}>1 - 10 Scale</p>
			    <div className="w-full max-w-md mx-auto text-center">
		    	    <h2 className="px-4 text-deep_blue font-bold text-sm md:text-[2rem] md:leading-[41.6px]">{title}</h2>
		    	    <p className="px-12 mb-10 text-xs font-medium md:text-base text-neutral-700 md:mb-16">{details}</p>
		    	</div>
		        {/*Graph on the report*/}
		    	<div className="w-full md:w-[80%] flex justify-center items-center pb-3  mx-auto">
		    	    {graphArray.map((item,i) => 
		    	    	(<div key={i} className="flex flex-col items-center justify-center flex-1 gap-3">
			    	    	<div className="h-[180px] md:h-[300px] w-full flex flex-col justify-end ">
			    	    		<div className={`${graphColor[i]} w-full flex items-end justify-center transition-all duration-500 ease-in`} style={{height:`${(item.score)*10}%`}}>
			    	    			<p className="font-nunito font-normal text-white text-[12.72px] md:text-[35.75px]">{item.score}</p>
			    	    		</div>
			    	    	</div>
			    	        {/*the long arrow image*/}
			    	    	<Image src={title ==='Receptive Language'? long_arrow : title === 'Expressive Language' ? long_arrow_sun : title === 'Articulation and phonology' ? long_arrow_blue :
			    	            title === 'Pragmatics' ? long_arrow_purple : long_arrow_pink} 
			    	    	    width={10} height={44} quality={100} alt="long arrow" className="" 
			    	    	/>
			    	    	<p className="font-nunito font-medium text-[7px] pb-8 h-[40px] md:h-[75px] leading-[11.7px] md:text-xs md:leading-[15.6px] text-neutral-700 text-center">{item.name}</p>
		    	        </div>)
		    	    )}
			    </div>
			    <div className={`${boxColor} rounded-[9px] md:rounded-[26px] p-2 md:p-4 flex justify-between items-center w-[226px] md:w-[637px] md:h-[149px] mx-auto mt-8`}>
			    	<div className="px-3 text-white font-nunito">
			    		<p className="font-medium text-[8.54px] md:text-2xl">Total Score</p>
			    		<p className="font-bold text-[22.77px] md:text-[4rem] leading-[29.6px] md:leading-[83.2px]">{totalScore.toFixed(2)}</p>
			    	</div>
			    	<p className={`font-nunito font-normal text-[10px] leading-[13px] md:text-xl md:leading-[26px] ${textColor} ${insideBoxColor} rounded-[8px] md:rounded-[20px] w-3/5 h-full px-3 py-3 md:px-6 flex justify-center items-center`}>
			    		{childNickname ?? "sammy"} {insight ?? "Emerging"}
			    	</p>
			    </div>
		    </div>
		</div>
	)
}

export default ReportGraph