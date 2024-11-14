interface Props {
	tabs: { id: string; label: string }[];
	setActiveTab: (id:string) => void;
	activeTab: string;
}

export default function Tabs({ tabs, activeTab, setActiveTab }: Props) {
	return (
		<div className="bg-retro_blue-100 flex p-2 gap-[10px] text-xl font-medium font-nunito text-deep_blue text-center rounded-2xl max-sm:text-base">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					className={`${
						activeTab === tab.id && "bg-retro_blue-200"
					} p-[10px] flex-1 rounded-xl transition-all ease-in-out duration-200`}
				>
					{tab.label}
				</button>
			))}
		</div>
	);
}
