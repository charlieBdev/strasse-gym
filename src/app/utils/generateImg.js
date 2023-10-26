import OpenAI from 'openai';
// import { writeFileSync } from 'fs';

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export async function generateImg(imgPrompt) {
	const imageSize = ['256x256', '512X512', '1024x1024'];
	const imageCount = 3;

	try {
		const response = await openai.images.generate({
			prompt: imgPrompt,
			n: imageCount,
			size: imageSize[2], // Using the third size '1024x1024'
		});
		return response;

		// const parameters = {
		// 	method: 'POST',
		// 	headers: {
		// 		Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		prompt: imgPrompt,
		// 		n: {imageCount},
		// 		size: imageSize[3],
		// 	}),
		// };
		// const response = await fetch(
		// 	'https://api.openai.com/v1/images/generations',
		// 	parameters
		// );
		// const data = await response.json();
		// return data;
	} catch (error) {
		console.error('Error generating images:', error);
	}
}
