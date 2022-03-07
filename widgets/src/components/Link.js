import React from 'react';

const Link = ({ className, href, children }) => {

	const onClick = (event) => {

		if (event.metaKey || event.ctrlKey) {

			return; // we would want browser to do its own job when ctrl is pressed on the link i.e. open the page on new tab and return an href.

		}
		event.preventDefault();  // prevents automatic relaod
		window.history.pushState({}, '', href);

		// The purpous of this code is to tell the Route that url has changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<a onClick={onClick} className={className} href={href} >{children}</a>
	)
};

export default Link;