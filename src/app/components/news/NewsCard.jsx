import { getTimeAgo } from '../../utils/getTimeAgo';
import Image from 'next/image';
import { ClockSVG } from '../svg/ClockSVG';
import { EditSVG } from '../svg/EditSVG';
import { DeleteSVG } from '../svg/DeleteSVG';
import { useAuthContext } from '../../../context/AuthContext';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export const NewsCard = ({
	item: { title, content, imageUrl, imageAlt, created },
}) => {
	const { user } = useAuthContext();

	const jsDate = new Date(created.seconds * 1000);
	const timeAgo = getTimeAgo(jsDate);
	return (
		<div
			onClick={() => {
				console.log(title, 'card clicked');
			}}
			className="shadow-lg shadow-neutral-950 hover:shadow-xl hover:shadow-neutral-950 rounded-sm snap-center bg-neutral-800 flex flex-col justify-between gap-1 p-3 select-none"
		>
			<div className="flex flex-col gap-1">
				<Image
					loading="lazy"
					src={imageUrl}
					alt={imageAlt}
					objectFit="cover"
					width={320}
					height={180}
					className="mx-auto w-full aspect-[16/9] rounded-sm"
					// priority
				/>
				{/* <div className="flex items-center justify-between"> */}
				<h2 className="text-md font-semibold">{title}</h2>
				<p>{content}</p>
				{/* </div> */}
				<div className="flex items-center gap-1 text-neutral-400 ">
					<ClockSVG />
					<p className="text-xs italic">{timeAgo}</p>
				</div>
			</div>
			{user && (
				<div className="flex justify-center gap-3">
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
						onClick={() => toast.error('You cannot edit yet')}
					>
						<EditSVG />
					</motion.div>
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
						onClick={() => toast.error('You cannot delete yet')}
					>
						<DeleteSVG />
					</motion.div>
				</div>
			)}
		</div>
	);
};
