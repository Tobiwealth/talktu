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


const ParentAssessment = () => {
	const [step, setStep] = useState<number>(1);
	const [level, setLevel] = useState<number>(1);
	const [startAssessment, setStartAssessment] = useState<boolean>(false)
	const [pickedOption, setPickedOption] = useState<string>("")
	const [rating, setRating] = useState<number>(1)
	const [openClosingModal, setOpenClosingModal] = useState<boolean>(false)

	const handleClick = (maxLevel:number, currentLevel:number, currentStep:number) => {
		if(currentLevel === maxLevel && currentStep === 7){
			return;
		}
		if(currentLevel < maxLevel){
			setLevel(prev => prev + 1);
		} else if (currentLevel === maxLevel){
			setStep(step + 1);
			setLevel(1);
		}
	}

	const handleCloseMobile = () => {
		setOpenClosingModal(true);
		setStartAssessment(false)
	}

	return (
		<main>
		    {!startAssessment && !openClosingModal && <ParentAssessmentModal setStartAssessment={setStartAssessment}/>}
			<div className={`min-h-screen max-h-full w-full flex flex-col items-center justify-center bg-[#EEF3FE] py-24 px-4 relative ${startAssessment ? "": "hidden"}`}>
				<div className=" flex flex-col justify-center items-center bg-[#FCFDFF] w-full md:w-[80vw] lg:w-[70vw] px-8 md:px-10 py-12 rounded-[22px] mb-16 shadowbox">
				    <ProgressBar step={step} level={level}/>
					<div className="w-full ">
						{step === 1 && <div>
							{level === 1 && <div className="pb-12">
						        <StepOne onClick={() => handleClick(4,1,1)}/>
						    </div>}
						    {level === 2 &&<StepComponent 
						        step={1} stepHeading=<p>What is your Child&apos;s <br/>Gender?</p> 
						        stepTitle="Demographic Details"
						        firstButton="Male"
						        secondButton="Female"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        onClick={() => handleClick(4,2,1)}
						    />}
						    {level === 3 &&<StepComponent 
						        step={1} stepHeading=<p>Does your child have <br/>siblings?</p> 
						        stepTitle="Demographic Details"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        input={{label:"Number of Siblings", placeholder:"Enter"}}
						        onClick={() => handleClick(4,3,1)}
						    />}
						    {level === 4 &&<StepComponent 
						        step={1} stepHeading=<p>What is your Child&apos;s <br/>Gender?</p> 
						        stepTitle="Demographic Details"
						        firstButton="Male"
						        secondButton="Female"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        onClick={() => handleClick(4,4,1)}
						    />}
						</div>}
					{/*step 2*/}
						{step === 2 && <div>
							{level === 1 &&<StepComponent 
						        step={2} stepHeading=<p>Are there any known medical conditions? If yes, please specify?</p> 
						        stepTitle="Demographic Details"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        input={{label:"Health condition", placeholder:"Enter"}}
						        onClick={() => handleClick(3,1,2)}
						    />}
						    {level === 2 &&<StepComponent 
						        step={2} stepHeading=<p>Is the child on any medications? If yes, please list</p> 
						        stepTitle="Demographic Details"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        input={{label:"Medications", placeholder:"Enter"}}
						        onClick={() => handleClick(3,2,2)}
						    />}
						    {level === 3 &&<StepComponent 
						        step={2} stepHeading=<p>Have there been any reports from specialists? If yes, please upload the reports or summarize the findings.</p> 
						        stepTitle="Demographic Details"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        input={{label:"Ear Test result", placeholder:"Enter"}}
						        onClick={() => handleClick(3,3,2)}
						    />}
						</div>}
						{/*step 3*/}
						{step === 3 && <div>
							{level === 1 &&<StepComponent 
						        step={3} stepHeading=<p>How would you rate your child&apos;s memory skills?</p> 
						        stepTitle="Cognitive and Developmental Assessment"
						        rating={rating}
						        onClick={() => handleClick(3,1,3)}
						    />}
						    {level === 2 &&<StepComponent 
						        step={3} stepHeading=<p>How would you rate your child&apos;s attention span?</p> 
						        stepTitle="Cognitive and Developmental Assessment"
						        rating={rating}
						        setRating={setRating}
						        onClick={() => handleClick(3,2,3)}
						    />}
						    {level === 3 &&<StepComponent 
						        step={3} stepHeading=<p>How would you rate your child&apos;s problem-solving abilities?</p> 
						        stepTitle="Cognitive and Developmental Assessment"
						        rating={rating}
						        setRating={setRating}
						        onClick={() => handleClick(3,3,3)}
						    />}
						</div>}
				        {/*step 4*/}
						{step === 4 && <div>
							{level === 1 &&<StepComponent 
						        step={4} stepHeading=<p>How does your child interact with peers?</p> 
						        stepTitle="Social and Behavioral Assessment"
						        rating={rating}
						        setRating={setRating}
						        onClick={() => handleClick(7,1,4)}
						    />}
						    {level === 2 &&<StepComponent 
						        step={4} stepHeading=<p>How does your child interact with adults?</p> 
						        stepTitle="Social and Behavioral Assessment"
						        rating={rating}
						        setRating={setRating}
						        onClick={() => handleClick(7,2,4)}
						    />}
						    {level === 3 &&<StepComponent 
						        step={4} stepHeading=<p>How well does your child make appropriate eye contact?</p> 
						        stepTitle="Social and Behavioral Assessment"
						        rating={rating}
						        onClick={() => handleClick(7,3,4)}
						    />}
						    {level === 4 &&<StepComponent 
						        step={4} stepHeading=<p>Does your child exhibit any repetitive behaviors?</p> 
						        stepTitle="Social and Behavioral Assessment"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        onClick={() => handleClick(7,4,4)}
						    />}
						    {level === 5 &&<StepComponent 
						        step={4} stepHeading=<p>Does your child have any sensory sensitivities?</p> 
						        stepTitle="Social and Behavioral Assessment"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        onClick={() => handleClick(7,5,4)}
						    />}
						    {level === 6 &&<StepComponent 
						        step={4} stepHeading=<p>How would you rate your child&apos;s daily living skills (e.g dressing, feeding)</p> 
						        stepTitle="Social and Behavioral Assessment"
						        rating={rating}
						        setRating={setRating}
						        onClick={() => handleClick(7,6,4)}
						    />}
						    {level === 7 &&<StepComponent 
						        step={4} stepHeading=<p>How independent is your child in completing tasks?</p> 
						        stepTitle="Social and Behavioral Assessment"
						        rating={rating}
						        onClick={() => handleClick(7,7,4)}
						    />}
						</div>}
					    {/*step 5*/}
					    {step === 5 &&<div>
					    	{Step5.map((item,i) => {
					    		if(level === item.level) { return (<StepComponent key={item.level} 
						        step={5} stepHeading=<p>{item.stepHeading}</p>
						        stepTitle=<span>Speech and Language Assessment (Receptive Language)</span>
						        rating={rating}
						        setRating={setRating}
						        firstButton={item?.firstButton}
						        secondButton={item?.secondButton}
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        input={item?.input}
						        onClick={() => handleClick(20,item.level,5)}
						        />)}
					        })}
					    </div>}
					   {/*step 6*/}
					   {step === 6 &&<div>
					   	    {level === 1 &&<StepComponent 
						        step={6} stepHeading=<p>What are your main concerns regarding your child&apos;s communication?</p> 
						        stepTitle="Parent/Caregiver Input"
						        input={{label:"Describe", placeholder:"Describe", textArea:true}}
						        onClick={() => handleClick(2,1,6)}
						    />}
						    {level === 2 &&<StepComponent 
						        step={6} stepHeading=<p>What are your goals for your child&apos;s communication skills?</p> 
						        stepTitle="Parent/Caregiver Input"
						        input={{label:"Goals", placeholder:"Enter", textArea:true}}
						        onClick={() => handleClick(2,2,6)}
						    />}
					    </div>}
					    {/*step 7*/}
					    {step === 7 &&<div>
					    	{level === 1 &&<StepComponent 
						        step={7} stepHeading=<p>How familiar is your child with technology? </p> 
						        stepTitle="Technology Use and Accessibility"
						        rating={rating}
						        setRating={setRating}
						        onClick={() => handleClick(3,1,7)}
						    />}
						    {level === 2 &&<StepComponent 
						        step={7} stepHeading=<p>Do you have access to necessary devices (e.g., computer, tablet) and a stable internet connection?</p> 
						        stepTitle="Technology Use and Accessibility"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        onClick={() => handleClick(3,2,7)}
						    />}
						    {level === 3 &&<StepComponent 
						        step={7} level ={3} stepHeading=<p>Are there any adaptations needed for your child to use the platform effectively? If yes, please describe.</p> 
						        stepTitle="Technology Use and Accessibility"
						        firstButton="No"
						        secondButton="Yes"
						        pickedOption={pickedOption}
						        setPickedOption={setPickedOption}
						        onClick={handleCloseMobile}
						    />}
					    </div>}
					</div>
				</div>
			</div>
			{!startAssessment && openClosingModal && <ClosingModal/>}
		</main>
	)
}

export default ParentAssessment