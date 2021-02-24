import React from 'react';

const alphanumericColors = {
	black: 0x00,
	red: 0x01,
	green: 0x02,
	yellow: 0x03,
	blue: 0x04,
	magenta: 0x05,
	cyan: 0x06,
	white: 0x07,
};

const mosaicColors = {
	black: 0x10,
	red: 0x11,
	green: 0x12,
	yellow: 0x13,
	blue: 0x14,
	magenta: 0x15,
	cyan: 0x16,
	white: 0x17,
};

const CONTIGUOUS_MOSAICS = 0x19;
const SEPARATED_MOSAICS = 0x1a;

export const TeletextPage = function ({ children }) {
	return chilren;
};

export const Header = function () {
	return children;
};

export const Character = function () {
	return null;
};

export const String = function () {
	return null;
};

export const Text = function ({ bgColor, fgColor, children }) {
	return (
		<>
			<Character character={alphanumericColors(fgColor)} />
			<String string={children} />
		</>
	);
};

export const Mosaic = function ({ bgColor, fgColor, children }) {
	return (
		<>
			<Character character={CONTIGUOUS_MOSAICS}></Character>
			<Character character={mosaicColors(fgColor)} />
			{children}
		</>
	);
};

export const render = function (reactElements, canvas) {
	reactElements;
};
