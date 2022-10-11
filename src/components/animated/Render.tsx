import React, { useRef } from "react";
import {
	classes,
	defaultAnimationRepeatValue,
	defaultEntranceDelay,
	defaultEntranceSpeed,
	defaultEntranceType,
} from "../../constants";
import { defaultEntryType } from "../../constants/defaults";
import RendererProps from "../../interfaces/RendererProps";

const Renderer = ({
	children,
	type = defaultEntryType,
	entranceDelay = defaultEntranceDelay,
	entranceType = defaultEntranceType,
	entranceSpeed = defaultEntranceSpeed,
	animationRepeat = defaultAnimationRepeatValue,
}: RendererProps) => {
	const containerRef = useRef(null);

	if (type === "inline")
		return (
			<span ref={containerRef}>
				<div
					style={{
						display: "inline-block",
					}}
					className={`${classes.entrances[entranceType]} ${classes.delay[entranceDelay]} ${classes.speed[entranceSpeed]} ${classes.repeat[animationRepeat]}`}
				>
					{children}
				</div>
			</span>
		);
	if (type === "block")
		return (
			<div ref={containerRef}>
				<div
					style={{
						display: "inline-block",
					}}
					className={`${classes.entrances[entranceType]} ${classes.delay[entranceDelay]} ${classes.speed[entranceSpeed]} ${classes.repeat[animationRepeat]}`}
				>
					{children}
				</div>
			</div>
		);
	return (
		<span style={{ color: "red" }}>You have to specify an entry type.</span>
	);
};
export default Renderer;
