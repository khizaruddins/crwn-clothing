import React from 'react';
import './sign-in.styles.sass';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Signin with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						id="email"
						type="text"
						handleChange={this.handleChange}
						name="email"
						value={this.state.email}
						label="Email"
						required={true}
					/>

					<FormInput
						id="password"
						type="password"
						name="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="Password"
						required={true}
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} type="submit" isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
