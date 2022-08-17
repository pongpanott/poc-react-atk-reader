const Masking = () => {
	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				paddingLeft: 100,
				paddingTop: 20,
			}}
		>
			<div style={{ border: "2px solid white", width: 100, height: 400 }}>
				<div
					style={{
						backgroundColor: "transparent",
						height: 6,
						marginTop: 90,
					}}
				/>
				<div
					style={{
						backgroundColor: "white",
						height: 6,
						marginTop: 90,
					}}
				/>
				<div
					style={{
						backgroundColor: "white",
						height: 6,
						marginTop: 21,
					}}
				/>
				<div className="flex justify-center mt-[120px]">
					<div className="w-8 h-8 rounded-full border border-white" />
				</div>
			</div>
		</div>
	);
};

export default Masking;
