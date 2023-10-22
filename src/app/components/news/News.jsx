'use client';

// import { dummyNews } from '../../dummyData/dummyNews';
import { ScrollingNews } from './ScrollingNews';
import { useEffect, useRef, useState } from 'react';
import { fetchNews } from '../../utils/fetchNews';
import { Loading } from '../Loading';
import { motion } from 'framer-motion';
import { NewsCard } from './NewsCard';
import { UpDown } from '../UpDown';
import { SectionHeading } from '../SectionHeading';

export const News = () => {
	const [news, setNews] = useState([]);
	const [loadingNews, setLoadingNews] = useState(true);
	// const [errorFetchingNews, setErrorFetchingNews] = useState(null);

	const removeFromUI = (id) => {
		setNews((prevNews) => prevNews.filter((item) => item.id !== id));
	};

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

	// const scrollingNews =
	// 	'Welcome to Strasse News! Scroll right below to see announcements, seminar pictures, plus more!';

	return (
		<section
			id="news"
			className="snap-center h-[100dvh] bg-neutral-900 flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			{/* <UpDown href={'nav'} direction={'up'} /> */}
			{/* <div className="flex flex-col items-center justify-center gap-3"> */}
			<SectionHeading heading={'STRASSE NEWS'} />
			<p>Announcements, seminars, and more!</p>
			{/* <ScrollingNews text={scrollingNews} /> */}
			{loadingNews ? (
				<Loading />
			) : (
				<motion.div className="w-screen snap-mandatory snap-x grid gap-2 grid-flow-col auto-cols-[96%] sm:auto-cols-[76%] md:auto-cols-[56%] lg:auto-cols-[36%] overflow-x-auto overscroll-x-contain py-0 px-6 md:px-16 lg:px-24 xl:px-32 no-scrollbar">
					{news.map((item) => (
						<NewsCard key={item.id} item={item} removeFromUI={removeFromUI} />
					))}
				</motion.div>
			)}
			<p className="text-neutral-500 text-xs italic">
				{news.length} articles found
			</p>
			{/* </div> */}
			{/* <UpDown href={'timetable'} direction={'down'} /> */}
		</section>
	);
};
