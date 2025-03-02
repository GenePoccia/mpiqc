module.exports = {
	theme: {
		extend: {
		  screens: {
			xs: '480px', // You can change 480px to whatever you want for your `xs` breakpoint
		  },
		  colors: {
			'carousel-background-grey': 'rgba(82, 82, 82, 1)',
		  },
		},
	  },
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};
