"use client";

import { MenuPage } from "./_components/menuPage";
import { Navbar } from "./_components/navbar";
import { useState, useEffect } from "react";

type MarketingLayoutProps = {
	children: React.ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
	const [pageState, setPageState] = useState(false);

	useEffect(() => {
		if (pageState) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [pageState]);

	return (
		<div className='h-full dark:bg-[#1f1f1f]'>
			<Navbar pageState={pageState} setPageState={setPageState} />
			<MenuPage pageState={pageState} />
			<main className='h-full pt-40'>{children}</main>
		</div>
	);
};

export default MarketingLayout;
