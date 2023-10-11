import { useState } from 'react';

export const NewsForm = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, body);
	};

	return (
		<form
			className="flex flex-col items-center justify-center gap-3 border rounded-lg p-3"
			onSubmit={handleSubmit}
		>
			<h2>Add News</h2>
			<input
				type="text"
				placeholder="Add a title"
				className="rounded-lg px-2 py-1 text-neutral-950"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Add the news"
				className="rounded-lg px-2 py-1 text-neutral-950"
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
};
