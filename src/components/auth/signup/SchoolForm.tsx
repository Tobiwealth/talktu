import { forwardRef } from "react";

const SchoolForm = forwardRef<HTMLInputElement, {}>((props, ref) => {
	return (
		<form className="space-y-6">
			<div className="space-y-4">
				<div className="form-field">
					<label htmlFor="school-name">School Name</label>
					<input
						id="school-name"
						type="text"
						ref={ref}
						placeholder="Enter school name"
						className="input-box"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="full-name">Full Name</label>
					<input
						id="full-name"
						type="text"
						placeholder="Enter Full name"
						className="input-box"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="email">School Email Address</label>
					<input
						id="email"
						type="email"
						placeholder="Enter email address"
						className="input-box"
					/>
				</div>
				<div className="form-field">
					<div className="space-y-1">
						<label htmlFor="password">Password</label>
						<div className="text-xs text-neutral-600">
							Password should be at least 8 characters long and
							should contain numbers and symbols
						</div>
					</div>
					<input
						id="password"
						type="password"
						placeholder="Create Password"
						className="input-box"
					/>
				</div>
			</div>
			<div className="text-sm space-y-2 text-neutral-600">
				<div>
					By signing up you agree to the terms and conditions of
					Talktu
				</div>
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						id="subscribeCheckbox"
						className="w-5 h-5 accent-retro_blue-main"
					/>
					<label htmlFor="subscribeCheckbox">
						I’d like to receive weekly emails and updates from
						talktu
					</label>
				</div>
			</div>
			<button
				className="bg-sunglow-main w-3/5 min-[1060px]:w-full text-deep_blue font-semibold min-[1060px]:font-bold text-lg rounded-xl py-3 shadow-[0px_4px_0px] min-[1060px]:shadow-[0px_7px_0px] shadow-sunglow-900 min-[1060px]:shadow-sunglow-900"
				type="submit"
			>
				<span className="hidden min-[1060px]:block ">
					Create Account
				</span>
				<span className="min-[1060px]:hidden">Next</span>
			</button>
		</form>
	);
});

SchoolForm.displayName = "SchoolForm";

export default SchoolForm;
