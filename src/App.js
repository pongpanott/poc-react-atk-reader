/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import * as htmlToImage from "html-to-image";
import { ColorExtractor } from "react-color-extractor";
import { normal } from "color-blend";
import Masking from "./components/masking";
import DominantColor from "./components/dominant-color";
import Sampling from "./components/sampling";

const App = () => {
	const webcamRef = React.useRef(null);
	const [imgSrc, setImgSrc] = React.useState(null);
	const [testImage1, setTestImage1] = React.useState(null);
	const [testImage2, setTestImage2] = React.useState(null);
	const [testImage3, setTestImage3] = React.useState(null);
	const [testImage4, setTestImage4] = React.useState(null);
	const [testImage5, setTestImage5] = React.useState(null);
	const [resColor1, setresColor1] = React.useState([]);
	const [resColor2, setresColor2] = React.useState([]);
	const [resColor3, setresColor3] = React.useState([]);
	const [resColor4, setresColor4] = React.useState([]);
	const [resColor5, setresColor5] = React.useState([]);
	const [dominantColor1, setDominantColor1] = React.useState(null);
	const [dominantColor2, setDominantColor2] = React.useState(null);
	const [dominantColor3, setDominantColor3] = React.useState(null);
	const [dominantColor4, setDominantColor4] = React.useState(null);
	const [dominantColor5, setDominantColor5] = React.useState(null);

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot({
			width: 640,
			height: 480,
		});
		setImgSrc(imageSrc);
	}, [webcamRef, setImgSrc]);

	const hexToRgb = (hex) => {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16),
			  }
			: null;
	};

	useEffect(() => {
		htmlToImage
			.toJpeg(document.getElementById("canvas1"), { quality: 1 })
			.then(function (dataUrl) {
				setTestImage1(dataUrl);
			});

		htmlToImage
			.toJpeg(document.getElementById("canvas2"), { quality: 1 })
			.then(function (dataUrl) {
				setTestImage2(dataUrl);
			});

		htmlToImage
			.toJpeg(document.getElementById("canvas3"), { quality: 1 })
			.then(function (dataUrl) {
				setTestImage3(dataUrl);
			});

		htmlToImage
			.toJpeg(document.getElementById("canvas4"), { quality: 1 })
			.then(function (dataUrl) {
				setTestImage4(dataUrl);
			});

		htmlToImage
			.toJpeg(document.getElementById("canvas5"), { quality: 1 })
			.then(function (dataUrl) {
				setTestImage5(dataUrl);
			});
	}, [imgSrc]);

	useEffect(() => {
		if (resColor1.length !== 0) {
			setDominantColor1(
				normal(
					resColor1[0],
					resColor1[1],
					resColor1[2],
					resColor1[3],
					resColor1[4],
					resColor1[5]
				)
			);
		}
		if (resColor2.length !== 0) {
			setDominantColor2(
				normal(
					resColor1[0],
					resColor1[1],
					resColor1[2],
					resColor1[3],
					resColor1[4],
					resColor1[5]
				)
			);
		}
		if (resColor3.length !== 0) {
			setDominantColor3(
				normal(
					resColor1[0],
					resColor1[1],
					resColor1[2],
					resColor1[3],
					resColor1[4],
					resColor1[5]
				)
			);
		}
		if (resColor4.length !== 0) {
			setDominantColor4(
				normal(
					resColor1[0],
					resColor1[1],
					resColor1[2],
					resColor1[3],
					resColor1[4],
					resColor1[5]
				)
			);
		}
		if (resColor5.length !== 0) {
			setDominantColor5(
				normal(
					resColor1[0],
					resColor1[1],
					resColor1[2],
					resColor1[3],
					resColor1[4],
					resColor1[5]
				)
			);
		}
	}, [resColor1, resColor2, resColor3, resColor4, resColor5]);

	return (
		<>
			<div className="w-fit mx-auto relative">
				<Webcam
					audio={false}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					screenshotQuality={1}
					mirrored
				/>
				<Masking />
			</div>
			<button
				className="px-2 h-9 flex items-center rounded-lg bg-blue-200 mt-4 mx-auto"
				onClick={capture}
			>
				Capture
			</button>

			<div className="p-4 mt-4 w-fit mx-auto">
				<p>preview image</p>
				{imgSrc && (
					<div className="relative w-fit">
						<img src={imgSrc} />
						<Masking />
					</div>
				)}
			</div>

			<div className="relative p-4 flex flex-wrap gap-2">
				<div>
					<p>Test image 1</p>
					<Sampling
						id="canvas1"
						src={imgSrc}
						style={{ clip: "rect(210px, 330px, 219px, 307px)" }}
					/>
				</div>
				<div>
					<p>Test image 2</p>
					<Sampling
						id="canvas2"
						src={imgSrc}
						style={{ clip: "rect(225px, 330px, 234px, 307px)" }}
					/>
				</div>
				<div>
					<p>Test image 3</p>
					<Sampling
						id="canvas3"
						src={imgSrc}
						style={{ clip: "rect(238px, 330px, 247px, 307px)" }}
					/>
				</div>
				<div>
					<p>Test image 4</p>
					<Sampling
						id="canvas4"
						src={imgSrc}
						style={{ clip: "rect(253px, 330px, 262px, 307px)" }}
					/>
				</div>
				<div>
					<p>Test image 5</p>
					<Sampling
						id="canvas5"
						src={imgSrc}
						style={{ clip: "rect(268px, 330px, 277px, 307px)" }}
					/>
				</div>
			</div>

			{testImage1 && (
				<div className="p-4 hidden">
					Extract color area (dont mind it.)
					<ColorExtractor
						src={testImage1}
						getColors={(color) => {
							const rgb = color.map((c) => {
								const obj = {
									...hexToRgb(c),
									a: 1,
								};

								return obj;
							});

							setresColor1(rgb);
						}}
					/>
					<div style={{ display: "flex", columnGap: 16, marginTop: 60 }}>
						{resColor1.map((color) => (
							<div style={{ backgroundColor: color, width: 50, height: 50 }} />
						))}
					</div>
					<ColorExtractor
						src={testImage2}
						getColors={(color) => {
							const rgb = color.map((c) => {
								const obj = {
									...hexToRgb(c),
									a: 1,
								};

								return obj;
							});

							setresColor2(rgb);
						}}
					/>
					<div style={{ display: "flex", columnGap: 16, marginTop: 60 }}>
						{resColor2.map((color) => (
							<div style={{ backgroundColor: color, width: 50, height: 50 }} />
						))}
					</div>
					<ColorExtractor
						src={testImage3}
						getColors={(color) => {
							const rgb = color.map((c) => {
								const obj = {
									...hexToRgb(c),
									a: 1,
								};

								return obj;
							});

							setresColor3(rgb);
						}}
					/>
					<div style={{ display: "flex", columnGap: 16, marginTop: 60 }}>
						{resColor3.map((color) => (
							<div style={{ backgroundColor: color, width: 50, height: 50 }} />
						))}
					</div>
					<ColorExtractor
						src={testImage4}
						getColors={(color) => {
							const rgb = color.map((c) => {
								const obj = {
									...hexToRgb(c),
									a: 1,
								};

								return obj;
							});

							setresColor4(rgb);
						}}
					/>
					<div style={{ display: "flex", columnGap: 16, marginTop: 60 }}>
						{resColor4.map((color) => (
							<div style={{ backgroundColor: color, width: 50, height: 50 }} />
						))}
					</div>
					<ColorExtractor
						src={testImage5}
						getColors={(color) => {
							const rgb = color.map((c) => {
								const obj = {
									...hexToRgb(c),
									a: 1,
								};

								return obj;
							});

							setresColor5(rgb);
						}}
					/>
					<div style={{ display: "flex", columnGap: 16, marginTop: 60 }}>
						{resColor5.map((color) => (
							<div style={{ backgroundColor: color, width: 50, height: 50 }} />
						))}
					</div>
				</div>
			)}

			<div className="flex flex-wrap gap-x-2">
				<DominantColor color={dominantColor1} title="Dominant Color 1" />
				<DominantColor color={dominantColor2} title="Dominant Color 1" />
				<DominantColor color={dominantColor3} title="Dominant Color 1" />
				<DominantColor color={dominantColor4} title="Dominant Color 1" />
				<DominantColor color={dominantColor5} title="Dominant Color 1" />
			</div>
		</>
	);
};

export default App;
