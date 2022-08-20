import React from "react";

const DominantColor = (props) => {
	const { color, title } = props;
	return (
		<div>
			{title}
			{color && (
				<>
					<div
						style={{
							backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
							width: 200,
							height: 200,
						}}
					/>
					<p>{`rgb: ${color.r}, ${color.g}, ${color.b}`}</p>
				</>
			)}
		</div>
	);
};

export default DominantColor;
