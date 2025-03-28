'use client'
import React, {useState, useEffect} from 'react'
import ReportGraph from '@/components/parentDashboard/ReportGraph'
import ModuleProgress from '@/components/parentDashboard/ModuleProgress'
import axios from '@/api/useAxios'
import { getCookie } from 'cookies-next';
import {useChildStore} from '@/store/childStore'

type Content = {
	summary: string;
	details: any[];
	recommendations: any[];
	references: any[];
};
type categoryScoresType = {
	name: string;
	questionId: string;
	score: number;
}
type Stats = {
	overallScore: number;
	categoryScores: categoryScoresType[];
};

type Section = {
	title: string;
	category: string;
	order: number;
	content: Content;
	stats: Stats;
	requiresSubscription: boolean;
	visibility: "subscriber" | "public"; // Assuming "subscriber" is one option
	insight: string;
};

type Sections = {
	"Demographic Details": Section;
	"Cognitive and Developmental Assessment": Section;
	"Social and Behavioral Assessment": Section;
	"Speech and Language Assessment (Receptive Language)": Section;
	"Speech and Language Assessment (Expressive Language)": Section;
	"Speech and Language Assessment (Articulation and Phonology)": Section;
	"Speech and Language Assessment (Pragmatics)": Section;
	"Speech and Language Assessment (Fluency)": Section;
	"Parent/Caregiver Input": Section;
	"Technology Use and Accessibility": Section;
};

const Report = () => {
	const [reportButton, setReportButton] = useState<string>("assessment");

	const token = getCookie('token');
	const childId = useChildStore((state) => state.childProfile?.childId)
	const [assessmentReport, setAssessmentReport] = useState<Sections | null>(null)
	const [childNickname, setChildNickname] = useState<string>("")

	useEffect(() => {
		//console.log("chold id processing", childId)
		const fetchAssessmentReport = async() => {
			//console.log("chold id processing", childId)
			try {
	            const response = await axios.get(`/assessment-reports/?childId=${childId}`,
	                {
	                    headers: { 
	                    	'Content-Type': 'application/json',
	                    	'Authorization':`Bearer ${token}`
	                    }
	                }
	            );
	            // console.log(response?.data?.data[0].sections)
	            setAssessmentReport(response?.data?.data[0].sections)

	            const res = await axios.get(`/children/${childId}`,
	                {
	                    headers: { 
	                    	'Content-Type': 'application/json',
	                    	'Authorization':`Bearer ${token}`
	                    }
	                }
	            );   
	            //console.log("nickname",res.data.nickname)
	            setChildNickname(res.data.nickname)
	        } catch (err) {
	            //console.log(err);
	        }
	    }
	    fetchAssessmentReport();
	}, [childId])

	//console.log("assessment",assessmentReport)
	//console.log('child nick',childNickname)
	//console.log('child id',childId)

	return (
		<div className="h-full min-h-screen px-4 py-12">
			<div className="flex flex-col items-center justify-center px-2 ">
				<div className="font-nunito font-medium text-sm bg-[#11244842] border-[1px] border-[#112448] rounded-[12px] p-[6px] h-[50px] w-full md:w-[478px] flex justify-between items-center relative">
				    <span className={`bg-[#112448] w-1/2 md:w-[229px] h-[38px] rounded-[8px] absolute z-[-99] transition-all duration-500 ease-linear ${reportButton === 'assessment' ? "":"translate-x-[calc(100%-10px)] md:translate-x-[235px]"}`}></span>
					<button onClick={() => setReportButton("assessment")} className={` w-1/2 md:w-[229px] ${reportButton === 'assessment' ? "text-white" : "text-[#3E64AB]"}`}>Assessment Report</button>
					<button onClick={() => setReportButton("module")} className={` w-1/2 md:w-[229px] rounded-[8px] ${reportButton === 'module' ? "text-white" : "text-[#3E64AB]"}`}>Module Progress</button>
				</div>
			</div>
			{reportButton === 'assessment' && <div className="flex flex-col items-center mt-10">
				<div className="bg-[#112349] rounded-[21px] p-4 md:p-8 pb-10 md:pb-16 w-full lg:w-[60vw]">
				    <div className="text-center font-nunito md:px-16">
					    <h1 className="font-bold text-2xl md:text-[2.5rem] md:leading-[45.2px] text-white">{`${childNickname} Speech and Language Assessment Report`}</h1>
					    <h4 className="font-medium text-base md:text-xl text-[#9FB1C7] lg:px-8 pt-4">
					        {`This Report is based on ${childNickname}’s Speech and language Assessment and will be scored based on his Receptive, 
					        Articulation and phonology Expressive, Fluency, and pragmatics skills`}
					    </h4>
					</div>
					<div>
						<ReportGraph 
						    title= {assessmentReport?.["Speech and Language Assessment (Receptive Language)"]?.title ?? 'Receptive Language'}  details='How well your child understands spoken language and Instructions' 
						    graphArray={assessmentReport?.["Speech and Language Assessment (Receptive Language)"]?.stats?.categoryScores ?? null} 
						    graphColor={['bg-retro_blue-500','bg-retro_blue-600', 'bg-retro_blue-700','bg-retro_blue-800','bg-retro_blue-900','bg-retro_blue-main']}
						    backgroundColor='bg-retro_blue-300' boxColor='bg-retro_blue-main' insideBoxColor='bg-retro_blue-900' textColor='text-white'
						    totalScore={assessmentReport?.["Speech and Language Assessment (Receptive Language)"]?.stats.overallScore ?? 0}
						    childNickname={childNickname}
						    insight={`
						    	is ${assessmentReport?.["Speech and Language Assessment (Receptive Language)"]?.insight} 
						    	in spoken langages and Instructions
						    `}
						/>
						<ReportGraph 
						    title='Expressive Language' details='Your child’s ability to use words, phrases and sentences to communicate' 
						    graphArray={assessmentReport?.["Speech and Language Assessment (Expressive Language)"]?.stats?.categoryScores ?? null} 
						    graphColor={['bg-sunglow-400', 'bg-sunglow-500','bg-sunglow-600','bg-sunglow-700','bg-sunglow-800','bg-sunglow-main','bg-sunglow-main']}
						    backgroundColor='bg-sunglow-200' boxColor='bg-sunglow-main' insideBoxColor='bg-sunglow-400' textColor='text-deep_blue'
						    totalScore={assessmentReport?.["Speech and Language Assessment (Expressive Language)"]?.stats.overallScore ?? 0}
						    childNickname={childNickname}
						    insight={`
						    	${assessmentReport?.["Speech and Language Assessment (Expressive Language)"]?.insight}
						    	in word usage and sentence formation
						    `}
						/>
						<ReportGraph 
						    title='Articulation and phonology' details='How clear your clear your child’s speech is' 
						    graphArray={assessmentReport?.["Speech and Language Assessment (Articulation and Phonology)"]?.stats?.categoryScores ?? null} 
						    graphColor={['bg-aqua_blue-400', 'bg-aqua_blue-500']}
						    backgroundColor='bg-aqua_blue-200' boxColor='bg-aqua_blue-main' insideBoxColor='bg-aqua_blue-300' textColor='text-deep_blue'
						    totalScore={assessmentReport?.["Speech and Language Assessment (Articulation and Phonology)"]?.stats.overallScore ?? 0}
						    childNickname={childNickname}
						    insight={`
						    	${assessmentReport?.["Speech and Language Assessment (Articulation and Phonology)"]?.insight}
						    	in making clear speech
						    `}
						/>
						<ReportGraph 
						    title={assessmentReport?.["Speech and Language Assessment (Pragmatics)"]?.title ?? 'Pragmatics'} details='Your child’s use of Language in social contexts (E.g turn taking, Initiating conversations)' 
						    graphArray={assessmentReport?.["Speech and Language Assessment (Pragmatics)"]?.stats?.categoryScores ?? null} 
						    graphColor={['bg-purple-300', 'bg-purple-400','bg-purple-500']}
						    backgroundColor='bg-purple-200' boxColor='bg-purple-600' insideBoxColor='bg-purple-300' textColor='text-deep_blue'
						    totalScore={assessmentReport?.["Speech and Language Assessment (Pragmatics)"]?.stats.overallScore ?? 0}
						    childNickname={childNickname}
						    insight={`
						    	${assessmentReport?.["Speech and Language Assessment (Pragmatics)"]?.insight}
						    	in use of language in social context
						    `}
						/>
						<ReportGraph 
						    title='Fluency' details='How smooth your child’s speech is (i.e Absence of stuttering)' 
						    graphArray={assessmentReport?.["Speech and Language Assessment (Fluency)"]?.stats?.categoryScores ?? null}  
						    graphColor={['bg-baby_pink-500','bg-baby_pink-600']}
						    backgroundColor='bg-baby_pink-300' boxColor='bg-baby_pink-main' insideBoxColor='bg-baby_pink-300' textColor='text-deep_blue'
						    totalScore={assessmentReport?.["Speech and Language Assessment (Fluency)"]?.stats.overallScore ?? 0}
						    childNickname={childNickname}
						    insight={`
						    	${assessmentReport?.["Speech and Language Assessment (Fluency)"]?.insight}
						    	in speech development
						    `}
						/>
					</div>
					<div className="bg-[#F8FAFC] rounded-[26px] mt-12 p-6 md:p-8">
						<p className="text-lg font-medium font-nunito md:text-2xl text-deep_blue">SLP Comment</p>
						<div className="bg-[#E2E8F0] rounded-[20px] px-6 py-8 mt-4">
							<p className="text-base font-normal font-nunito text-deep_blue md:text-xl">
							    {`${childNickname} Is ${assessmentReport?.["Speech and Language Assessment (Receptive Language)"]?.insight} in spoken`}
							    {' '} 
							    <br className="hidden md:inline"/>langages and Instructions
							</p>
						</div>
					</div>
				</div>
			</div>}
			{reportButton === 'module' && <ModuleProgress/>}
		</div>
	)
}

export default Report