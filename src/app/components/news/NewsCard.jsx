import { getTimeAgo } from '../../utils/getTimeAgo';
import Image from 'next/image';
import React from 'react';

export const NewsCard = ({
	item: { title, body, imageUrl, imageAlt, date },
}) => {
	const timeAgo = getTimeAgo(new Date(date));
	return (
		<div className="flex flex-col gap-3 border p-3 rounded-lg shadow-lg shadow-violet-600 hover:shadow-xl hover:shadow-violet-600 select-none">
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold underline">{title}</h2>
				<p className="text-xs italic">{timeAgo}</p>
			</div>
			<p>{body}</p>
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
				className="rounded-lg max-w-lg mx-auto w-auto max-h-80 shadow-lg shadow-violet-600 hover:shadow-xl hover:shadow-violet-600"
			/>
		</div>
	);
};
