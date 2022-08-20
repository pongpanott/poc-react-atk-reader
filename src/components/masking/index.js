const Masking = () => {
	return (
		<div className="absolute w-full h-full top-0 left-0 flex items-center">
			<div className="w-[100px] h-[400px] mx-auto border-2 border-white">
				<div className="h-[5px] mt-[90px]" />
				<div className="mt-[75px]" />
				<div className="h-[5px]" />
				<div className="border border-white h-[5px] mt-[10px]" />
				<div className="h-[5px] mt-[8px]" />
				<div className="border border-white h-[5px] mt-[10px]" />
				<div className="h-[5px] mt-[10px]" />

				<div className="flex justify-center mt-[120px]">
					<div className="w-8 h-8 rounded-full border border-white" />
				</div>
			</div>
		</div>
	);
};

export default Masking;
