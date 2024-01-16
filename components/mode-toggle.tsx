"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div>
			<Switch checked={theme == "dark"} onCheckedChange={toggleTheme} />
		</div>
	);
}
