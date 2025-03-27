'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import kid_avatar from '../../../../../public/icons/kid_avatar.svg'
import { AiOutlinePlus } from "react-icons/ai";
import ChildProfile from '@/components/parentDashboard/profile/ChildProfile'
import axios from "@/api/useAxios";
import { getCookie } from "cookies-next";

type Children = {
	_id: string;
	nickname: string;
	fullName: string;
}

const Profile = () => {
	const token = getCookie("token");
	const [addNewChild, setAddNewChild] = useState<boolean>(false);
	const [children, setChildren] = useState<Children[]>([])
	const [editedName, setEditedName] = useState<string>("")
	const [currentChild, setCurrentChild] = useState<Children>({
		_id: "",
		nickname: "",
		fullName: "",
	});
	const [form, setForm] = useState({
		nickname: "",
		fullName: ""
	})

	const handleChildAvatar = async(child:Children) => {
		setAddNewChild(false)
		setCurrentChild(child)
		setEditedName(child.fullName);
	}

	const getChildren = async() => {
		try{
			const response = await axios.get(
				`/children`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			// console.log("fetch children",response.data.data)
			const extractedChildren = response.data.data.map(({ _id, fullName, nickname }: any) => ({
				_id,
				fullName,
				nickname,
            }));
			setChildren(extractedChildren)
			setCurrentChild(extractedChildren[0]);
			setEditedName(extractedChildren[0].fullName);
		}catch(err){
			console.error(err);
		}
	}

	const createChild = async() => {
		if(form.fullName === "" || form.nickname === "") return;
		try{
			const response = await axios.post(
				"children",
				JSON.stringify(form),
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					// withCredentials: true
				}
			);
			// console.log(response.data)
		}catch(err){
			console.error(err);
		}
	}
	const updateChild = async() => {
		if(editedName === "")return;
		try{
			const response = await axios.patch(
				`/children/${currentChild._id}`,
				{fullName: editedName},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					// withCredentials: true
				}
			);
			//console.log(response.data)
		}catch(err){
			console.error(err);
		}
	}

	useEffect(() => {
		if(!token) return;
		getChildren();
	}, [addNewChild])


	return (
		<div className="w-full min-h-screen px-8 pb-16 mt-8 lg:mt-28 lg:px-0 lg:pr-8">
			<div className="flex gap-4 overflow-auto">
				{ children?.map((item, i) =>(<div key={i} 
				    onClick={() => handleChildAvatar(item)}
				    className={`
				    	flex flex-col justify-center items-center gap-2 bg-[#112349] p-4 rounded-[8px] 
				    	${!addNewChild && currentChild._id === item._id ? "border-[2px] border-retro_blue-main" : ""}
				    `}
				>
					<Image
						src={kid_avatar}
						width={70}
						height={70}
						quality={100}
						alt="profile"
						className="rounded-full"
				    />
				    <p className="text-sm font-semibold text-white font-nunito">{item?.nickname}</p>
				</div>))}
				<div className={`flex flex-col justify-center items-center gap-2 bg-[#112349] p-4 rounded-[8px] ${addNewChild ? "border-[2px] border-retro_blue-main": " "}`}>
					<div onClick={() => setAddNewChild(true)}  className="border-[3px] border-[#0E357E] p-3 rounded-full bg-[#15294F] w-[70px] h-[70px] flex justify-center items-center">
					    <AiOutlinePlus className="text-3xl text-retro_blue-main" />
					</div>
				    <p className="text-sm font-semibold text-white font-nunito">Add a child</p>
				</div>
			</div>
			<ChildProfile 
			    readonly={!addNewChild} 
			    nickname={addNewChild ? form.nickname : currentChild.nickname} 
			    fullName={addNewChild ? form.fullName : editedName}
			    form={form}
			    setForm={setForm}
			    setEditedName={setEditedName}
			    handleClick={addNewChild ? createChild : updateChild}
			/>
		</div>
	)
}

export default Profile