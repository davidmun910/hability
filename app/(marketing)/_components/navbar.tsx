"use client";

import * as React from "react";
import { Dispatch, SetStateAction } from "react";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Logo } from "./logo";

type NavbarProps = {
	pageState: boolean;
	setPageState: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({ pageState, setPageState }: NavbarProps) => {
	const openMenuPage = () => {
		setPageState(true);
	};

	const closeMenuPage = () => {
		setPageState(false);
	};
	const components: { title: string; href: string; description: string }[] = [
		{
			title: "Alert Dialog",
			href: "/docs/primitives/alert-dialog",
			description:
				"A modal dialog that interrupts the user with important content and expects a response.",
		},
		{
			title: "Hover Card",
			href: "/docs/primitives/hover-card",
			description:
				"For sighted users to preview content available behind a link.",
		},
		{
			title: "Progress",
			href: "/docs/primitives/progress",
			description:
				"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		},
		{
			title: "Scroll-area",
			href: "/docs/primitives/scroll-area",
			description: "Visually or semantically separates content.",
		},
		{
			title: "Tabs",
			href: "/docs/primitives/tabs",
			description:
				"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		},
		{
			title: "Tooltip",
			href: "/docs/primitives/tooltip",
			description:
				"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		},
	];

	const scrolled = useScrollTop();
	const { isAuthenticated, isLoading } = useConvexAuth();

	return (
		<div
			className={cn(
				"z-50 fixed w-full p-5 bg-[#e4e3e3] transition ease-in-out ",
				scrolled && "duration-500 bg-white border-b shadow-md",
				pageState && "bg-white border-b shadow-md"
			)}
		>
			<div className='flex items-center m-auto max-w-[1500px]'>
				{/* Logo*/}
				<div className='flex-1 flex justify-start'>
					<Logo />
				</div>

				{/* Navigation Buttons*/}
				<div className='hidden lg:flex justify-center items-center gap-x-2 flex-grow-0'>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Product</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
										<li className='row-span-3'>
											<NavigationMenuLink asChild>
												<a
													className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
													href='/'
												>
													<div className='mb-2 mt-4 text-lg font-medium'>
														shadcn/ui
													</div>
													<p className='text-sm leading-tight text-muted-foreground'>
														Beautifully designed components that you can copy
														and paste into your apps. Accessible. Customizable.
														Open Source.
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem href='/docs' title='Introduction'>
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</ListItem>
										<ListItem href='/docs/installation' title='Installation'>
											How to install dependencies and structure your app.
										</ListItem>
										<ListItem
											href='/docs/primitives/typography'
											title='Typography'
										>
											Styles for headings, paragraphs, lists...etc
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/docs' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Pricing
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Sign In Button */}
				<div className='hidden lg:flex flex-1 justify-end items-center gap-x-2'>
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
				</div>

				{/* Hamburger Bar */}
				<Button
					variant='ghost'
					size='sm'
					onClick={pageState ? closeMenuPage : openMenuPage}
					className='block lg:hidden hover:bg-transparent hover:scale-105 transition-all ease-in-out'
				>
					<div>
						<div
							className={`bar1 bg-gray-800 rounded-full h-[2px] w-[20px] my-[4px] transition duration-300 ease-in-out ${
								pageState ? "transform translate-y-[6px] rotate-[-45deg]" : ""
							}`}
						></div>
						<div
							className={`bar2 bg-gray-800 rounded-full h-[2px] w-[20px] my-[4px] transition duration-300 ease-in-out ${
								pageState ? "opacity-0" : ""
							}`}
						></div>
						<div
							className={`bar3 bg-gray-800 rounded-full h-[2px] w-[20px] my-[4px] transition duration-300 ease-in-out ${
								pageState ? "transform -translate-y-[6px] rotate-[45deg]" : ""
							}`}
						></div>
					</div>
				</Button>
			</div>
		</div>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
