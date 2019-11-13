import React from 'react';
import './header.styles.sass';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Image/crown.svg';

export const Header = () => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				Shop
			</Link>
			<Link to="/contact" className="option">
				Contact Us
			</Link>
		</div>
	</div>
);
