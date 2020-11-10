import React, { useState, useEffect } from 'react';
import { Container } from '../../style/Container';
import { Form } from '../../style/Form';
import { Button } from '../../style/Button';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/actions/loginAction';
import { registrationAction } from '../../store/actions/registrationAction';
import { validationAction } from '../../store/actions/validationAction';
import { connect } from 'react-redux';

import {
	LoginContainer,
	LeftSide,
	RightSide,
	Title,
	InputsContainer,
	RegMessage,
} from './styled';

const LoginPage = props => {
	const [currentStage, setCurrentStage] = useState(0);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [regEmail, setRegEmail] = useState('');
	const [regPassword, setRegPassword] = useState('');
	const [code, setValidationCode] = useState('');
	const [first_name, setUserFirstName] = useState('');
	const [last_name, setUserLastName] = useState('');
	const [password_repeat, setPasswordRepeat] = useState('');
	const [company, setCompany] = useState('');
	const history = useHistory();

	const loginBtnHandler = e => {
		e.preventDefault();
		props.dispatch(
			login(
				{
					email,
					password,
				},
				history
			)
		);
	};

	const handleRegistration = e => {
		e.preventDefault();
		if (
			regEmail.length === 0 ||
			first_name.length === 0 ||
			last_name.length === 0 ||
			company.length === 0
		) {
			alert('Please complete all fields!');
		} else {
			setCurrentStage(currentStage + 1);
			props.dispatch(
				registrationAction(
					{
						email: regEmail,
						first_name,
						last_name,
						company,
					},
					history
				)
			);
		}
	};

	const handleValidation = e => {
		e.preventDefault();
		if (regPassword !== password_repeat) {
			alert('Passwords do not match!');
		} else {
			setCurrentStage(currentStage + 1);
			props.dispatch(
				validationAction(
					{
						email: regEmail,
						code,
						password: regPassword,
						password_repeat,
					},
					history
				)
			);
		}
	};

	// Timeout function to take registration
	// form back to initial state
	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentStage === 3) {
				setCurrentStage(0);
				setUserFirstName('');
				setUserLastName('');
				setRegEmail('');
				setCompany('');
			}
		}, 2000);
		return () => clearTimeout(timer);
	}, [currentStage]);

	return (
		<Container centerLoginContainer>
			<LoginContainer>
				<LeftSide>
					{/* Change title to Validation when validation step is reached */}
					{currentStage === 2 ? (
						<Title>
							<h1>Validation</h1>
						</Title>
					) : (
						<Title>
							<h1>Sign Up</h1>
						</Title>
					)}

					{/* First Step of Registration - User details */}
					{currentStage === 0 ? (
						<InputsContainer registration>
							<div>
								{/* First Name and Last Name inputs are half of the other inputs */}
								<Form
									type='text'
									value={first_name}
									onChange={e => setUserFirstName(e.currentTarget.value)}
									placeholder='First Name'
									required
									regHalfInput
								/>
								<Form
									type='text'
									value={last_name}
									onChange={e => setUserLastName(e.currentTarget.value)}
									placeholder='Last Name'
									required
									regHalfInput
								/>
							</div>
							<Form
								type='text'
								value={regEmail}
								onChange={e => setRegEmail(e.currentTarget.value)}
								placeholder='Email'
								required
							/>
							<Form
								type='text'
								value={company}
								onChange={e => setCompany(e.currentTarget.value)}
								placeholder='Company'
								required
							/>
							{/* If the button is pressed, first step is done and user
								should see a message */}
							<Button registerLoginBtn onClick={handleRegistration}>
								Register
							</Button>
						</InputsContainer>
					) : null}

					{/* Second Step of Registration - Successful registration message */}
					{currentStage === 1 ? (
						<InputsContainer registration>
							<RegMessage>
								<p>
									Thanks for your registration. We've sent a validation code to
									your email address.
								</p>
							</RegMessage>
							<Button registerLoginBtn onClick={handleRegistration}>
								Verification
							</Button>
						</InputsContainer>
					) : null}

					{/* Third Step of Registration - Code verification/validation */}
					{currentStage === 2 ? (
						<InputsContainer registrationVerifyCode>
							<div>
								<Form
									type='text'
									value={regEmail}
									onChange={e => setRegEmail(e.currentTarget.value)}
									placeholder='Email'
									required
									regHalfInput
								/>
								<Form
									type='text'
									value={code}
									onChange={e => setValidationCode(e.currentTarget.value)}
									placeholder='Verification Code'
									required
									regHalfInput
								/>
							</div>
							<div>
								<Form
									type='password'
									value={regPassword}
									onChange={e => setRegPassword(e.currentTarget.value)}
									placeholder='Password'
									required
									regHalfInput
								/>
								<Form
									type='password'
									value={password_repeat}
									onChange={e => setPasswordRepeat(e.currentTarget.value)}
									placeholder='Repeat Password'
									required
									regHalfInput
								/>
							</div>
							<Button registerLoginBtn onClick={handleValidation}>
								Validate Code
							</Button>
						</InputsContainer>
					) : null}

					{/* Last Step of Registration - Successful validation message. Registration completed */}
					{currentStage === 3 ? (
						<InputsContainer registrationVerifyCode>
							<RegMessage>
								<p>Your code was successfully validated. You can now login.</p>
							</RegMessage>
						</InputsContainer>
					) : null}
				</LeftSide>

				<RightSide>
					<Title>
						<h1>Login</h1>
					</Title>
					<InputsContainer>
						<Form
							type='text'
							value={email}
							onChange={e => setEmail(e.currentTarget.value)}
							placeholder='Email'
							required
						/>
						<Form
							type='password'
							value={password}
							onChange={e => setPassword(e.currentTarget.value)}
							placeholder='Password'
							required
						/>
						<Button registerLoginBtn onClick={loginBtnHandler}>
							Login
						</Button>
					</InputsContainer>
				</RightSide>
			</LoginContainer>
		</Container>
	);
};

//todo login and registration functionality

export default connect()(LoginPage);
