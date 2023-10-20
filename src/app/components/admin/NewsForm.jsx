import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { storage, db } from '../../../../config';
import { ref, getDownloadURL, uploadBytesResumable } from '@firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import { Loading } from '../Loading';
// import Image from 'next/image';
// import { TinyMCEEditor } from '../admin/TinyMCEEditor';

export const NewsForm = () => {
	const fileInputRef = useRef(null);

	const [isUploadingFile, setIsUploadingFile] = useState(false);
	const [fileUploaded, setFileUploaded] = useState(false);
	const [isSubmittingForm, setIsSubmittingForm] = useState(false);
	const [progress, setProgress] = useState(null);
	const [errors, setErrors] = useState({});

	const initialData = {
		title: '',
		content: '',
		imageAlt: '',
	};
	const [data, setData] = useState(initialData);
	const { title, content, imageAlt } = data;

	const [file, setFile] = useState(null);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const clearForm = () => {
		setData(initialData);
		if (fileInputRef.current) {
			fileInputRef.current.value = null;
		}
		setFile(null);
		setFileUploaded(false);
		setErrors({});
	};

	const validate = () => {
		let errors = {};
		if (!title) {
			errors.title = 'Title is required';
		}
		if (!content) {
			errors.content = 'Content is required';
		}
		if (!file) {
			errors.file = 'Please choose an image file';
		}
		if (!imageAlt) {
			errors.imageAlt = 'Image alt is required';
		}
		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!file) {
			return setErrors({ file: 'Please choose an image file' });
		}

		let errors = validate();

		if (Object.keys(errors).length) {
			return setErrors(errors);
		}

		setIsUploadingFile(true);

		const name = new Date().getTime() + `_${file.name}`;
		const storageRef = ref(storage, '/news/' + name);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(progress);
				// switch (snapshot.state) {
				// 	case 'paused':
				// 		console.log('Upload is paused');
				// 		break;
				// 	case 'running':
				// 		console.log('Upload is running');
				// 		break;
				// 	default:
				// 		break;
				// }
			},
			// unnsuccessful image uploads
			(error) => {
				console.log(error);
				setIsUploadingFile(false);
				return toast.error('Error uploading image file');
			},
			// successful image uploads
			async () => {
				setIsUploadingFile(false);
				setFileUploaded(true);
				setIsSubmittingForm(true);

				try {
					const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
					const newsData = {
						...data,
						imageUrl: downloadURL,
						created: serverTimestamp(),
					};
					await addDoc(collection(db, 'news'), newsData);
					toast.success('News added!');
					clearForm();
				} catch (error) {
					return toast.error('Error adding news (Firestore)');
				} finally {
					setIsSubmittingForm(false);
				}
			}
		);
	};

	return (
		<div className="w-full md:max-w-lg flex flex-col gap-1">
			{/* {isSubmittingForm ? (
				<Loading />
			) : ( */}
			<form
				className="flex flex-col items-center justify-center gap-3 border rounded-lg p-3 w-full"
				onSubmit={handleSubmit}
			>
				<h2>Add News</h2>
				<input
					type="text"
					placeholder="Add a title"
					className={`${
						title.length ? ' bg-green-500' : ''
					} rounded-lg px-2 py-1 text-neutral-950 w-full`}
					value={title}
					name="title"
					onChange={handleChange}
				/>
				{errors.title && title.length === 0 && (
					<p className="text-red-500">{errors.title}</p>
				)}
				{/* <TinyMCEEditor content={content} setContent={setContent} /> */}
				<textarea
					rows="9"
					type="text"
					placeholder="Add content"
					className={`${
						content.length ? 'bg-green-500' : ''
					} rounded-lg px-2 py-1 text-neutral-950 w-full`}
					value={content}
					name="content"
					onChange={handleChange}
				/>
				{errors.content && content.length === 0 && (
					<p className="text-red-500">{errors.content}</p>
				)}
				<input
					type="file"
					accept="image/*"
					className={`${
						file ? 'bg-green-500 text-neutral-950' : ''
					} rounded-lg`}
					onChange={(e) => setFile(e.target.files[0])}
					disabled={isUploadingFile || isSubmittingForm}
					ref={fileInputRef}
				/>
				{errors.file && !file && <p className="text-red-500">{errors.file}</p>}
				{isUploadingFile && <p>Uploading image... {Math.floor(progress)}%</p>}
				<input
					type="text"
					placeholder="Add an image description"
					className={`${
						imageAlt.length ? 'bg-green-500' : ''
					} rounded-lg px-2 py-1 text-neutral-950 w-full`}
					value={imageAlt}
					name="imageAlt"
					onChange={handleChange}
				/>
				{errors.imageAlt && imageAlt.length === 0 && (
					<p className="text-red-500">{errors.imageAlt}</p>
				)}
				<motion.button
					className="bg-neutral-50 text-neutral-950 font-medium rounded-full px-3 py-1 mx-auto font-headings"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					// disabled={progress !== null && progress < 100}
					disabled={isUploadingFile || isSubmittingForm}
				>
					Add
				</motion.button>
				{isSubmittingForm && <p>Adding news...</p>}
			</form>
			{/* )} */}
		</div>
	);
};
