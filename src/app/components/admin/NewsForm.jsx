import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../config';
import Image from 'next/image';
// import { TinyMCEEditor } from '../admin/TinyMCEEditor';

export const NewsForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [uploadError, setUploadError] = useState(null);

	const handleImageUpload = async (file) => {
		// const file = e.target.files[0];

		if (!file) return;

		setUploadError(null);
		setUploading(true);

		const storageRef = ref(storage, 'images/' + file.name);

		try {
			const snapshot = await uploadBytes(storageRef, file);
			const imageUrl = await getDownloadURL(snapshot.ref);

			setImage(imageUrl);
			setUploading(false);

			console.log('Image URL:', imageUrl);
		} catch (error) {
			console.error('Error uploading image:', error);
			setUploadError('Error uploading image. Please try again');
			setUploading(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && content) {
			if (image) {
				handleImageUpload(image);
			} else {
				toast.error('Missing image');
			}
			console.log(title, content, image);
		} else {
			toast.error('Missing title or content');
			console.log('Missing title or content');
		}
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		handleImageUpload(file);
		setImageUrl(URL.createObjectURL(file));
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
				/>
				{uploading && <p>Oooooo Weeeee</p>}
				{uploadError && <p className="text-red-800">{uploadError}</p>}
				{image && (
					<Image src={imageUrl} alt="To upload" width={150} height={150} />
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
