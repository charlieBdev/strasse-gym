import React from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';

export const Map = () => {
	const address =
		'Meersbrook Enterprise Centre, Unit 208, Valley Rd, Sheffield, S8 9FT';

	return (
		<div>
			<GoogleMapsEmbed
				apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
				// height={200}
				// width='100%'
				mode='place'
				q={address}
				className='w-full md:max-w-lg'
			/>
			{/* <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.229093645849!2d-1.473914!3d53.3570548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879825b9395dcdd%3A0x92629c8541040fcb!2sSTRASSEGYM!5e0!3m2!1sen!2suk!4v1696433808300!5m2!1sen!2suk"
				width="300"
				height="200"
				className="border-none md:hidden rounded-sm"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.229093645849!2d-1.4739139999999653!3d53.3570548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879825b9395dcdd%3A0x92629c8541040fcb!2sSTRASSEGYM!5e0!3m2!1sen!2suk!4v1696428789030!5m2!1sen!2suk"
				width="400"
				height="300"
				// className="border-none md:hidden"
				className="border-none hidden md:block rounded-sm"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe> */}

			{/* <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.229093645849!2d-1.4739139999999653!3d53.3570548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879825b9395dcdd%3A0x92629c8541040fcb!2sSTRASSEGYM!5e0!3m2!1sen!2suk!4v1696428789030!5m2!1sen!2suk"
				width="600"
				height="450"
				className="border-none hidden xl:block rounded-sm"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe> */}
		</div>
	);
};
