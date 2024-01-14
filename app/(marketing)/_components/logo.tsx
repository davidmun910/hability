import Image from "next/image";

export const Logo = ({ isFooter = false }) => {
	return (
		<div className='flex items-center gap-x-2'>
			{/* TODO: Add the text logo */}
			{!isFooter && (
				<>
					<h1 className='hidden md:block font-black text-[40px]'>hability.</h1>

					<h1 className='block md:hidden font-black text-[40px]'>h.</h1>
				</>
			)}
			{isFooter && (
				<h1 className='hidden md:block font-black text-[40px]'>h.</h1>
			)}
		</div>
	);
};
