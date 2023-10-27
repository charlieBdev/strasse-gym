'use client';

// import { dummyNews } from '../../dummyData/dummyNews';
import { useEffect, useRef, useState } from 'react';
import { fetchNews } from '../../utils/fetchNews';
import { Loading } from '../Loading';
import { motion } from 'framer-motion';
import { NewsCard } from './NewsCard';
import { UpDown } from '../UpDown';
import { SectionHeading } from '../SectionHeading';
import { AddNewsSVG } from '../svg/AddNewsSVG';
import { useAuthContext } from '../../../context/AuthContext';
import Link from 'next/link';

export const News = () => {
	const { user } = useAuthContext();
	const subheading = 'Announcements, seminars, and more!';

	const [news, setNews] = useState([]);
	const [loadingNews, setLoadingNews] = useState(true);
	const [errorFetchingNews, setErrorFetchingNews] = useState(null);
	const [lastDocument, setLastDocument] = useState(null);
	const [lastDocId, setLastDocId] = useState(null);

	const hasMore = lastDocument && lastDocument.id !== lastDocId;
	console.log(lastDocument?.id, lastDocId, hasMore, '<<< hasMore');

	const removeFromUI = (id) => {
		setNews((prevNews) => prevNews.filter((item) => item.id !== id));
	};

	const handleLoadMore = async () => {
		try {
			if (lastDocument && hasMore) {
				const { data: additionalNews } = await fetchNews(lastDocument);
				setNews((prevNews) => [...prevNews, ...additionalNews]);
				setLastDocument(additionalNews[additionalNews.length - 1]);
			}
		} catch (error) {
			setErrorFetchingNews(true);
		}
	};

	useEffect(() => {
		fetchNews()
			.then(({ data, lastId }) => {
				setLastDocId(lastId);
				if (data.length > 0) {
					setNews(data);
					setLastDocument(data[data.length - 1]);
				}
				setLoadingNews(false);
			})
			.catch((error) => {
				setErrorFetchingNews(true);
			});
	}, []);

	return (
		<section
			id='news'
			className='snap-center h-[100dvh] bg-neutral-900 flex flex-col items-center justify-between p-6 md:px-16 lg:px-24 xl:px-32 gap-3'
		>
			<UpDown href={'nav'} direction={'top'} bounce={false} />
			{/* <UpDown href={'nav'} direction={'up'} /> */}
			<div className='flex flex-col items-center justify-center gap-3'>
				<SectionHeading heading={'STRASSE NEWS'} />
				<p>{subheading}</p>
				{loadingNews ? (
					<Loading />
				) : (
					<motion.div className='w-screen snap-mandatory snap-x grid gap-2 grid-flow-col auto-cols-[96%] sm:auto-cols-[76%] md:auto-cols-[56%] lg:auto-cols-[36%] overflow-x-auto overscroll-x-contain py-0 px-6 md:px-16 lg:px-24 xl:px-32 no-scrollbar'>
						{news.map((item) => (
							<NewsCard key={item.id} item={item} removeFromUI={removeFromUI} />
						))}
					</motion.div>
				)}
				{loadingNews ? (
					<p>Loading news...</p>
				) : (
					<>
						<p className='text-neutral-500 text-xs italic'>
							{hasMore ? `${news.length} articles loaded` : 'All news loaded'}
						</p>
						{hasMore && <button onClick={handleLoadMore}>Load More</button>}
					</>
				)}

				{user && (
					<motion.div
						whileTap={{ scale: 0.9 }}
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
						whileHover={{ scale: 1.1 }}
					>
						<Link href={'/admin'}>
							<AddNewsSVG />
						</Link>
					</motion.div>
				)}
			</div>
			<UpDown href={'timetable'} direction={'down'} bounce={false} />
		</section>
	);
};
