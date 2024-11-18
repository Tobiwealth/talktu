import React from 'react'

const Chat = () => {
	return (
		<div className="h-full min-h-screen w-full flex flex-col justify-between items-center px-8 md:px-16 lg:px-20 py-16">
		    <div className="text-center">
				<h2 className="font-nunito font-semibold text-white text-[2rem]">Hi Jane Doe</h2>
				<p className="font-nunito font-medium text-xl text-retro_blue-500 pb-2">How can we help you?</p>
				<p className="font-nunito font-normal text-base text-retro_blue-700">Send a message and one of our SLPs will get <br/>back to you within 30 minutes</p>
			</div>
			<div className="w-full flex justify-center pb-20">
				<input 
				    type="text" name="chat" 
				    placeholder="Type your message here..."
				    className="h-[62px] w-full max-w-[517px] rounded-[24px] bg-[#15294F33] border-[1px] border-[#2D4675] focus:border-[2px] focus:outline-none
				    text-white font-nunito text-lg px-4"
				/>
			</div>
		</div>
	)
}

export default Chat