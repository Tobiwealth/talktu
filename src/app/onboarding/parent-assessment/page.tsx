'use client'
import React, {useState} from 'react'
import Button from '@/components/Button'
import ProgressBar from '@/components/ProgressBar'
import InputBox from '@/components/InputBox'
import StepComponent from '@/components/parentAssessment/StepComponent'
import StepOne from '@/components/parentAssessment/StepOne'
import {Step5} from '@/components/parentAssessment/Step5Elements'
import ParentAssessmentModal from '@/components/parentAssessment/ParentAssessmentModal'
import ClosingModal from '@/components/parentAssessment/ClosingModal'
import axios from '@/api/useAxios'
import {useChildStore} from '@/store/childStore'
import {useAuthStore} from '@/store/authStore'
import {useAssessmentResponseStore} from '@/store/assessmentResponseStore'

interface Q{
	hasFollowUp: boolean;
	identifier: string;
	text: string;
	type: string;
	followUp: string;
	options: string [];
}
interface Steps{
	title: string;
	questions: Q[];
}
type AssessmentResponse = {
    assessmentId: string;
    childId: string;
    steps: {
	    stepId: string;
	    answers: {
	        questionId: string;
	        response: {
	            key: string; 
	            value: string | number;
	            followUpAnswer?: string | null; 
	        };
	    }[];
    }[];
};


const ParentAssessment = () => {
	const token = useAuthStore((state) => state.token);
	const [step, setStep] = useState<number>(1);
	const [level, setLevel] = useState<number>(1);
	const [startAssessment, setStartAssessment] = useState<boolean>(false) // this state if true, the assessment questions are fetched
	const [pickedOption, setPickedOption] = useState<string>("") // this state stores the response from yes or no questions and gender questions
	const [rating, setRating] = useState<number | null>(1) // this state holds the value for the scale or rating questions
	const [openClosingModal, setOpenClosingModal] = useState<boolean>(false) // this closes the last modal
	const [assessment, setAssessment] = useState<Steps[]>([]); // assessment questions
	const [assessmentId, setAssessmentId] = useState<string>("")
	const childId = useChildStore((state) => state.childProfile?.childrenId[0]);
	//const childId = "dj9ediid"
	const [selectedAnswer, setSelectedAnswer] = useState<string|number|null>(null);
	const addResponse = useAssessmentResponseStore((state) => state.addAssessmentResponse);//
	const responsess = useAssessmentResponseStore((state) => state.assessmentResponse); 
	

	const setReponse = (stepId:string, qstnId:string, type:string, hasFollowUp:boolean) => {
		if(!childId || !assessmentId || !qstnId || !type ){
			return;
		}
		addResponse({childId, assessmentId, stepId, questionId:qstnId, type, value: type === 'text' ? selectedAnswer : type === 'scale' ? rating : pickedOption, followUpAnswer: selectedAnswer });
		setSelectedAnswer(null);
		setPickedOption("");
		setRating(1)
	}
	const handleClick = async (maxLevel:number, currentLevel:number, currentStep:number, stepId:string, questionId:string, type:string, hasFollowUp:boolean) => {
		setReponse(stepId, questionId, type, hasFollowUp);
		if(currentLevel === maxLevel && currentStep === 10){
			// try {
	  //           const response = await axios.post('assessment-responses',
	  //               JSON.stringify({ assessmentResponse}),
	  //               {
	  //                   headers: { 
	  //                   	'Content-Type': 'application/json',
	  //                   	'Authorization':`Bearer ${token}` 
	  //                   }
	  //                   // withCredentials: true
	  //               }
	  //           );
	  //           console.log(response.data);
	  //           handleCloseMobile()

	  //       } catch (err) {
	  //           console.log(err);
	  //       }
	        handleCloseMobile()
		}
		if(currentLevel < maxLevel){
			setLevel(prev => prev + 1);
		} else if (currentLevel === maxLevel){
			setStep(step + 1);
			setLevel(1);
		}
		console.log('level',currentLevel)
	}

	const handleCloseMobile = () => {
		setOpenClosingModal(true);
		setStartAssessment(false)
	}

	const handleAssessment = async() => {
		try {
            const response = await axios.get('/sta',
                {
                    headers: { 'Content-Type': 'application/json' }
                    // withCredentials: true
                }
            );
           ///console.log(response)
            setAssessment(response?.data.steps)
            setAssessmentId(response?.data._id)
            setStartAssessment(true)
        } catch (err) {
            console.log(err);
        }
	}
	console.log(assessment, assessmentId)
	console.log('asest response', responsess);

	return (
		<main>
		    {!startAssessment && !openClosingModal && <ParentAssessmentModal handleClick={handleAssessment}/>}
			<div className={`min-h-screen max-h-full w-full flex flex-col items-center justify-center bg-[#EEF3FE] py-24 px-4 relative ${startAssessment ? "": "hidden"}`}>
				<div className=" flex flex-col justify-center items-center bg-[#FCFDFF] w-full md:w-[80vw] lg:w-[70vw] px-8 md:px-10 py-12 rounded-[22px] mb-16 shadowbox">
				    <ProgressBar step={step} level={level}/>
					<div className="w-full ">
						{step === 1 && <div>
							{level === 1 && <div className="pb-12">
						        <StepOne 
							        onClick={() => handleClick(4,1,1,assessment[0]?.title,assessment[0]?.questions[0]?.identifier, assessment[0]?.questions[0]?.type, assessment[0]?.questions[0]?.hasFollowUp  )} 
							        title={assessment[0]?.title || ""} 
							        description={assessment[0]?.questions[0]?.text || ""}
							        answer={selectedAnswer}
									setAnswer={setSelectedAnswer}
						        />
						    </div>}
						</div>}
						{
						    assessment.map((stepItem,index) => {
						    	if(((step === 1 && level > 1) || (step > 1)) && step === index+1){
						    		return (
						    			stepItem?.questions?.map((item,i) => {if(level === i+1) { 
									        return (<StepComponent key={item.identifier} 
										        step={index+1} level={i+1}
										        stepHeading=<p>{item.text}</p> 
										        stepTitle={assessment[index]?.title}
										        firstButton= {item.type === "multiple_choice" ? item?.options[0]: item.type === "yes_no" ? 'yes': null}
										        secondButton= {item.type === "multiple_choice" ? item?.options[1]: item.type ===  "yes_no" ? 'no': null}
										        pickedOption={pickedOption}
										        setPickedOption={setPickedOption}
										        onClick={() => handleClick(assessment[index]?.questions.length,i+1,index+1, stepItem?.title, item.identifier, item.type, item.hasFollowUp)}
										        rating={item.type === "scale" ? rating : null}
										        setRating={item.type === "scale" ? setRating : null}
										        answer={selectedAnswer}
										        setAnswer={setSelectedAnswer}
										        input={item.type === "text" ? {label:item?.followUp ? item?.followUp : "Describe", placeholder:"Enter", textArea:!item?.hasFollowUp} : item.type === "yes_no" ? {label:item?.followUp , placeholder:"Enter"} : null}
									        />)
									    }})
						    		)
						    	}
						    })
						}
					</div>
				</div>
			</div>
			{!startAssessment && openClosingModal && <ClosingModal/>}
		</main>
	)
}

export default ParentAssessment