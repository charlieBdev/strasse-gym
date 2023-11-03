'use client';

import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export const ContactForm = () => {
	const [isSending, setIsSending] = useState(false);

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		message: Yup.string().required('Message is required'),
	});

	const initialValues = {
		name: '',
		email: '',
		message: '',
	};

	const handleSubmit = async (values, { resetForm }) => {
		setIsSending(true);

		setTimeout(() => {
			setIsSending(false);
			toast.success(
				`Thanks for your message, ${values.name}! We'll get back to you ASAP.`
			);
			resetForm({
				values: initialValues,
			});
		}, 2000);
	};

	return (
		<div className='w-full md:max-w-lg flex flex-col gap-1 mx-auto'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className='bg-neutral-800 flex flex-col p-3 rounded-lg'>
					<div className='flex flex-col'>
						<label htmlFor='name' className='text-sm'>
							Name
						</label>
						<Field
							type='text'
							id='name'
							name='name'
							className='p-2 rounded-lg mb-3 text-neutral-900 border-none placeholder:italic'
							placeholder='Mark'
						/>
						<ErrorMessage
							name='name'
							component='div'
							className='text-orange-500 text-sm'
						/>
					</div>

					<div className='flex flex-col'>
						<label htmlFor='email' className='text-sm'>
							Email
						</label>
						<Field
							type='text'
							id='email'
							name='email'
							className='p-2 rounded-lg mb-3 text-neutral-900 border-none placeholder:italic'
							placeholder='zuck@facebook.com'
						/>
						<ErrorMessage
							name='email'
							component='p'
							className='text-orange-500 text-sm'
						/>
					</div>

					<div className='flex flex-col'>
						<label htmlFor='message' className='text-sm'>
							Message
						</label>
						<Field
							as='textarea'
							id='message'
							name='message'
							className='p-2 rounded-lg mb-3 text-neutral-900 border-none placeholder:italic resize-none'
							placeholder='Do you do private BJJ lessons?'
							rows='6'
						/>
						<ErrorMessage
							name='message'
							component='div'
							className='text-orange-500 text-sm'
						/>
					</div>

					<motion.button
						className='bg-neutral-50 text-neutral-900 hover:bg-neutral-800 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 mx-auto'
						// whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						type='submit'
						disabled={isSending}
					>
						{isSending ? 'Sending...' : 'Send'}
					</motion.button>
				</Form>
			</Formik>
		</div>
	);
};
