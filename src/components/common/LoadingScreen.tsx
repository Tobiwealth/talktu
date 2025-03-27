import React from "react";

interface LoadingScreenProps {
	message?: string;
}

export default function LoadingScreen({
	message = "Loading...",
}: LoadingScreenProps) {
	return (
		<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-90">
			<div className="w-12 h-12 mb-4 border-4 rounded-full border-sunglow-main border-t-sunglow-900 animate-spin"></div>
			<p className="text-lg font-medium text-deep_blue">{message}</p>
		</div>
	);
}
