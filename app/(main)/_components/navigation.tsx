"use client";

import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";

export const Navigation = () => {
	const pathname = usePathname();
	const isMobile = useMediaQuery("(max-width: 768px)");

	const isResizingRef = useRef(false);
	const sideBarRef = useRef<ElementRef<"aside">>(null);
	const navBarRef = useRef<ElementRef<"div">>(null);
	const [isResetting, setIsResetting] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(isMobile);

	useEffect(() => {
		if (isMobile) {
			collapse();
		} else {
			resestWidth();
		}
	}, [isMobile]);

	useEffect(() => {
		if (isMobile) {
			collapse();
		}
	}, [pathname]);

	const handleMouseDown = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.preventDefault();
		event.stopPropagation();

		isResizingRef.current = true;
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!isResizingRef.current) return;
		let newWidth = event.clientX;

		if (newWidth < 240) {
			newWidth = 240;
		}
		if (newWidth > 480) {
			newWidth = 480;
		}

		if (sideBarRef.current && navBarRef.current) {
			sideBarRef.current.style.width = `${newWidth}px`;
			navBarRef.current.style.setProperty("left", `${newWidth}px`);
			navBarRef.current.style.setProperty(
				"width",
				`calc(100% - ${newWidth}px)`
			);
		}
	};

	const handleMouseUp = () => {
		isResizingRef.current = false;
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
	};

	const resestWidth = () => {
		if (sideBarRef.current && navBarRef.current) {
			setIsCollapsed(false);
			setIsResetting(true);

			sideBarRef.current.style.width = isMobile ? "100%" : "240px";
			navBarRef.current.style.setProperty(
				"width",
				isMobile ? "0" : "calc(100% - 240px"
			);
			navBarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
			setTimeout(() => setIsResetting(false), 300);
		}
	};

	const collapse = () => {
		if (sideBarRef.current && navBarRef.current) {
			setIsCollapsed(true);
			setIsResetting(true);

			sideBarRef.current.style.width = "0";
			navBarRef.current.style.setProperty("width", "100%");
			navBarRef.current.style.setProperty("left", "0");
			setTimeout(() => setIsResetting(false), 300);
		}
	};

	return (
		<>
			<aside
				ref={sideBarRef}
				className={cn(
					"group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
					isResetting && "transition-all ease-in-out duration-300",
					isMobile && "w-0"
				)}
			>
				<div
					role='button'
					onClick={collapse}
					className={cn(
						"group/collapse text-muted-foreground rounded-sm absolute top-[50%] right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
						isMobile && "opacity-100"
					)}
				>
					<div className='h-[40px] w-[3px] rounded-full bg-gray-300 mx-2 group-hover/collapse:scale-110 transition-all ease-in-out'></div>
				</div>
				<div>
					<UserItem />
				</div>
				<div className='mt-4'>
					<p>Documents</p>
				</div>
				<div
					onMouseDown={handleMouseDown}
					onClick={resestWidth}
					className='opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0'
				/>
			</aside>
			<div
				ref={navBarRef}
				className={cn(
					"absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
					isResetting && "transition-all ease-in-out, duration-300",
					isMobile && "left-0 w-full"
				)}
			>
				<nav className='bg-transparent px-3 py-2 w-full'>
					{isCollapsed && (
						<MenuIcon
							role='button'
							onClick={resestWidth}
							className='h-6 w-6 text-muted-foreground'
						/>
					)}
				</nav>
			</div>
		</>
	);
};
