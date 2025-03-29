import React, {useState} from 'react'
import Image from 'next/image'
import kid_avatar from '../../../../public/icons/kid_avatar.svg'
import Button from '@/components/Button'

interface Form{
	fullName: string;
	nickname: string;
	gender: string;
	birthdate: string;
}
interface ProfileProps {
	nickname?: string;
	fullName?: string;
	birthdate?: string;
	gender?: string;
	readonly: boolean;
	handleClick: () => void;
	form: Form;
	setForm: React.Dispatch<React.SetStateAction<Form>>;
	setEditedName: React.Dispatch<React.SetStateAction<string>>; 
}

const ChildProfile: React.FC<ProfileProps> = ({nickname, fullName, readonly, handleClick, form, setForm, setEditedName, gender, birthdate}) => {
	return (
		<div>
			<div className="font-nunito rounded-[16px] bg-[#112349] mt-5 p-8 w-full lg:w-[90%] xl:w-[80%] flex flex-col gap-6">
				<h3 className="text-lg font-semibold text-white md:text-xl">Edit Profile</h3>
				<div className="flex flex-col items-center justify-center w-fit gap-2">
					<Image
						src={kid_avatar}
						width={70}
						height={70}
						quality={100}
						alt="profile"
						className="rounded-full"
				    />
				    <p className="font-nunito font-medium text-xs text-retro_blue-main bg-[#15294F] border-[1px] border-[#2D4675] rounded-[9px] py-1 px-[10px]">Change Avatar</p>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<div className="flex flex-col gap-2">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="username">Username</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] w-full h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    name="username"
						    placeholder="Sammy"
						    value={nickname}
						    onChange={(e) => setForm({...form, nickname:e.target.value})}
						    readOnly={readonly}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="fullname">Full Name</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] w-full h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    name="fullname"
						    placeholder="Sam Keating"
						    value={fullName}
						    onChange={(e) => {readonly ? setEditedName(e.target.value) : setForm({...form, fullName:e.target.value})}}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="fullname">Gender</label>
						<select 
						    id="gender"
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] w-full h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    value={gender}
							onChange={(e) => setForm({...form, gender:e.target.value})}
							disabled={readonly}
						>
					        <option value="">Select a Gender</option>
					        <option value="male">Male</option>
					        <option value="female">Female</option>
					    </select>
					</div>
					<div className="flex flex-col mb-3 gap-2 w-full">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="fullname">Date of Birth</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] min-w-full placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main"
						    id="birthdate"
						    type="date" 
						    min="2014-01-01"
						    value={birthdate}
						    onChange={(e) => setForm({...form, birthdate:e.target.value})} 
						    readOnly={readonly}
						/>
					</div>
					<Button title={readonly ? "Update" : "Create Child"} buttonClass="w-[168px] h-[42.51px] font-semibold text-deep_blue text-sm" onClick={handleClick}/>
				</div>
			</div>
		</div>
	)
}

export default ChildProfile