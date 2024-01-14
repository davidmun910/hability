"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

import { Logo } from "./logo";

export const Navbar = () => {
	const scrolled = useScrollTop();
	const { isAuthenticated, isLoading } = useConvexAuth();

	return (
		<div
			className={cn(
				"z-50 fixed w-full p-5 bg-[#e4e3e3] transition duration-500 ease-in-out",
				scrolled && "bg-white border-b shadow-md"
			)}
		>
			<div className='flex items-center m-auto max-w-[1500px]'>
				{/* Logo*/}
				<div className='flex-1 flex justify-start'>
					<Logo />
				</div>

				{/* Navigation Buttons*/}
				<div className='hidden lg:flex justify-center items-center gap-x-2 flex-grow-0'>
					<Button variant='ghost' size='sm' asChild>
						<Link className='font-normal text-[15px]' href='/'>
							PRODUCT
						</Link>
					</Button>
					<Button variant='ghost' size='sm' asChild>
						<Link className='font-normal text-[15px]' href='/'>
							DOWNLOAD
						</Link>
					</Button>
					<Button variant='ghost' size='sm' asChild>
						<Link className='font-normal text-[15px]' href='/'>
							SOLUTIONS
						</Link>
					</Button>
					<Button variant='ghost' size='sm' asChild>
						<Link className='font-normal text-[15px]' href='/'>
							PRICING
						</Link>
					</Button>
				</div>

				{/* Sign In Button */}
				<div className='flex-1 flex justify-end items-center gap-x-2'>
					{isLoading && <Spinner />}
					{!isAuthenticated && !isLoading && (
						<>
							<SignInButton mode='modal'>
								<Button
									className='rounded-full h-[40px] w-[160px] text-[12px] font-light'
									size='sm'
								>
									GET STARTED FREE
								</Button>
							</SignInButton>

							<div className='h-[40px] w-[1px] rounded-full bg-gray-300 mx-2'></div>

							<SignInButton mode='modal'>
								<Button
									className='text-[12px] font-light'
									variant='ghost'
									size='sm'
								>
									SIGN IN
								</Button>
							</SignInButton>
						</>
					)}
					{isAuthenticated && !isLoading && (
						<>
							<Button variant='ghost' size='sm' asChild>
								<Link href='/documents'>Enter Hability</Link>
							</Button>
							<UserButton afterSignOutUrl='/' />
						</>
					)}

					{/* Toggle Light and Dark Mode */}
					{/* <ModeToggle /> */}
				</div>
			</div>
		</div>
	);
};
