import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.js';


export default function Home() {
	return(
		<>
			<Navbar />
			<Outlet />
		</>
	)
}