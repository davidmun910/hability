import Image from "next/image";

export const Logo = () => {
	return (
		<div className='flex items-center gap-x-2'>
			{/* TODO: Add the text logo */}
			<h1 className='hidden md:block font-black text-[40px]'>hability.</h1>
			<div className='block md:hidden'>
				<Image
					src='/logo.svg'
					width='40'
					height='40'
					alt='logo'
					className='block dark:hidden'
				/>
				<Image
					src='/logo-dark.svg'
					width='40'
					height='40'
					alt='logo'
					className='hidden dark:block'
				/>
			</div>
		</div>
	);
};
