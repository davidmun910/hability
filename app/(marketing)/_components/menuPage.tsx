"use client";
import * as React from "react";
import { Dispatch, SetStateAction } from "react";

type MenuPageProps = {
	pageState: boolean;
};

export const MenuPage = ({ pageState }: MenuPageProps) => {
	return (
		<div
			className={
				pageState ? "z-40 top-0 absolute w-full h-[120vh] bg-white" : "hidden"
			}
		></div>
	);
};
