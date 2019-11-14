import React from 'react';
import './custom-button.styles.sass';

export const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<div className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
		{children}
	</div>
);
