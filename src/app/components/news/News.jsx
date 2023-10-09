'use client';

import React, { useState } from 'react';
import { NewsCard } from './NewsCard';
import { dummyNews } from '../../dummyData/dummyNews';
import { motion } from 'framer-motion';

export const News = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 1;
	const totalCards = dummyNews.length;

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const startIndex = (currentPage - 1) * cardsPerPage;
	const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
	const displayedNews = dummyNews.slice(startIndex, endIndex);

	return (
		<section
			id="news"
			className="bg-emerald-400 min-h-[calc(100vh-5rem)] w-full flex flex-col items-center border-b-2 p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<h2 className="text-center italic font-semibold text-md font-headings underline">
				NEWS
			</h2>
			<div className="grid grid-cols-1 gap-3">
				{displayedNews.map((item) => (
					// <NewsCard key={item.title} page={currentPage} item={item} />
					<NewsCard key={item.title} item={item} />
				))}
			</div>

			<div className="flex gap-3">
				{currentPage > 1 && (
					<motion.button
						onClick={() => handlePageChange(currentPage - 1)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Previous
					</motion.button>
				)}
				{currentPage < Math.ceil(totalCards / cardsPerPage) && (
					<motion.button
						onClick={() => handlePageChange(currentPage + 1)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Next
					</motion.button>
				)}
			</div>
		</section>
	);
};
