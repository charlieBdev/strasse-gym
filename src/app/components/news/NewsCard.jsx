'use client';

import { getTimeAgo } from '../../utils/getTimeAgo';
import Image from 'next/image';
import { ClockSVG } from '../svg/ClockSVG';
import { EditSVG } from '../svg/EditSVG';
import { DeleteSVG } from '../svg/DeleteSVG';
import { ConfirmDeleteSVG } from '../svg/ConfirmDeleteSVG';
import { CancelDeleteSVG } from '../svg/CancelDeleteSVG';

import { useAuthContext } from '../../../context/AuthContext';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../../config';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { useState } from 'react';
import { NewsCardModal } from './NewsCardModal';
import Link from 'next/link';

export const NewsCard = ({
	item: { id, title, content, imageUrl, imageAlt, created },
	removeFromUI,
}) => {
	const [isDeleteConfirmed, setDeleteConfirmed] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);

	const { user } = useAuthContext();
	const storage = getStorage();

	const jsDate = new Date(created.seconds * 1000);
	const timeAgo = getTimeAgo(jsDate);

	const handleConfirmDelete = () => {
		setDeleteConfirmed(true);
	};

	const handleCancelDelete = () => {
		setDeleteConfirmed(false);
	};

	const handleDelete = async () => {
		if (isDeleteConfirmed) {
			const imageRef = ref(storage, imageUrl);

			try {
				await deleteDoc(doc(db, 'news', id));
				toast.success('News deleted successfully!');
				removeFromUI(id);
			} catch (error) {
				toast.error('Error deleting news');
			}

			try {
				await deleteObject(imageRef);
				toast.success('Image deleted successfully!');
			} catch (error) {
				toast.error('Error deleting image');
			}
		}
	};

	return (
		<div
			onClick={() => {
				console.log('Card clicked');
			}}
			className="flex-grow shadow-lg shadow-neutral-950 hover:shadow-xl hover:shadow-neutral-950 rounded-sm snap-center bg-neutral-800 flex flex-col justify-between gap-1 p-3 select-none"
		>
			<div className="flex flex-col gap-1">
				<Image
					loading="lazy"
					src={imageUrl}
					alt={imageAlt}
					style={{ objectFit: 'cover' }}
					width={500}
					height={500}
					className="mx-auto w-full aspect-[16/9] rounded-sm hover:cursor-pointer hover:shadow-xl"
					onClick={() => setModalOpen(true)}
					// priority
				/>
				{/* <div className="flex items-center justify-between"> */}
				<h2 className="text-md font-semibold">{title}</h2>
				{/* <p>{content}</p> */}
				{/* </div> */}
				<div className="flex items-center gap-1 text-neutral-400 ">
					<ClockSVG />
					<p className="text-xs italic">{timeAgo}</p>
				</div>
			</div>
			{isModalOpen && (
				<NewsCardModal
					setModalOpen={setModalOpen}
					imageUrl={imageUrl}
					imageAlt={imageAlt}
					title={title}
					content={content}
					timeAgo={timeAgo}
					onClose={() => setModalOpen(false)}
				/>
			)}
			{user && isDeleteConfirmed ? (
				<div className="flex justify-between gap-3">
					<p className="italic">Are you sure?</p>
					<div className="flex items-center justify-center gap-3">
						<button onClick={handleDelete}>
							<motion.div
								// whileHover={{ scale: 1.1 }}
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
								<ConfirmDeleteSVG />
							</motion.div>
						</button>
						<button onClick={handleCancelDelete}>
							<motion.div
								// whileHover={{ scale: 1.1 }}
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
								<CancelDeleteSVG />
							</motion.div>
						</button>
					</div>
				</div>
			) : user ? (
				<div className="flex justify-center gap-3">
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
						onClick={() => toast.success('You cannot edit yet')}
					>
						{/* <Link
							href={`/admin?id=${id}&title=${encodeURIComponent(
								title
							)}&content=${encodeURIComponent(
								content
							)}&imageUrl=${encodeURIComponent(
								imageUrl
							)}&imageAlt=${encodeURIComponent(imageAlt)}`}
							passHref
						> */}
						<EditSVG />
						{/* </Link> */}
					</motion.div>
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
						onClick={handleConfirmDelete}
					>
						<DeleteSVG />
					</motion.div>
				</div>
			) : null}
		</div>
	);
};
