"use client";

import type { ChangeEvent } from "react";

type TextBoxProps = {
	label?: string;
	value: string;
	onValueChange: (value: string) => void;
	placeholder?: string;
};

export default function TextBox({
	label = "TextBox",
	value,
	onValueChange,
	placeholder = "Type something...",
}: TextBoxProps) {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onValueChange(event.target.value);
	};

	return (
		<div className="flex w-full max-w-md flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
			<label className="text-sm font-medium text-zinc-700" htmlFor="textbox-input">
				{label}
			</label>
			<input
				id="textbox-input"
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="h-12 rounded-xl border border-zinc-300 px-4 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
			/>
			<p className="text-sm text-zinc-600">
				Current value: <span className="font-medium text-zinc-900">{value || "Empty"}</span>
			</p>
		</div>
	);
}
