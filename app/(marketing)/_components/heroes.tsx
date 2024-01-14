import Image from "next/image";

export const Heroes = () => {
	return (
		<div className='flex flex-col items-center justify-center max-w-5xl'>
			<div className='flex items-center'>
				{/* TODO: Add the correct SVG files */}
				<div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]'>
					<Image
						src='./logo.svg'
						alt='hero'
						layout='fill'
						objectFit='contain'
						className='dark:hidden'
					/>
					<Image
						src='./logo-dark.svg'
						alt='hero'
						layout='fill'
						objectFit='contain'
						className='hidden dark:block'
					/>
				</div>
				<div className='relative h-[400px] w-[400px] hidden md:block'>
					<Image
						src='./logo.svg'
						alt='hero'
						layout='fill'
						objectFit='contain'
						className='dark:hidden'
					/>
					<Image
						src='./logo-dark.svg'
						alt='hero'
						layout='fill'
						objectFit='contain'
						className='hidden dark:block'
					/>
				</div>
			</div>
		</div>
	);
};
