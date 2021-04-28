import React from "react";
import MyJumbotron from "./myjumbotron.jsx";
//create your first component

import { MyNavbar } from "./mynavbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { MyCard } from "./mycard.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<MyNavbar />
			<MyJumbotron />
			<div className="cardbox">
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
			</div>
		</div>
	);
}
