/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import * as htmlToImage from "html-to-image";
import { ColorExtractor } from "react-color-extractor";
import { normal } from "color-blend";
import Button from "./components/button";
import Masking from "./components/masking";

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
			width: 320,
			height: 450,
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
			<div className="w-[600px] mx-auto p-4 border">
				<div className="relative w-[320px] h-[450px] mb-2 mx-auto">
					<Webcam
						audio={false}
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						videoConstraints={{ width: 320, height: 450 }}
					/>
					<Masking />
				</div>
				<Button onClick={() => capture()} />
				<div className="p-4" style={{ marginTop: 100, columnGap: 16 }}>
					<p>preview image</p>
					{imgSrc && (
						<div className="border border-blue-500 relative w-fit">
							<img src={imgSrc} className="h-[450px] w-[320px]" />
							<Masking />
						</div>
					)}
				</div>
			</div>

			<div className="p-4 flex flex-wrap gap-x-2">
				<div>
					<p>Test image 1</p>
					<div
						id="canvas1"
						className="relative border border-teal-400 h-[450px] w-[320px]"
					>
						<img
							src={imgSrc}
							className="h-[450px] w-[320px] absolute"
							style={{ clip: "rect(193px, 162px, 200px, 144px)" }}
						/>
					</div>
				</div>
				<div>
					<p>Test image 2</p>
					<div
						id="canvas2"
						className="relative border border-teal-400 h-[450px] w-[320px]"
					>
						<img
							src={imgSrc}
							className="h-[450px] w-[320px] absolute"
							style={{ clip: "rect(208px, 162px, 215px, 144px)" }}
						/>
					</div>
				</div>
				<div>
					<p>Test image 3</p>
					<div
						id="canvas3"
						className="relative border border-teal-400 h-[450px] w-[320px]"
					>
						<img
							src={imgSrc}
							className="h-[450px] w-[320px] absolute"
							style={{ clip: "rect(218px, 162px, 225px, 144px)" }}
						/>
					</div>
				</div>
				<div>
					<p>Test image 4</p>
					<div
						id="canvas4"
						className="relative border border-teal-400 h-[450px] w-[320px]"
					>
						<img
							src={imgSrc}
							className="h-[450px] w-[320px] absolute"
							style={{ clip: "rect(229px, 162px, 236px, 144px)" }}
						/>
					</div>
				</div>
				<div>
					<p>Test image 5</p>
					<div
						id="canvas4"
						className="relative border border-teal-400 h-[450px] w-[320px]"
					>
						<img
							src={imgSrc}
							className="h-[450px] w-[320px] absolute"
							style={{ clip: "rect(244px, 162px, 251px, 144px)" }}
						/>
					</div>
				</div>
			</div>

			{testImage1 && (
				<div className="p-4">
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
				<div>
					Dominante Color 1
					{dominantColor1 && (
						<>
							<div
								style={{
									backgroundColor: `rgba(${dominantColor1.r},${dominantColor1.g},${dominantColor1.b},${dominantColor1.a})`,
									width: 200,
									height: 200,
								}}
							/>
							<p>
								{`rgb: ${dominantColor1.r}, ${dominantColor1.g}, ${dominantColor1.b}`}
							</p>
						</>
					)}
				</div>
				<div>
					Dominante Color 2
					{dominantColor2 && (
						<>
							<div
								style={{
									backgroundColor: `rgba(${dominantColor2.r},${dominantColor2.g},${dominantColor2.b},${dominantColor2.a})`,
									width: 200,
									height: 200,
								}}
							/>
							<p>
								{`rgb: ${dominantColor2.r}, ${dominantColor2.g}, ${dominantColor2.b}`}
							</p>
						</>
					)}
				</div>
				<div>
					Dominante Color 3
					{dominantColor3 && (
						<>
							<div
								style={{
									backgroundColor: `rgba(${dominantColor3.r},${dominantColor3.g},${dominantColor3.b},${dominantColor3.a})`,
									width: 200,
									height: 200,
								}}
							/>
							<p>
								{`rgb: ${dominantColor3.r}, ${dominantColor3.g}, ${dominantColor3.b}`}
							</p>
						</>
					)}
				</div>
				<div>
					Dominante Color 4
					{dominantColor4 && (
						<>
							<div
								style={{
									backgroundColor: `rgba(${dominantColor4.r},${dominantColor4.g},${dominantColor4.b},${dominantColor4.a})`,
									width: 200,
									height: 200,
								}}
							/>
							<p>
								{`rgb: ${dominantColor4.r}, ${dominantColor4.g}, ${dominantColor4.b}`}
							</p>
						</>
					)}
				</div>
				<div>
					Dominante Color 5
					{dominantColor5 && (
						<>
							<div
								style={{
									backgroundColor: `rgba(${dominantColor5.r},${dominantColor5.g},${dominantColor5.b},${dominantColor5.a})`,
									width: 200,
									height: 200,
								}}
							/>
							<p>
								{`rgb: ${dominantColor5.r}, ${dominantColor5.g}, ${dominantColor5.b}`}
							</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
