import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { MyCard } from "./mycard.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div class="cardbox">
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
			</div>
		</div>
	);
}
