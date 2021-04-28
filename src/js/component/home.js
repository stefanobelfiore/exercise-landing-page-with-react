import React from "react";
import { MyNavbar } from "./mynavbar.jsx";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<MyNavbar />
		</div>
	);
}
