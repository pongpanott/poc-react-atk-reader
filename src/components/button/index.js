import React from "react";

const Button = (props) => {
	const { onClick } = props;
	return (
		<button
			onClick={onClick}
			className="h-9 flex items-center bg-blue-500  active:bg-blue-700 text-white px-4 rounded-lg mx-auto"
		>
			Capture
		</button>
	);
};

export default Button;
