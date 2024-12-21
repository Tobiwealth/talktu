import React from 'react'
import ReportGraph from '@/components/parentDashboard/ReportGraph'
import Button from '@/components/Button'
import Link from "next/link";

const AssessmentResponse = ({ params }: { params: { assessmentId: string } }) => {
	const {assessmentId} = params;

	return (
		<div className="bg-[#EEF3FE] px-4 py-12">
			<div className="flex flex-col items-center ">
				<div className="flex flex-col items-center bg-white rounded-[21px] p-4 md:p-8 pb-10 md:pb-16 w-full lg:w-[60vw] relative">
				    <div className="text-center font-nunito md:px-16">
					    <h1 className="font-bold text-2xl md:text-[2.5rem] md:leading-[45.2px] text-deep_blue">Sammy Speech and Language Assessment Report</h1>
					    <h4 className="font-medium text-base md:text-xl text-neutral-700 lg:px-8 pt-4">
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
					</div>
					<div className="rounded-b-[22px] w-full h-[400px] lg:h-screen pb-16 assessment-report-gradient absolute bottom-0 flex flex-col justify-center items-center">
					    <div className="w-[80%]">
							<p className="font-nunito font-semibold text-black text-xs md:text-sm lg:text-xl text-center p-4 md:px-12">Subscribe to see full assessment report and personalised learning plan for Sammy</p>
							<div className="flex justify-center items-center w-full pt-1">
							    <Link href="/onboarding?user=parent" className='flex justify-center items-center w-[149.02px] h-[40.17px] lg:w-[194px] lg:h-[56.68px] rounded-[12px] text-[10px] md:text-sm lg:text-base text-deep_blue font-nunito font-bold bg-sunglow-main buttonshadow2'>Subscribe</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AssessmentResponse