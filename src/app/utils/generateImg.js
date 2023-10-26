// import OpenAI from 'openai';

// const openai = new OpenAI({
// 	organization: 'org-UGLcNLq1b1HGGvFtEckiQ7Ep',
// 	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
// 	dangerouslyAllowBrowser: true,
// });

export async function generateImg(imgPrompt) {
	console.log(imgPrompt);
	const imageSize = ['256x256', '512X512', '1024x1024'];

	try {
		const parameters = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				prompt: imgPrompt,
				n: 3,
				size: imageSize[3],
			}),
		};

		const response = await fetch(
			'https://api.openai.com/v1/images/generations',
			parameters
		);

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error generating images:', error);
	}
}
