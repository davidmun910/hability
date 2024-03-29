"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
	const { user } = useUser();

	return (
		<div className='h-full flex flex-col items-center justify-center space-y-4'>
			<Image
				src='/logo.svg'
				height='300'
				width='300'
				alt='Empty'
				className='dark:hidden'
			/>
			<Image
				src='/logo-dark.svg'
				height='300'
				width='300'
				alt='Empty'
				className='hidden dark:block'
			/>
			<h2 className='text-g font-medium'>Welcome {user?.firstName}!</h2>
			<Button>
				<PlusCircle className='h-4 w-4 mr-2' />
				Create a note
			</Button>
		</div>
	);
};

export default DocumentsPage;
