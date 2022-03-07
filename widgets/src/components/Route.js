import { useState, useEffect } from "react";

const Route = ({ path, children }) => {

	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {

		const onLocationChange = () => {
			//console.log('Location Change');
			setCurrentPath(window.location.pathname);
		}
		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener('popstate', onLocationChange);
		}
	}, [])

	/*------------This works the same way as window.location.pathname === path works as window .lcoation.pathname always returns the latest path or the real time path it has in the url--------------*/
	return window.location.pathname === path ? children : null;
	// return window.location.pathname === path ? children : null;
};

export default Route;