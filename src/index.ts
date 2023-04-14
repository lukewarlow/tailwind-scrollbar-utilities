export function scrollbarGutter() {
	return function ({ addUtilities, addBase }) {
		addBase({
			'@defaults scrollbar-gutter': {
				'--tw-scrollbar-gutter-modifier': ''
			}
		});

		addUtilities([
			{
				'.scrollbar-gutter-auto': {
					'scrollbar-gutter': 'auto'
				},
				'.scrollbar-stable': {
					'@defaults scrollbar-gutter': {},
					'scrollbar-gutter': 'stable var(--tw-scrollbar-gutter-modifier)'
				},
				'.scrollbar-both-edges': {
					'--tw-scrollbar-gutter-modifier': 'both-edges'
				},
			}
		]);
	};
}

export function scrollbarWidth() {
	return function ({ addUtilities }) {
		addUtilities([
			{
				'.scrollbar-width-auto': {
					'scrollbar-width': 'auto',
				},
				'.scrollbar-none': {
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						'display': 'none'
					}
				},
				'.scrollbar-thin': {
					'scrollbar-width': 'thin'
				},
			}
		]);
	};
}

export function scrollbarColor() {
	return function ({ addUtilities, addBase, theme, matchUtilities, e }) {
		const themeColors = theme('colors');

		addUtilities([
			{
				'.scrollbar-color-auto': {
					'scrollbar-color': 'auto'
				},
				'.scrollbar-color': {
					'@defaults scrollbar-color': {},
					'scrollbar-color': 'var(--tw-scrollbar-thumb-color) var(--tw-scrollbar-track-color)',
				},
			},
		]);

		addBase({
			'@defaults scrollbar-color': {
				'--tw-scrollbar-thumb-color': '',
				'--tw-scrollbar-track-color': ''
			}
		});

		const scrollbarColors = Object.keys(themeColors)
			.reduce((acc, key) => {
				if (typeof themeColors[key] === 'string') {
					return {
						...acc,
						[`.scrollbar-thumb-${e(key)}`]: {
							'--tw-scrollbar-thumb-color': themeColors[key]
						},
						[`.scrollbar-track-${e(key)}`]: {
							'--tw-scrollbar-track-color': themeColors[key]
						},
					};
				}

				if (typeof themeColors[key] === 'function') {
					return {
						...acc,
						[`.scrollbar-thumb-${e(key)}`]: {
							'--tw-scrollbar-thumb-color': themeColors[key]({}),
						},
						[`.scrollbar-track-${e(key)}`]: {
							'--tw-scrollbar-track-color': themeColors[key]({})
						},
					};
				}

				const colorShades = Object.keys(themeColors[key]);

				return {
					...acc,
					...colorShades.reduce((a, shade) => ({
						...a,
						[`.scrollbar-thumb-${e(key)}-${shade}`]: {
							'--tw-scrollbar-thumb-color': themeColors[key][shade],
						},
						[`.scrollbar-track-${e(key)}-${shade}`]: {
							'--tw-scrollbar-track-color': themeColors[key][shade]
						},
					}), {}),
				};

			}, {})

		addUtilities(scrollbarColors);

		matchUtilities(
			{
				'scrollbar-thumb': (value) => ({'--tw-scrollbar-thumb-color': value}),
				'scrollbar-track': (value) => ({'--tw-scrollbar-track-color': value}),
			}
		);
	};
}
