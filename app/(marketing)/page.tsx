import Footer from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
	return (
		<div className='min-h-full flex flex-col'>
			<div className='z-0 top-0 absolute w-full lg:h-[1000px] md:h-[800px] h-[600px] bg-[#e4e3e3]'></div>
			<div className='z-10 flex flex-col items-center justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
				<Heading />
				<Heroes />
			</div>
			<Footer />
		</div>
	);
};

export default MarketingPage;
