"use client";
import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import speaker from "../../../../../../public/icons/speaker.svg";
import GoBackButton from "@/components/GoBackButton";
import axios from '@/api/useAxios'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import {useActivitiesStore} from '@/store/activitiesStore'
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use'
import { FaCirclePlay } from "react-icons/fa6";

type Resource = {
  driveId: string;
  name: string;
  mimeType: string;
  type: "flashcard" | "video" | string;
  size: string;
  path: string;
  url: string;
  md5Hash: string;
  uploadedAt: string;
  updatedAt: string;
};

type Activity = {
  _id: string;
  driveId: string;
  name: string;
  category: string;
  section: string;
  code: string;
  label: string;
  description: string;
  instruction: string;
  resources: Resource[];
  createdAt: string;
};


const FlashCard = ({ params }: { params: { flashCardId: string } }) => {
	const { flashCardId } = params;
	const token = getCookie('token');

	const [currentIndex, setCurrentIndex] = useState(0);
	const [activity, setActivity] = useState<Activity | null>(null)
    const { width, height } = useWindowSize()
    const [showConfetti, setShowConfetti] = useState<boolean>(false);

	const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
	const [error, setError] = useState<string>("")
	const router = useRouter();

	const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);


    const flashcardDetails = useMemo(() => {
	    if (!activity?.resources) return null;
	    const reversedIndex = activity.resources.length - 1 - currentIndex;
	    return activity.resources[reversedIndex] || null;
    }, [activity, currentIndex]);

	const speakText = useCallback(
	    (text: string) => {
			if (!text || voices.length === 0) return;
			const utterance = new SpeechSynthesisUtterance(text);
			
			const preferredVoice = voices.find(voice => voice.name.includes("Google US English"));
		    if (preferredVoice) {
		        utterance.voice = preferredVoice;
		    }
	        utterance.rate = 1;
	        speechSynthesis.speak(utterance);
	    },
	    [voices]
    );

	const handleSpeaker = useCallback(() => {
	    if (flashcardDetails?.name) {
	        speakText(flashcardDetails.name);
	    }
    }, [flashcardDetails, speakText]);


    const handleNext = () => {
	    if (!activity?.resources.length) return;

	    if (currentIndex === activity?.resources.length - 1) {
	    	setShowConfetti(true);
	    	setTimeout(()=> router.back(), 5200) 
        } else {
		    const nextIndex = (currentIndex + 1) % activity?.resources.length;
		    setCurrentIndex(nextIndex);
	    }
    };

    const togglePlay = () => {
	    if (videoRef.current) {
	      if (isPlaying) {
	        videoRef.current.pause();
	      } else {
	        videoRef.current.play();
	      }
	      setIsPlaying(!isPlaying);
	    }
    };

	useEffect(() => {
	    const populateVoices = () => {
	        const availableVoices = speechSynthesis.getVoices();
	        setVoices(availableVoices);
	    };

	    populateVoices(); // Load voices initially

	    // Listen for changes
	    speechSynthesis.addEventListener("voiceschanged", populateVoices);

	    // Cleanup on unmount
	    return () => {
	        speechSynthesis.removeEventListener("voiceschanged", populateVoices);
	    };
    }, []);

	useEffect(() => {
		const fetchActivities = async() => {
			if (!token ) return;
			try{
                const response = await axios.get(`/activities/${flashCardId}`,
	                {
	                    headers: { 
	                    	'Authorization':`Bearer ${token}`
	                    }
	                }
	            );
	            //console.log(response.data)
	            setActivity(response.data)
			}catch(err){
				console.error(err);
				setError("unable load flash cards")
			}
		}
		fetchActivities()
	}, [])

	useEffect(() => {
	    if (showConfetti) {
	      setTimeout(() => setShowConfetti(false), 5000); // Stop after 5s
	    }
    }, [showConfetti]);


	//console.log("flash card details", flashcardDetails)


	return (
		<div className="min-h-screen pb-16 px-8 ">
			<GoBackButton extraClass="lg:ml-12" />
			<div className="flex flex-col lg:flex-row justify-center mt-8 lg:ml-16 relative">
				{flashcardDetails?.type !== 'video' && <div
					onClick={handleSpeaker}
					className="lg:absolute left-0 mb-6 bg-retro_blue-main w-[62px] h-[56.68px] flex justify-center items-center rounded-[12px] shadowbox3 cursor-pointer"
				>
					<Image
						src={speaker}
						width={35}
						height={35.31}
						quality={100}
						alt="speaker"
						className=""
					/>
				</div>}
				<div className="flex flex-col items-center justify-center gap-12 ">
				    {!flashcardDetails && <div className=" bg-[#020A1A94]">
			    	    <div className="flex flex-col justify-center items-center gap-2 ">
			    	       { !error &&
			    	       	<div className="flex flex-col justify-center items-center gap-2">
			    	       		<div className="w-[100px] h-[100px] rounded-[100%] border-8 border-t-retro_blue-main animate-spin"></div>
				    		    <p className="font-semibold font-nunito text-white text-xl">Preparing FlashCard</p>
			    	       	</div>
			    	       }
				    	   {error && <p className="font-nunito text-white text-lg">{error}</p>}
			    		</div>
		    	    </div>}
					{flashcardDetails?.url && <div className="border-[8px] border-[#0E357E] rounded-[25px]">
						{flashcardDetails?.type === "video" ? 
							<div className="relative">
							<video 
							    width="600" 
							    className="rounded-[20px]"
							    ref={videoRef}
						        onClick={togglePlay}
						        onPlay={() => setIsPlaying(true)}
						        onPause={() => setIsPlaying(false)}
							>
						      <source src={flashcardDetails?.url} type="video/mp4" />
						      Your browser does not support the video tag.
						    </video>
						    {!isPlaying && (
						        <div 
						          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg cursor-pointer"
						          onClick={togglePlay}
						        >
						          <FaCirclePlay className="w-16 h-16 opacity-90 hover:opacity-100 transition text-[#2B3F6C]" />
						        </div>
						      )}
						    </div> :
							<Image
							src={flashcardDetails?.url}
							width={377}
							height={403}
							quality={100}
							alt="flash card"
							className="border-[12px] border[#6296F6] rounded-[20px]"
						    />
					    }
					</div>}
					<div className="flex flex-col items-center justify-center px-5 gap-10">
					    <p className="bg-[#11244842] p-4 rounded-[14px] w-full md:w-1/2 text-center border-[1px] border-[#112448] font-nunito font-medium text-base md:text-xl text-sunglow-main">
							{activity?.instruction}
						</p>
						<button 
						    onClick={handleNext}
						    className="text-deep_blue font-nunito font-bold text-base bg-sunglow-main h-[3.5rem] w-[10.5rem] rounded-[12px] buttonshadow2"
						>
							{currentIndex === (activity?.resources?.length ?? 0)-1 ? "Finish" : "Next"}
						</button>
					</div>
				</div>
			</div>
			<div>
		      {showConfetti && <Confetti width={width} height={height} numberOfPieces={500}/>}
		    </div>
		</div>
	);
};

export default FlashCard;
