# TailwindCSS Scrollbar Utilities Plugin

[![npm](https://img.shields.io/npm/v/tailwind-scrollbar-utilities.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-scrollbar-utilities)

This plugin generates utility classes for [`scrollbar-gutter`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter), 
[`scrollbar-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width), 
and [`scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color).

## Installation

Add to your project via:

```bash
# Install using npm
npm install -D tailwind-scrollbar-utilities

# Install using yarn
yarn add -D tailwind-scrollbar-utilities
```

Add it to the plugins array of your Tailwind config. Call the functions for the utilities you want to use.

```js
const { scrollbarGutter, scrollbarWidth, scrollbarColor } = require('tailwind-scrollbar-utilities');

plugins: [
	scrollbarGutter(), // no options to configure
	scrollbarWidth(), // no options to configure
	scrollbarColor(), // no options to configure
]
```

## Usage

### [`scrollbar-gutter`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter)

- `scrollbar-gutter-auto`: Adds `scrollbar-gutter: auto;` to the element.

- `scrollbar-gutter-stable`: Adds `scrollbar-gutter: stable;` to the element.

- `scrollbar-gutter-stable` along with `scrollbar-gutter-both-edges`: Adds `scrollbar-gutter: stable both-edges;` to the element.

### [`scrollbar-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)

- `scrollbar-width-auto`: Adds `scrollbar-width: auto;` to the element.

- `scrollbar-thin`: Adds `scrollbar-width: thin;` to the element.

- `scrollbar-none`: Adds `scrollbar-width: none;` to the element. It also adds a `::-webkit-scrollbar` fallback for better browser support.

### [`scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)

- `scrollbar-color-auto`: Adds `scrollbar-color: auto;` to the element.

- `scrollbar-thumb-{color}`: Sets the thumb color portion of the scrollbar color property. 

- `scrollbar-track-{color}`: Sets the track color portion of the scrollbar color property.

- `scrollbar-color`: Adds `scrollbar-color: {thumb-color} {track-color};` to the element. It's important to note you must set both color values for this to have any effect.

Where {color} is any available tailwind color e.g. `scrollbar-thumb-teal-900`

You can also use arbitrary values such as `scrollbar-track-[Canvas]`.

## License

This project is licensed under the [MIT License](https://github.com/lukewarlow/tailwind-scrollbar-utilities/blob/master/LICENSE).
