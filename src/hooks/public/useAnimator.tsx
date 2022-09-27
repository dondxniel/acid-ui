/***
 * Use Animator hook
 * Exports the JavaScript equivalent of animate.css attention seekers.
 */
import { RefObject } from "react";
import { classes, cleanupTimeout } from "../../constants";

function Animator(ref: RefObject<any>) {
	const performAnimationAndCleanup = (animationClass: string) => {
		var defaultClass = ref.current.className;
		// perform animation
		ref.current.className += animationClass;
		// clean up after 1000 milliseconds (one second)
		setTimeout(() => {
			ref.current.className = defaultClass;
		}, cleanupTimeout);
	};
	const bounceIn = () =>
		performAnimationAndCleanup(classes.attentionSeekers.bounceIn);
	const flash = () =>
		performAnimationAndCleanup(classes.attentionSeekers.flash);
	const pulse = () =>
		performAnimationAndCleanup(classes.attentionSeekers.pulse);
	const rubberBand = () =>
		performAnimationAndCleanup(classes.attentionSeekers.rubberBand);
	const shakeX = () =>
		performAnimationAndCleanup(classes.attentionSeekers.shakeX);
	const shakeY = () =>
		performAnimationAndCleanup(classes.attentionSeekers.shakeY);
	const headShake = () =>
		performAnimationAndCleanup(classes.attentionSeekers.headShake);
	const swing = () =>
		performAnimationAndCleanup(classes.attentionSeekers.swing);
	const tada = () =>
		performAnimationAndCleanup(classes.attentionSeekers.tada);
	const wobble = () =>
		performAnimationAndCleanup(classes.attentionSeekers.wobble);
	const jello = () =>
		performAnimationAndCleanup(classes.attentionSeekers.jello);
	const heartBeat = () =>
		performAnimationAndCleanup(classes.attentionSeekers.heartBeat);

	return {
		bounceIn,
		flash,
		pulse,
		rubberBand,
		shakeX,
		shakeY,
		headShake,
		swing,
		tada,
		wobble,
		jello,
		heartBeat,
	};
}

export default Animator;
