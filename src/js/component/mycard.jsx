import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function MyCard() {
	return (
		<Card className="card" style={{ width: "20rem" }}>
			<Card.Img
				variant="top"
				src="https://theawesomeone.com/wp-content/uploads/2021/04/Dota-Dragons-Blood-Season-2-950x500.webp"
			/>
			<Card.Body>
				<Card.Title>Hola soy un card</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make
					up the bulk of the card&apos;s content.
				</Card.Text>
				<Button variant="seodary">Pre-order Now</Button>
			</Card.Body>
		</Card>
	);
}
