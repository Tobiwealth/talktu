import Image from "next/image";
import Navbar from "./(home)/Navbar";
import Hero from "./(home)/Hero";
import LearningPathSection from "./(home)/LearningPathSection";
import WhyTalktuSection from "./(home)/WhyTalktuSection";
import About from "./(home)/About";
import GettingStartedSection from "./(home)/GettingStartedSection";
import Footer from "./(home)/Footer";
import VideoSection from "./(home)/VideoSection";

export default function Home() {
	return (
		<main className="font-nunito">
			<Navbar />
			<Hero />
			<LearningPathSection />
			<WhyTalktuSection />
			<About />
			{/* <VideoSection /> */}
			<GettingStartedSection />
			<Footer />
		</main>
	);
}
