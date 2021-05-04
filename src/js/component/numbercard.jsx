import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

const NumberCard = props => {
	const [myVarOne, setMyVarOne] = useState(props.time);
	useEffect(() => {
		if (myVarOne != 9) {
			setMyVarOne(myVarOne + 1);
		} else {
			setMyVarOne(0);
		}
	}, [myVarOne]);
	return <div className="one">{myVarOne}</div>;
};

export default NumberCard;

NumberCard.propTypes = {
	time: PropTypes.number
};
