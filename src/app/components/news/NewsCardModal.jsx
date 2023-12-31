'use client';

import { replaceNewlinesWithBrTags } from '../../utils/replaceNewlinesWithBrTags';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react';
import Image from 'next/image';
import { ClockSVG } from '../svg/ClockSVG';

export const NewsCardModal = ({
	imageUrl,
	imageAlt,
	title,
	content,
	timeAgo,
	onClose,
}) => {
	return (
		<>
			<Modal
				onClose={onClose}
				isOpen
				shouldBlockScroll
				hideCloseButton
				className='bg-neutral-800 rounded-lg'
				backdrop='blur'
				placement='center'
				// radius="small"
				shadow='sm'
				scrollBehavior='outside'
			>
				<ModalContent>
					<ModalHeader></ModalHeader>
					<ModalBody>
						<Image
							loading='lazy'
							src={imageUrl}
							alt={imageAlt}
							style={{ objectFit: 'cover' }}
							width={500}
							height={500}
							className='mx-auto w-full aspect-[16/9] rounded-sm hover:cursor-pointer hover:shadow-xl'
						/>
						<h2 className='text-md font-semibold'>{title}</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: replaceNewlinesWithBrTags(content),
							}}
						/>
						<div className='flex items-center gap-1 text-neutral-400 '>
							<ClockSVG />
							<p className='text-xs italic'>{timeAgo}</p>
						</div>
					</ModalBody>
					<ModalFooter className='text-left'>
						<button
							onClick={onClose}
							className='rounded-full px-3 py-1 hover:bg-neutral-800'
						>
							Close
						</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
