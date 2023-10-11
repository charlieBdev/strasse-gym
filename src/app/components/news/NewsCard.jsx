import { getTimeAgo } from '../../utils/getTimeAgo';
import Image from 'next/image';
import React from 'react';

export const NewsCard = ({
	item: { title, body, imageUrl, imageAlt, date },
}) => {
	const timeAgo = getTimeAgo(new Date(date));
	return (
		<div className="w-full md:max-w-lg flex flex-col gap-1 border p-3 rounded-lg select-none hover:shadow hover:shadow-neutral-50">
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold underline">{title}</h2>
				<p className="text-xs text-center italic">{timeAgo}</p>
			</div>
			<p>{body}</p>
			<Image
				loading="lazy"
				src={imageUrl}
				alt={imageAlt}
				width={500}
				height={500}
				className="rounded-lg mx-auto"
				// priority
			/>
		</div>
	);
};
