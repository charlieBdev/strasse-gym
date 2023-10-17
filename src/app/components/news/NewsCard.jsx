import { getTimeAgo } from '../../utils/getTimeAgo';
import Image from 'next/image';
import { ClockSVG } from '../svg/ClockSVG';
import { EditSVG } from '../svg/EditSVG';
import { DeleteSVG } from '../svg/DeleteSVG';
import { useAuthContext } from '../../../context/AuthContext';

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
			className="flex flex-col justify-between gap-1 p-3 select-none hover:shadow hover:shadow-neutral-50"
		>
			<div>
				<Image
					loading="lazy"
					src={imageUrl}
					alt={imageAlt}
					width={250}
					height={250}
					className=" mx-auto w-full"
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
					<EditSVG />
					<DeleteSVG />
				</div>
			)}
		</div>
	);
};
