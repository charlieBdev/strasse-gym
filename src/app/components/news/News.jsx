'use client';

// import { dummyNews } from '../../dummyData/dummyNews';
// import { PreviousSVG } from '../svg/PreviousSVG';
// import { NextSVG } from '../svg/NextSVG';
import { useEffect, useRef, useState } from 'react';
import { NewsCard } from './NewsCard';
import { fetchNews } from '../../utils/fetchNews';
import { Loading } from '../Loading';
import { useAnimation, motion, useInView } from 'framer-motion';
import { onViewMotion } from '../../utils/onViewMotion';

export const News = () => {
	const controls = useAnimation();
	const newsRef = useRef(null);
	const isInView = useInView(newsRef);

	// useEffect(() => {
	// 	if (inView) {
	// 		controls.start('visible');
	// 	}
	// }, [controls, inView]);

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
			className="snap-end min-h-[calc(100dvh-5rem)] flex flex-col items-center justify-center border-b-2 p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<div className="flex flex-col items-center justify-center gap-2">
				<h2
					// ref={ref}
					// animate={controls}
					// initial="hidden"
					// variants={{
					// 	...onViewMotion,
					// 	visible: { ...onViewMotion.visible, transition: { duration: 1 } },
					// }}
					className="text-center italic font-semibold text-md underline"
				>
					NEWS
				</h2>
				{/* <div className="grid grid-cols-1 gap-3 w-full h-full"> */}
				{loadingNews ? (
					<Loading />
				) : (
					<motion.div className="w-screen snap-mandatory snap-x grid gap-2 grid-flow-col auto-cols-[96%] sm:auto-cols-[76%] md:auto-cols-[56%] lg:auto-cols-[36%] xl:auto-cols-[16%] overflow-x-auto overscroll-x-contain py-0 px-6 md:px-16 lg:px-24 xl:px-32 scrollbar-hide">
						{news.map((item) => (
							<NewsCard key={item.id} item={item} />
						))}
					</motion.div>
				)}
			</div>

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
