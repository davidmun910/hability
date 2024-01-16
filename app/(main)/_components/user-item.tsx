"use client";

import { SignOutButton, useUser } from "@clerk/clerk-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";

export const UserItem = () => {
	const { user } = useUser();
	return (
		<div className='w-100 flex justify-between items-center py-5 pl-5 pr-2'>
			<div className='flex font-black text-[30px] cursor-pointer hover:scale-x-105 transition-all ease-in-out'>
				hability.
			</div>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div
							role='button'
							className='group/profile flex items-center text-sm p-3 w-full'
						>
							<div className='gap-x-2 flex items-center max-w-[150px] group-hover/profile:scale-105 transition-all ease-in-out'>
								<Avatar className='h-7 w-7'>
									<AvatarImage src={user?.imageUrl} />
								</Avatar>
								{/* <span className='text-start font-medium line-clamp-1'>
                                    {user?.firstName}&apos;s Profile
                                </span> */}
							</div>
							{/* <ChevronsLeftRight className='rotate-90 ml-2 text-muted-foreground h-4 w-4' /> */}
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className='w-80'
						align='start'
						alignOffset={0}
						forceMount
					>
						<DropdownMenuLabel>{user?.firstName}'s Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<div className='flex p-2 items-center justify-between leading-none'>
							<p className='text-xs font-bold text-muted-foreground'>Email:</p>
							<p className='text-xs font-normal leading-none text-muted-foreground'>
								{user?.emailAddresses[0].emailAddress}
							</p>
						</div>
						<div className='flex p-2 items-center justify-between gap-x-2 leading-none'>
							<p className='text-xs font-bold text-muted-foreground'>
								Dark Mode:
							</p>
							<ModeToggle />
						</div>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							asChild
							className='w-full cursor-pointer text-muted-foreground'
						>
							<SignOutButton>Log out</SignOutButton>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};
