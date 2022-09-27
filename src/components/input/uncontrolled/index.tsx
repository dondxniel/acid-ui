import React from "react";
// constants
import { inputTypes } from "../../../constants";
// interfaces
import { UncontrolledInputProps } from "../../../interfaces/InputProps";
// styles
// import "../../../styles/input.scss";
// input fields
import Password from "./Password";

export default function ({ type }: UncontrolledInputProps) {
	if (type === inputTypes.pw) return <Password />;

	return (
		<input
			type={inputTypes.txt}
			placeholder="!unknown/unrepresented input type!"
		/>
	);
}
