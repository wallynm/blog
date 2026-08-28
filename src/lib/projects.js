/**
 * Projects shown on the home page, newest first. The home section renders the
 * first three.
 *
 * `image` is a path under static/images/projetos/. A project with no image
 * renders a styled placeholder instead of a broken one, so it is safe to add a
 * project before you have a screenshot for it.
 *
 * Recommended screenshot: 16:9, at least 1200px wide, .jpg or .png.
 */
export const projects = [
	{
		name: 'Cluvia',
		// TODO: uma linha sobre o que o Cluvia faz.
		description: '',
		url: 'https://cluvia.app',
		repo: '',
		tags: [],
		// Solte o arquivo em static/images/projetos/ e aponte aqui:
		image: '' // '/images/projetos/cluvia.jpg'
	},
	{
		name: 'Tessel',
		// TODO: uma linha sobre o que o Tessel faz.
		description: '',
		url: '',
		repo: '',
		tags: [],
		image: '' // '/images/projetos/tessel.jpg'
	},
	{
		name: 'Daimon',
		description: 'Game engine.',
		url: '',
		repo: '',
		tags: ['game engine'],
		image: '' // '/images/projetos/daimon.jpg'
	}
]
