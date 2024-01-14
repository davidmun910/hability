"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();

	return (
		<div className='max-w-5xl space-y-4'>
			<h1 className='text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold'>
				Improve Your <span className='underline'>Days</span>, <br /> Improve
				Your <span className='underline'>Life</span>
			</h1>
			<h3 className='lg:max-w-3xl md:max-w-2xl sm:max-w-lg md:text-lg lg:text-xl text-md max-w-md m-auto font-normal'>
				Elevate your productivity and streamline your daily life with our{" "}
				<span className='underline'>all-in-one platform</span> for time
				management, habit tracking, and personal growth.
			</h3>
			{isLoading && (
				<div className='w-full flex items-center justify-center'>
					<Spinner size='lg' />
				</div>
			)}
			{isAuthenticated && !isLoading && (
				<Button asChild>
					<Link href='/documents'>
						Enter Hability
						<ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</Button>
			)}
			{!isAuthenticated && !isLoading && (
				<SignInButton mode='modal'>
					<Button className='font-light h-[50px] w-[200px] rounded-sm'>
						Get Started Free
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</SignInButton>
			)}
		</div>
	);
};
