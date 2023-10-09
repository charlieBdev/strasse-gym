import { getTimeAgo } from '@/app/utils/getTimeAgo';
import Image from 'next/image';
import React from 'react';

export const NewsCard = ({
	item: { title, body, imageUrl, imageAlt, date },
}) => {
	const timeAgo = getTimeAgo(new Date(date));
	return (
		<div className="w-full md:max-w-lg flex flex-col gap-3 border p-3 rounded-lg shadow-lg shadow-emerald-600 hover:shadow-xl hover:shadow-emerald-600 select-none mx-auto">
			<h2 className="font-headings text-lg font-semibold">{title}</h2>
			<p>{body}</p>
			<p className="font-headings text-sm italic">{timeAgo}</p>
			<Image
				// style={{ objectFit: 'fit' }}
				// fill={true}
				// placeholder="blur"
				loading="lazy"
				src={imageUrl}
				alt={imageAlt}
				width={250}
				height={250}
				// layout="fit" // Fill the container while maintaining aspect ratio
				// objectFit="cover" // Adjust as needed for your styling
				className="rounded-lg max-w-96 mx-auto w-auto max-h-80 shadow-lg shadow-emerald-600 hover:shadow-xl hover:shadow-emerald-600"
			/>
		</div>
	);
};
