'use client';

import React, { useState } from 'react';
import { NewsCard } from './NewsCard';
import { dummyNews } from '../../dummyData/dummyNews';
import { motion } from 'framer-motion';
import { PreviousSVG } from '../svg/PreviousSVG';
import { NextSVG } from '../svg/NextSVG';

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
			className="bg-violet-400 min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-between border-b-2 p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<div className="flex flex-col gap-3">
				<h2 className="text-center italic font-semibold text-md underline">
					NEWS
				</h2>
				<div className="grid grid-cols-1 gap-3 w-full">
					{displayedNews.map((item) => (
						// <NewsCard key={item.title} page={currentPage} item={item} />
						<NewsCard key={item.title} item={item} />
					))}
				</div>
			</div>

			<div className="flex gap-3">
				{currentPage > 1 && (
					<motion.button
						onClick={() => handlePageChange(currentPage - 1)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<PreviousSVG />
					</motion.button>
				)}
				{currentPage < Math.ceil(totalCards / cardsPerPage) && (
					<motion.button
						onClick={() => handlePageChange(currentPage + 1)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<NextSVG />
					</motion.button>
				)}
			</div>
		</section>
	);
};
