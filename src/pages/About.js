import React from 'react';
import { Link }from 'react-router-dom';

export default function About() {
	return(
		<>
			<h1>This is the About page</h1>
			<Link to='/'>Back Home</Link>
		</>
	)
}