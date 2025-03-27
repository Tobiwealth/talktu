'use client'
import React, {useState,useEffect} from 'react'
import ReportGraph from '@/components/parentDashboard/ReportGraph'
import Button from '@/components/Button'
import Link from "next/link";
import axios from '@/api/useAxios'
import { getCookie } from 'cookies-next';

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

const AssessmentResponse = ({ params }: { params: { childId: string } }) => {
	const {childId} = params;
	const token = getCookie('token');
	const [assessmentReport, setAssessmentReport] = useState<Sections | null>(null)
	const [childNickname, setChildNickname] = useState<string>("")


	useEffect(() => {
		const fetchAssessmentReport = async() => {
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
	            console.log("nickname",res.data.nickname)
	            setChildNickname(res.data.nickname)
	        } catch (err) {
	            console.log(err);
	        }
	    }
	    fetchAssessmentReport();
	}, [])

	console.log(childId, assessmentReport)
	console.log("nickname",childNickname)
	console.log(assessmentReport)


	return (
		<div className="bg-[#EEF3FE] px-4 py-12">
			<div className="flex flex-col items-center ">
				<div className="flex flex-col items-center bg-white rounded-[21px] p-4 md:p-8 pb-10 md:pb-16 w-full lg:w-[60vw] relative">
				    <div className="text-center font-nunito md:px-16">
					    <h1 className="font-bold text-2xl md:text-[2.5rem] md:leading-[45.2px] text-deep_blue"><strong>{childNickname}</strong> Speech and Language Assessment Report</h1>
					    <h4 className="font-medium text-base md:text-xl text-neutral-700 lg:px-8 pt-4">{`
					        This Report is based on ${childNickname}’s Speech and language 
					        Assessment and will be scored based on his Receptive, 
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
						    title={assessmentReport?.["Speech and Language Assessment (Expressive Language)"]?.title ?? 'Expressive Language'} details='Your child’s ability to use words, phrases and sentences to communicate' 
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
					</div>
					<div className="rounded-b-[22px] w-full h-[400px] lg:h-screen pb-16 assessment-report-gradient absolute bottom-0 flex flex-col justify-center items-center">
					    <div className="w-[80%]">
							<p className="font-nunito font-semibold text-black text-xs md:text-sm lg:text-xl text-center p-4 md:px-12">Subscribe to see full assessment report and personalised learning plan for Sammy</p>
							<div className="flex justify-center items-center w-full pt-1">
							    <Link href={`/onboarding?user=parent&childId=${childId}`} className='flex justify-center items-center w-[149.02px] h-[40.17px] lg:w-[194px] lg:h-[56.68px] rounded-[12px] text-[10px] md:text-sm lg:text-base text-deep_blue font-nunito font-bold bg-sunglow-main buttonshadow2'>Subscribe</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AssessmentResponse