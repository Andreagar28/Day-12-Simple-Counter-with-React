import React from "react";
import NumberCard from "./numbercard.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<NumberCard time={0} />
			<NumberCard time={0} />
			<NumberCard time={0} />
			<NumberCard time={0} />
		</div>
	);
}
