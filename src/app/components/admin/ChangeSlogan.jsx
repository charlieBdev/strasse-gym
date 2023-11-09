import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { WarningSVG } from '../svg/WarningSVG';
import { toast } from 'sonner';
import { updateSlogan } from '../../utils/updateSlogan';

export const ChangeSlogan = () => {
	const [slogan, setSlogan] = useState('');
	const [isUpdating, setUpdating] = useState(false);
	const [errors, setErrors] = useState({});
	const inputRef = useRef(null);

	const validate = () => {
		let errors = {};
		if (!slogan) {
			errors.slogan = 'Slogan is required';
		}
		return errors;
	};

	const clearForm = () => {
		if (inputRef.current) {
			inputRef.current.value = null;
		}
		setSlogan('');
		setErrors({});
	};

	const handleClick = async (e) => {
		e.preventDefault();

		let errors = validate();

		if (Object.keys(errors).length) {
			return setErrors(errors);
		}
		try {
			updateSlogan(slogan);
			clearForm();
		} catch (error) {}
	};

	return (
		<div className='border-1 flex flex-col items-center justify-center gap-3 bg-neutral-800 rounded-lg p-3 w-full max-w-lg'>
			<div className='w-full flex flex-row items-center space-between'>
				<h2>Change Slogan</h2>
				<motion.button
					onClick={handleClick}
					className='bg-neutral-50 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 ml-auto'
					whileTap={{ scale: 0.9 }}
					disabled={isUpdating}
				>
					Change
				</motion.button>
			</div>
			<input
				type='text'
				placeholder='Add a slogan'
				className={`${
					slogan.length ? 'border-green-500' : 'border-transparent'
				} border-2 rounded-lg px-2 py-1 text-neutral-950 w-full focus:outline-none bg-neutral-200 focus:bg-neutral-50`}
				value={slogan}
				name='slogan'
				// className={`${
				// 	slogan ? 'border-2 border-green-500' : ''
				// } rounded-lg w-full`}
				onChange={(e) => setSlogan(e.target.value)}
				disabled={isUpdating}
				ref={inputRef}
			/>
			{errors.slogan && (
				<div className='flex items-center justify-center gap-1 text-orange-500'>
					<WarningSVG />
					<p>{errors.slogan}</p>
				</div>
			)}
			{isUpdating && <p>Updating slogan...</p>}
		</div>
	);
};
