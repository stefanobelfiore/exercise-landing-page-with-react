import React from "react";
import MyJumbotron from "./myjumbotron.jsx";
//create your first component

import { MyNavbar } from "./mynavbar.jsx";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<MyNavbar />
			<MyJumbotron />
		</div>
	);
}
