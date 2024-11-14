import Image from "next/image";

interface Props {
	name: string;
	price: number;
	recommended?: boolean;
	selectedPlan: string;
	setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
}

export default function Plan({
	name,
	price,
	recommended,
	selectedPlan,
	setSelectedPlan,
}: Props) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedPlan(event.target.value);
	};
	return (
		<label
			className={`relative flex flex-col rounded-[20px] border ${
				selectedPlan === name
					? "bg-retro_blue-main p-1 md:p-[6px]"
					: "bg-[#eef3fe] border-retro_blue-main p-1 md:p-2"
			}`}
		>
			<div
				className={`flex items-center justify-between px-[18px] py-4 rounded-2xl ${
					selectedPlan === name ? "bg-white" : "bg-retro_blue-100"
				}`}
			>
				<div className="flex items-center gap-[10px]">
					<input
						type="radio"
						name="plan"
						value={name}
						checked={selectedPlan === name}
						onChange={handleChange}
						className="hidden"
					/>
					<Image
						src={
							selectedPlan === name
								? "/images/check-circle.svg"
								: "/images/uncheck-circle.svg"
						}
						alt="check-circle"
						width={32}
						height={32}
						className="w-8 h-8"
					/>
					<div className="flex flex-col">
						<span className="text-lg md:text-2xl font-bold">
							{name}
						</span>
						<span className="text-sm md:text-base font-medium text-neutral-600">
							Per child
						</span>
					</div>
				</div>
				<span className="text-lg md:text-2xl font-bold">
					₦{price.toLocaleString()}
				</span>
			</div>
			{recommended && (
				<>
					<div
						className={`text-white text-sm md:text-base font-bold text-center z-10 mt-4 w-fit mx-auto ${
							selectedPlan === name
								? "-translate-y-[5px]"
								: "-translate-y-[5px] md:-translate-y-[0px]"
						}`}
					>
						RECOMMENDED PLAN
					</div>
					<div className="absolute left-0 right-0 bottom-0 h-[38px] bg-retro_blue-main rounded-b-[20px]"></div>
				</>
			)}
		</label>
	);
}
