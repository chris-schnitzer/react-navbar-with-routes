import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return(
		<>	

			<button onClick={() => setOpen(!open)}>
				{open ? <p>X</p> : <p>Menu</p>}
			</button>
			
			<nav className={open ? "nav-links-active" : "nav-links"}>
				<ul>
					<li>
						<NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
							Home
						</NavLink>
					</li>
					
					<li>
						<NavLink to="about" className="nav-link" onClick={() => setOpen(false)}>
							About
						</NavLink>
					</li>
					
					<li>
						<NavLink to="browse" className="nav-link" onClick={() => setOpen(false)}>
							Browse
						</NavLink>
					</li>
					
					<li>
						<NavLink to="select" className="nav-link" onClick={() => setOpen(false)}>
							Select
						</NavLink>
					</li>
					
					<li>
						<NavLink to="contact" className="nav-link" onClick={() => setOpen(false)}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</>	
	)
}
