import { motion } from 'framer-motion';
import { useState } from 'react';
import { TinyMCEEditor } from '../admin/TinyMCEEditor';
import { toast } from 'sonner';

export const NewsForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && content) {
			console.log(title, content);
		} else {
			toast.error('Missing title or content');
			console.log('Missing title or content');
		}
	};

	const handleImageUpload = () => {
		console.log('Image uploading kinds');
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

				<textarea
					rows="9"
					type="text"
					placeholder="Add content"
					className="rounded-lg px-2 py-1 text-neutral-950 w-full"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>

				<TinyMCEEditor content={content} setContent={setContent} />
				<input
					type="file"
					accept="image/*"
					onChange={handleImageUpload}
					className="rounded-lg"
				/>
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
