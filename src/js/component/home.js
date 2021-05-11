import React from "react";
import NumberCard from "./numbercard.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<NumberCard time={1000} />
			<NumberCard time={100} />
			<NumberCard time={10} />
			<NumberCard time={1} />
		</div>
	);
}
