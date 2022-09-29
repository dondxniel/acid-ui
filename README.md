# ACID UI

![enter image description here](https://user-images.githubusercontent.com/66220736/192905860-7b6a7edf-4f3c-4a54-b24b-efde65d71b2d.png)

## INTRO

ACID UI is a react component and animation library that abstracts out the logic behind compound and simple components without imposing a styling pattern on the developer. Its animation components and hooks are wrappers and helpers for animate.css CSS library, which is marked as a project dependency.

## FEATURES

1. Animated Renders: This is a component wrapper that is used to render a component in an animated manner when they come into view. A use case for this is if you want elements to only get rendered when their within view and you want them to have a dramatic, animated render-like fade-in or zoom-in.
2. Animation hook: This is a hook that programmatically causes your elements to animate in certain ways. A use case for this is if you're trying to make a form input 'wobble' if a certain character is being entered.

## INSTALLATION

With npm:
` npm install acid-ui`

With yarn:
` yarn add acid-ui`

### EXPORTS

Here are the **components** exported from this library

-   `Render`

Here are the **hooks** exported from this library

-   `useAnimator`
    <br/>

## COMPONENTS

### 1. `Render`

Below is how the Render component is used in its simplest form.

```jsx
import { Render } from "acid-ui";

function App() {
	return (
		<Render>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
			consequatur mollitia odit adipisci recusandae enim! Quam dignissimos
			soluta dolor perspiciatis. Cupiditate odio provident aliquid enim
			ducimus inventore! Non, itaque nostrum!
		</Render>
	);
}
```

## HOOKS

### 1. `useAnimator`

Below is how the useAnimator hook is used.

```jsx
import { useAnimator } from "acid-ui";
import { useRef } from "react";

function App() {
	const inputRef = useRef(null);
	const { shakeX } = useAnimator(inputRef);

	const handleSubmit = (e) => {
		e.preventDefault();
		shakeX(); // Shakes the input field when the form is submitted
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input type="text" ref={inputRef} />
				</div>
				<div>
					<button>Submit Form</button>
				</div>
			</form>
		</div>
	);
}

export default App;
```

<br />

## API

> **NOTE:** _All the properties of this element are optional. They are all initialized with default values that work well and are described
> in the table below. Of course, you have the option of overwriting them
> as you please; but be careful. Animations can be pretty displeasing to
> the user and can cause bad UX. So make them as subtle as possible._

### `1. Render`

| Properties        | Default    | Types                   | Description      |
| ----------------- | ---------- | ----------------------- | ---------------- |
| `type`            | `"block"`  | `"block"\|"inline"`      | This describes whether or not you want the renderer to appear as a block or inline level element. |
| `entranceDelay`   | `0`        | `0\|\2\|3\|4\|5`             | This describes how many seconds you want the element's display on view to delay after rendering.                                                                                                                                       |
| `entranceSpeed`   | `"faster"` | `"normal"\|"slow"\|"slower"\|"fast"\|"faster"`     | This describes how fast you want the entrance animation to take place.|
| `animationRepeat` | `0` \| `0 \| 1 \| 2 \| 3 \| "infinite"`   | This refers to the number of times you want the entrance animation to repeat itself; Warning: This can greatly affect user experience negatively if misused. A good rule of thumb, always leave it in `0` unless absolutely necessary.
| `entranceType` | `"zoomIn"` \| `"specialsJackInTheBox" \| "specialsRollIn" \| "backInDown" \| "backInLeft" \| "backInRight" \| "backInUp" \| "bounceIn" \| "bounceInDown" \| "bounceInLeft" \| "bounceInRight" \| "bounceInUp" \| "fadeIn" \| "fadeInDown" \| "fadeInDownBig" \| "fadeInLeft" \| "fadeInLeftBig" \| "fadeInRight" \| "fadeInRightBig" \| "fadeInUp" \| "fadeInUpBig" \| "fadeInTopLeft" \| "fadeInTopRight" \| "fadeInBottomLeft" \| "fadeInBottomRight" \| "flipInX" \| "flipInY" \| "lightSpeedInRight" \| "lightSpeedInLeft" \| "rotateIn" \| "rotateInDownLeft" \| "rotateInDownRight" \| "rotateInUpLeft" \| "rotateInUpRight" \| "zoomIn" \| "zoomInUp" \| "zoomInDown" \| "zoomInLeft" \| "zoomInRight" \| "slideInDown" \| "slideInLeft" \| "slideInRight" \| "slideInUp"` | This describes the type of animation you want to see during the entrance. Go the [animate.style](https://animate.style) to see the above listed animations previews. |

### 2. `useAnimator`

| Access  | Variety                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------- |
| Exports | `bounceIn, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat,` |
