import React from "react";
import MyJumbotron from "./myjumbotron.jsx";
//create your first component

import { MyNavbar } from "./mynavbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { MyCardLoop, MyCard } from "./mycard.jsx";

//create your first component
export function Home() {
	let loop = [];
	for (let index = 0; index < 4; index++) {
		loop.push(MyCard());
	}
	return (
		<div className="text-center mt-5">
			<MyNavbar />
			<MyJumbotron />
			<div className="cardbox">{loop}</div>
		</div>
	);
}
