import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
	return(
		<>
			<h1>Sorry, nothing can be found here</h1>
			<Link to='/'>Home</Link>
		</>
	)
}