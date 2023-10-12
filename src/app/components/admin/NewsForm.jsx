import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { storage, db } from '../../../../config';
import Image from 'next/image';
// import { TinyMCEEditor } from '../admin/TinyMCEEditor';

export const NewsForm = () => {
	const fileInputRef = useRef();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [imageUrl, setImageUrl] = useState(null);

	const [image, setImage] = useState(null);

	const [uploading, setUploading] = useState(false);
	const [uploadError, setUploadError] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);
		} else {
			setImage(null);
		}
	};

	const handleImageUpload = async (file) => {
		if (!file) return;

		setUploadError(null);
		setUploading(true);

		const storageRef = ref(storage, 'images/' + file.name);

		try {
			const snapshot = await uploadBytes(storageRef, file);
			const firebaseImageUrl = await getDownloadURL(snapshot.ref);

			setImageUrl(firebaseImageUrl);

			setUploadError(null);
			setUploading(false);

			toast.success('News added!');

			setTitle('');
			setContent('');
			setImage(null);
			if (fileInputRef.current) {
				fileInputRef.current.value = '';
			}
		} catch (error) {
			setUploadError('Error uploading image. Please try again');
			setUploading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (title && content) {
			if (image) {
				handleImageUpload(image);
				const newsRef = collection(db, 'news');
				const created = new Date();
				const newDoc = await addDoc(
					newsRef,
					{ title, content, imageUrl, created },
					{ merge: true }
				);
				// alert(newDoc);
			} else {
				toast.error('Missing image');
			}
		} else {
			toast.error('Missing title and/or content');
		}
	};

	return (
		<div className="w-full md:max-w-lg flex flex-col gap-1">
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
					onChange={(e) => setTitle(e.target.value)}
				/>
				{/* <TinyMCEEditor content={content} setContent={setContent} /> */}
				<textarea
					rows="9"
					type="text"
					placeholder="Add content"
					className="rounded-lg px-2 py-1 text-neutral-950 w-full"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<input
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					className="rounded-lg"
					ref={fileInputRef}
				/>
				{uploading && <p>Uploading...</p>}
				{uploadError && <p className="text-red-800">{uploadError}</p>}
				{image && (
					<Image
						src={URL.createObjectURL(image)}
						alt="To upload"
						width={150}
						height={150}
						className="w-1/5"
					/>
				)}

				<motion.button
					className="bg-neutral-50 text-neutral-950 font-medium rounded-full px-3 py-1 mx-auto font-headings"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					Add
				</motion.button>
			</form>
		</div>
	);
};
