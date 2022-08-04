/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import * as htmlToImage from "html-to-image";
import { ColorExtractor } from "react-color-extractor";
import { normal } from "color-blend";

const App = () => {
	const webcamRef = React.useRef(null);
	const [imgSrc, setImgSrc] = React.useState(null);
	const [testImage, setTestImage] = React.useState(null);
	const [resColor, setresColor] = React.useState([]);
	const [dominantColor, setDominantColor] = React.useState("");

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot({
			width: 300,
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

	const getColor = (color) => {
		if (color) {
			const rgb = color.map((c) => {
				const obj = {
					...hexToRgb(c),
					a: 1,
				};

				return obj;
			});

			setresColor(rgb);
		}
	};

	useEffect(() => {
		htmlToImage
			.toJpeg(document.getElementById("canvas"), { quality: 0.95 })
			.then(function (dataUrl) {
				setTestImage(dataUrl);
			});
	}, [imgSrc]);

	useEffect(() => {
		if (resColor.length !== 0) {
			setDominantColor(
				normal(
					resColor[0],
					resColor[1],
					resColor[2],
					resColor[3],
					resColor[4],
					resColor[5]
				)
			);
		}
	}, [resColor]);

	return (
		<>
			<div style={{ position: "relative" }}>
				<Webcam
					audio={false}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					videoConstraints={{ width: 300, height: 450 }}
				/>
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
						paddingLeft: 80,
						paddingTop: 20,
					}}
				>
					<div style={{ border: "2px solid white", width: 200, height: 500 }}>
						<div
							style={{
								backgroundColor: "transparent",
								width: 200,
								height: 6,
								marginTop: 120,
							}}
						/>
						<div
							style={{
								backgroundColor: "white",
								width: 200,
								height: 6,
								marginTop: 90,
							}}
						/>
					</div>
				</div>
			</div>
			<div style={{ marginTop: 100 }}>
				<button onClick={capture}>Capture photo</button>
			</div>
			<div style={{ marginTop: 100, columnGap: 16 }}>
				{imgSrc && (
					<div
						id="canvas"
						style={{ width: 40, height: 20, overflow: "hidden" }}
					>
						<img
							src={imgSrc}
							style={{ width: 400, height: 300, margin: "-150px 0 0 -220px" }}
						/>
					</div>
				)}
			</div>

			{testImage && (
				<div>
					test image
					<ColorExtractor
						src={testImage}
						getColors={(color) => getColor(color)}
					/>
				</div>
			)}
			<div style={{ display: "flex", columnGap: 16, marginTop: 60 }}>
				{resColor.map((color) => (
					<div style={{ backgroundColor: color, width: 50, height: 50 }} />
				))}
			</div>

			<div>
				Dominante Color
				<div
					style={{
						backgroundColor: `rgba(${dominantColor.r},${dominantColor.g},${dominantColor.b},${dominantColor.a})`,
						width: 200,
						height: 200,
					}}
				/>
			</div>
		</>
	);
};

export default App;
