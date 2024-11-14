'use client'
import React, {useState} from 'react'
import ReportGraph from '@/components/parentDashboard/ReportGraph'
import ModuleProgress from '@/components/parentDashboard/ModuleProgress'

const Report = () => {
	const [reportButton, setReportButton] = useState<string>("assessment");

	return (
		<div className="h-full min-h-screen py-12 px-4">
			<div className=" flex flex-col justify-center items-center px-2">
				<div className="font-nunito font-medium text-sm bg-[#11244842] border-[1px] border-[#112448] rounded-[12px] p-[6px] h-[50px] w-full md:w-[478px] flex justify-between items-center relative">
				    <span className={`bg-[#112448] w-1/2 md:w-[229px] h-[38px] rounded-[8px] absolute z-[-99] transition-all duration-500 ease-linear ${reportButton === 'assessment' ? "":"translate-x-[calc(100%-10px)] md:translate-x-[235px]"}`}></span>
					<button onClick={() => setReportButton("assessment")} className={` w-1/2 md:w-[229px] ${reportButton === 'assessment' ? "text-white" : "text-[#3E64AB]"}`}>Assessment Report</button>
					<button onClick={() => setReportButton("module")} className={` w-1/2 md:w-[229px] rounded-[8px] ${reportButton === 'module' ? "text-white" : "text-[#3E64AB]"}`}>Module Progress</button>
				</div>
			</div>
			{reportButton === 'assessment' && <div className="flex flex-col items-center mt-10">
				<div className="bg-[#112349] rounded-[21px] p-4 md:p-8 pb-10 md:pb-16 w-full lg:w-[60vw]">
				    <div className="font-nunito text-center md:px-16">
					    <h1 className="font-bold text-2xl md:text-[2.5rem] md:leading-[45.2px] text-white">Sammy Speech and Language Assessment Report</h1>
					    <h4 className="font-medium text-base md:text-xl text-[#9FB1C7] lg:px-8 pt-4">
					        This Report is based on Sammy’s Speech and language Assessment and will be scored based on his Receptive, 
					        Articulation and phonology Expressive, Fluency, and pragmatics skills
					    </h4>
					</div>
					<div>
						<ReportGraph 
						    title='Receptive Language' details='How well your child understands spoken language and Instructions' 
						    graphArray={[
						    	{rating:3, color:'bg-retro_blue-600',description:'Understanding words'},
						    	{rating:7, color:'bg-retro_blue-700',description:'Pointing to objects and pictures'},
						    	{rating:6, color:'bg-retro_blue-800',description:'Following Instructions'},
						    	{rating:2, color:'bg-retro_blue-900',description:'Responding to questions'},
						    	{rating:1, color:'bg-retro_blue-1000',description:'Understanding descriptions'},
						    	{rating:5, color:'bg-retro_blue-main',description:`Identifying Objects .`},
						    ]} 
						    backgroundColor='bg-retro_blue-300' boxColor='bg-retro_blue-main' insideBoxColor='bg-retro_blue-900' textColor='text-white'
						/>
						<ReportGraph 
						    title='Expressive Language' details='Your child’s ability to use words, phrases and sentences to communicate' 
						    graphArray={[
						    	{rating:3, color:'bg-sunglow-400',description:'Understanding words'},
						    	{rating:7, color:'bg-sunglow-500',description:'Pointing to objects and'},
						    	{rating:6, color:'bg-sunglow-600',description:'Following Instructions'},
						    	{rating:2, color:'bg-sunglow-700',description:'Responding to questions'},
						    	{rating:1, color:'bg-sunglow-800',description:'Responding to questions'},
						    	{rating:4, color:'bg-sunglow-main',description:'Understanding descriptions'},
						    	{rating:5, color:'bg-sunglow-main',description:`Identifying Objects .`},
						    ]} 
						    backgroundColor='bg-sunglow-200' boxColor='bg-sunglow-main' insideBoxColor='bg-sunglow-400' textColor='text-deep_blue'
						/>
						<ReportGraph 
						    title='Articulation and phonology' details='How clear your clear your child’s speech is' 
						    graphArray={[
						    	{rating:3, color:'bg-aqua_blue-400',description:'Understanding words'},
						    	{rating:7, color:'bg-aqua_blue-500',description:'Pointing to objects and pictures'},
						    ]} 
						    backgroundColor='bg-aqua_blue-200' boxColor='bg-aqua_blue-main' insideBoxColor='bg-aqua_blue-300' textColor='text-deep_blue'
						/>
						<ReportGraph 
						    title='Pragmatics' details='Your child’s use of Language in social contexts (E.g turn taking, Initiating conversations)' 
						    graphArray={[
						    	{rating:3, color:'bg-purple-300',description:'Understanding words'},
						    	{rating:7, color:'bg-purple-400',description:'Pointing to objects and pictures'},
						    	{rating:5, color:'bg-purple-500',description:'Pointing to objects and pictures'}
						    ]} 
						    backgroundColor='bg-purple-200' boxColor='bg-purple-600' insideBoxColor='bg-purple-300' textColor='text-deep_blue'
						/>
						<ReportGraph 
						    title='Fluency' details='How smooth your child’s speech is (i.e Absence of stuttering)' 
						    graphArray={[
						    	{rating:3, color:'bg-baby_pink-500',description:'Showing signs of stuttering or disfluencies'},
						    	{rating:7, color:'bg-baby_pink-600',description:'HOW would YOU RATE YOUR CHILD’S VOICE, QUALITY, PITCH , InTONATION'}
						    ]} 
						    backgroundColor='bg-baby_pink-300' boxColor='bg-baby_pink-main' insideBoxColor='bg-baby_pink-300' textColor='text-deep_blue'
						/>
					</div>
					<div className="bg-[#F8FAFC] rounded-[26px] mt-12 p-6 md:p-8">
						<p className="font-nunito font-medium text-lg md:text-2xl text-deep_blue">SLP Comment</p>
						<div className="bg-[#E2E8F0] rounded-[20px] px-6 py-8 mt-4">
							<p className="font-nunito font-normal text-deep_blue text-base md:text-xl">Sammy Is Emerging in spoken <br className="hidden md:inline"/>langages and Instructions</p>
						</div>
					</div>
				</div>
			</div>}
			{reportButton === 'module' && <ModuleProgress/>}
		</div>
	)
}

export default Report