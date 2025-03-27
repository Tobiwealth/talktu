import React from 'react'
// import WeeklyAssessment from '@/components/kidsDashboard/WeeklyAssessment'

const ModuleProgress = () => {
	const list = [1,2,3,4,5,6,7]
	return (
		<div className="justify-center hidden mt-10 lg:flex gap-10">
		    <div className="w-[372px] flex flex-col items-center bg-[#04122E]">
		        <h2 className="w-full font-nunito font-medium text-2xl text-white text-center bg-[#0A1835] rounded-t-[21px] py-4">Learning Path</h2>
			    {/*<div className="p-4"><WeeklyAssessment/></div>*/}
			</div>
			<div className="bg-[#112349] rounded-[28px] px-10 ">
				<h3 className="py-6 pr-32 text-2xl font-medium text-white font-nunito">Showing an overview of your child’s progress in the Module</h3>
				<div className="bg-[#04122E] rounded-[21px] font-nunito">
					<p className="font-medium text-xl text-white p-6 bg-[#0A1835] rounded-t-[21px]">Forming Basic Sentence</p>
					<div className="pb-6">
						<div className="flex justify-between items-center border-[#0F2248] border-b-[1px] border-t-[1px] px-6 py-3">
							<div className="">
								<p className="text-base font-medium text-white">Pronouncing letter “R’’</p>
								<p className="text-xs font-normal text-neutral-400">3/5 Skills Mastered</p>
							</div>
							<p className="text-sm font-medium text-retro_blue-main">In Progress</p>
						</div>
						{list.map(item => <div key={item} className="flex justify-between items-center border-b-[#0F2248] border-b-[1px] px-6 py-3">
							<div key={item} className="">
								<p className="text-base font-medium text-white">Pronouncing letter “R’’</p>
								<p className="text-xs font-normal text-neutral-400">3/5 Skills Mastered</p>
							</div>
							<p className="text-sm font-medium text-white">Yet to begin</p>
						</div>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModuleProgress