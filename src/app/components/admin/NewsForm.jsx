import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Loading } from '../Loading';
import { toast } from 'sonner';
import { storage, db } from '../../../../config';
import { ref, getDownloadURL, uploadBytesResumable } from '@firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import Image from 'next/image';
// import { TinyMCEEditor } from '../admin/TinyMCEEditor';

export const NewsForm = () => {
	const fileInputRef = useRef(null);
	const [isUploadingFile, setIsUploadingFile] = useState(false);
	const [isSubmittingForm, setIsSubmittingForm] = useState(false);
	const [progress, setProgress] = useState(null);
	const [errors, setErrors] = useState({});

	const initialData = {
		title: '',
		content: '',
	};
	const [data, setData] = useState(initialData);
	const { title, content } = data;

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
	};

	useEffect(() => {
		const uploadFile = () => {
			// const name = new Date().getTime() + file.name;
			setIsUploadingFile(true);
			const storageRef = ref(storage, '/news/' + file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setProgress(progress);
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused');
							break;
						case 'running':
							console.log('Upload is running');
							break;
						default:
							break;
					}
				},
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						// console.log(downloadURL, '<<< downloadURL');
						setData((prev) => {
							return { ...prev, imageUrl: downloadURL };
						});
						toast.success('Image uploaded!');
						setIsUploadingFile(false);
					});
				}
			);
		};
		// file && uploadFile();
		if (file) {
			uploadFile();
		}
	}, [file]);

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
		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmittingForm(true);
		setErrors({});

		let errors = validate();
		if (Object.keys(errors).length) {
			setIsSubmittingForm(false);
			return setErrors(errors);
		}

		try {
			const docRef = await addDoc(collection(db, 'news'), {
				...data,
				created: serverTimestamp(),
			});
			toast.success('News added!');
			clearForm();
		} catch (error) {
			toast.error('Error adding news');
		}
		// navigate('/')
		setIsSubmittingForm(false);
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
					className="rounded-lg px-2 py-1 text-neutral-950 w-full"
					value={title}
					name="title"
					onChange={handleChange}
					// error={errors.title ? { content: errors.title } : null}
				/>
				{errors.title && title.length === 0 && (
					<p className="text-red-500">{errors.title}</p>
				)}
				{/* <TinyMCEEditor content={content} setContent={setContent} /> */}
				<textarea
					rows="9"
					type="text"
					placeholder="Add content"
					className="rounded-lg px-2 py-1 text-neutral-950 w-full"
					value={content}
					name="content"
					onChange={handleChange}
					// error={errors.content ? { content: errors.content } : null}
				/>
				{errors.content && content.length === 0 && (
					<p className="text-red-500">{errors.content}</p>
				)}
				<input
					type="file"
					accept="image/*"
					className="rounded-lg"
					onChange={(e) => setFile(e.target.files[0])}
					disabled={isUploadingFile || isSubmittingForm}
					ref={fileInputRef}
				/>
				{/* {!file && <p className="text-red-500">{errors.file}</p>} */}
				{errors.file && <p className="text-red-500">{errors.file}</p>}
				{isUploadingFile && <p>Uploading image...</p>}
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
