import Image from "next/image";

export const Heroes = () => {
	const aspectRatioPercent = (9 / 16) * 100;

	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<div
				className='relative w-full max-w-[1500px] mx-auto'
				style={{ paddingTop: `${aspectRatioPercent}%` }}
			>
				<div className='absolute top-0 left-0 right-0 bottom-0'>
					<Image
						src='/hero-image.svg'
						alt='Hero'
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</div>
		</div>
	);
};
