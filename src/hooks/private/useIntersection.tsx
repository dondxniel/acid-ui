import { RefObject, useEffect, useState } from "react";

const useIntersection = (element: RefObject<any>) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			setIsVisible(entries[entries.length - 1].isIntersecting);
		});

		element.current && observer.observe(element.current);

		return () => element.current && observer.unobserve(element.current);
	});
	return isVisible;
};

export default useIntersection;
