'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import kid_jump from '../../../../../../../public/icons/kid_jump.svg'
import speaker from '../../../../../../../public/icons/speaker.svg'
import mutespeaker from '../../../../../../../public/icons/mutespeaker.svg'
//import { useRouter } from 'next/navigation';
import GoBackButton from '@/components/GoBackButton'

const FlashCard = ({ params }: { params: { flashCardId: string } }) => {
	const {flashCardId} = params
	const [mute, setMute] = useState<boolean>(false);
	const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
	//const router = useRouter();

	const handleSpeaker = () => {
		if(!mute){
			speakText("Jump");
		}
		setMute(prev => !prev);
	}

    const speakText = (text:string) => {
	    const utterance = new SpeechSynthesisUtterance(text);
	    if (voices.length > 0) {
            utterance.voice = voices[96]; // Check if voices are available before setting
        }  
	    utterance.rate = 1;
	    speechSynthesis.speak(utterance);
    };

    useEffect(() => {
	    const populateVoices = () => {
	        const availableVoices = speechSynthesis.getVoices();
	        setVoices(availableVoices);
	    };

	    populateVoices();
	    speechSynthesis.onvoiceschanged = populateVoices; // Update voices when they change
    }, []);

    console.log(voices);

	return (
		<div className="min-h-screen pb-16 px-8 ">
			<GoBackButton extraClass="lg:ml-12"/>
			<div className="flex flex-col lg:flex-row justify-center mt-8 lg:ml-16 relative">
				<div 
				    onClick={handleSpeaker} 
				    className="lg:absolute left-0 mb-6 bg-retro_blue-main w-[62px] h-[56.68px] flex justify-center items-center rounded-[12px] shadowbox3 cursor-pointer"
				>
					<Image
						src={!mute ? speaker : mutespeaker}
						width={35}
						height={35.31}
						quality={100}
						alt="speaker"
						className=""
				    />
				</div>			
				<div className="flex flex-col items-center justify-center gap-12 ">
					<div>
						<Image
							src={kid_jump}
							width={377}
							height={403}
							quality={100}
							alt="a kid jumping"
							className=""
					    />
					</div>
					<div className="flex flex-col items-center justify-center gap-10">
						<p className="bg-[#11244842] p-4 rounded-[14px] border-[1px] border-[#112448] font-nunito font-medium text-base md:text-xl text-sunglow-main">Instruction: Sed lacus orci diam ultrices faucibus. Duis sed ornare <br/>facilisis eu pretium. Pharetra diam rhoncus nunc est ultrices</p>
						<button 
						    
						    className="text-deep_blue font-nunito font-bold text-base bg-sunglow-main h-[3.5rem] w-[10.5rem] rounded-[12px] buttonshadow2"
					    >Next</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlashCard;