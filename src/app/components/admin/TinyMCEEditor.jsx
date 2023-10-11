import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useRef } from 'react';

export const TinyMCEEditor = ({ content, setContent }) => {
	const editorRef = useRef(null);

	useEffect(() => {
		if (editorRef.current) {
			editorRef.current.setContent(content || ''); // Set initial content
		}
	}, [content]);

	return (
		<Editor
			apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
			// initialValue="<p>This is the initial content of the editor.</p>"
			init={{
				height: 400,
				menubar: false,
				plugins: [
					'advlist autolink lists link image charmap print preview anchor',
					'searchreplace visualblocks code fullscreen',
					'insertdatetime media table paste code help wordcount',
				],
				toolbar:
					'undo redo | formatselect | ' +
					'bold italic backcolor | alignleft aligncenter ' +
					'alignright alignjustify | bullist numlist outdent indent | ' +
					'removeformat',
				content_style:
					'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
			}}
			onEditorChange={(newContent) => {
				setContent(newContent);
			}}
		/>
	);
};
