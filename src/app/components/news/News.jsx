'use client';

// import { dummyNews } from '../../dummyData/dummyNews';
// import { PreviousSVG } from '../svg/PreviousSVG';
// import { NextSVG } from '../svg/NextSVG';
import { useEffect, useRef, useState } from 'react';
import { NewsCard } from './NewsCard';
import { ScrollingNews } from './ScrollingNews';
import { fetchNews } from '../../utils/fetchNews';
import { Loading } from '../Loading';
import { motion } from 'framer-motion';
import { UpDown } from '../UpDown';

export const News = () => {
	const [news, setNews] = useState([]);
	const [loadingNews, setLoadingNews] = useState(true);
	// const [errorFetchingNews, setErrorFetchingNews] = useState(null);

	useEffect(() => {
		fetchNews()
			.then((data) => {
				setNews(data);
				setLoadingNews(false);
			})
			.catch((error) => {
				setErrorFetchingNews(true);
			});
	}, []);

	const scrollingNews =
		'Welcome to Strasse News! Scroll right below to see announcements, seminar pictures, plus more!';

	// const [currentPage, setCurrentPage] = useState(1);
	// const cardsPerPage = 1;
	// const totalCards = news.length;

	// const handlePageChange = (newPage) => {
	// 	setCurrentPage(newPage);
	// };

	// const startIndex = (currentPage - 1) * cardsPerPage;
	// const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
	// const displayedNews = news.slice(startIndex, endIndex);

	return (
		<section
			id="news"
			className="bg-neutral-900 min-h-[100dvh] flex flex-col items-center justify-between p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<UpDown href={'nav'} direction={'up'} />
			<div className="flex flex-col items-center justify-center gap-3">
				<h2 className="text-center italic font-semibold text-md bg-gradient-to-r from-blue-500 to-purple-500 border-l border-b-2 border-neutral-50 p-3 select-none rounded-sm -rotate-3 hover:rotate-0">
					STRASSE NEWS
				</h2>
				<p>Announcements, seminars, and more!</p>
				{/* <ScrollingNews text={scrollingNews} /> */}
				{loadingNews ? (
					<Loading />
				) : (
					<motion.div className="h-full w-screen snap-mandatory snap-x grid gap-2 grid-flow-col auto-cols-[96%] sm:auto-cols-[76%] md:auto-cols-[56%] lg:auto-cols-[36%] overflow-x-auto overscroll-x-contain py-0 px-6 md:px-16 lg:px-24 xl:px-32 no-scrollbar">
						{news.map((item) => (
							<NewsCard key={item.id} item={item} />
						))}
					</motion.div>
				)}
			</div>
			<UpDown href={'timetable'} direction={'down'} />
			{/* <div className="flex gap-3">
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
			</div> */}
		</section>
	);
};
