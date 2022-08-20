const Sampling = (props) => {
	const { id, src, style } = props;
	return (
		<div
			id={id}
			className="relative border border-teal-400 w-[640px] h-[480px]"
		>
			<img src={src} alt="sampling" className="absolute" style={style} />
		</div>
	);
};

export default Sampling;
