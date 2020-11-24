import React, { useContext, useEffect } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import validate from '../../utils/validate';
import * as S from './Form.styles';
import FirebaseContext from '../../firebase/context';

const INITIAL_STATE = {
	name: '',
	dob: '',
	phone: null,
	email: '',
};

export const Form = () => {
	const { firebase } = useContext(FirebaseContext);
	const { handleChange, handleSubmit, submitted, errors, values } = useFormValidation(INITIAL_STATE, validate);
	useEffect(() => {
		console.log(submitted);
		if (submitted) {
			const { name, dob, phone, email } = values;
			firebase.db.collection('leads').add({
				name,
				dob,
				phone,
				email,
				created: new Date().toLocaleString(),
			});
			console.log('Logged successfully.');
		}
	}, [submitted]); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<>
			<S.Form action='' onSubmit={handleSubmit}>
				<h2>{submitted ? "You'll hear from us soon." : 'Our Vegas agents will assist you.'}</h2>
				<S.Flex>
					<div>
						{/* leaving one css-in-js for demonstration purposes */}
						<label htmlFor='name' style={{ color: errors.name ? '#cf2317' : '#333' }}>
							First Name
						</label>
						<S.Input required name='name' type='text' placeholder='First Name' onChange={handleChange} value={values.name || ''} />
						{errors.name && <S.Error>{errors.name}</S.Error>}
					</div>
					<div>
						<S.Label htmlFor='dob' triggerError={errors.dob}>
							Date of Birth
						</S.Label>
						<S.Input required name='dob' placeholder='MM/DD/YYYY' onChange={handleChange} value={values.dob || ''} />
						{errors.dob && <S.Error>{errors.dob}</S.Error>}
					</div>
				</S.Flex>
				<S.Flex>
					<div>
						<S.Label htmlFor='phone' triggerError={errors.phone}>
							Phone
						</S.Label>
						<S.Input required name='phone' type='tel' placeholder='000-000-0000' onChange={handleChange} value={values.phone || ''} />
						{errors.phone && <S.Error>{errors.phone}</S.Error>}
					</div>
					<div>
						<S.Label htmlFor='email' triggerError={errors.email}>
							Email
						</S.Label>
						<S.Input
							required
							name='email'
							type='email'
							placeholder='email@domain.com'
							onChange={handleChange}
							value={values.email || ''}
						/>
						{errors.email && <S.Error>{errors.email}</S.Error>}
					</div>
				</S.Flex>
				<S.Button
					type='submit'
					initial='initial'
					whileHover={!submitted ? 'hover' : null}
					whileTap={!submitted ? 'tap' : null}
					variants={S.buttonVariants}
					disabled={submitted}
					submitted={submitted}
				>
					{submitted ? 'THANKS!' : 'SAVE NOW'}
				</S.Button>
				<p>Or call us at XXX.XXX.XXXX.</p>
			</S.Form>
		</>
	);
};

export default Form;
