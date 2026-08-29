/**
 * Projects shown on the home page, newest first. The home section renders the
 * first three.
 *
 * `image` is a path under static/images/projetos/. A project with no image
 * renders a styled placeholder instead of a broken one, so it is safe to add a
 * project before you have a screenshot for it.
 *
 * `imageLight` is optional: when set, `image` is used in dark mode and this one
 * in light. Only worth it when the captured product has both themes.
 *
 * Recommended screenshot: 16:9, at least 1200px wide. WebP keeps these well
 * under 60KB each.
 */
export const projects = [
	{
		name: 'Tessel',
		description:
			'Plataforma de IA em SaaS para storytelling de RPG de mesa: transcreve e resume as sessões, rastreia NPCs e eventos, e responde perguntas sobre a lore da campanha.',
		url: 'https://www.tessel.app/br/',
		repo: '',
		tags: ['IA', 'SaaS', 'RPG'],
		image: '/images/projetos/tessel.webp',
		// O site do Tessel tem tema claro e escuro; o card acompanha o do blog.
		imageLight: '/images/projetos/tessel-light.webp'
	},
	{
		name: 'Cluvia',
		description:
			'Jogo de puzzle diário em 3D: encontre os itens roubados escondidos numa cidade isométrica, com um conjunto novo a cada dia.',
		url: 'https://cluvia.app',
		repo: '',
		tags: ['Three.js', 'React Three Fiber'],
		image: '/images/projetos/cluvia.webp'
	},
	{
		name: 'Daimon',
		description:
			'Engine de simulação escrita em Rust, sem domínio embutido: necessidades, ações e entidades são registradas em runtime. Tem ports para web e para a Godot.',
		url: '',
		// O repositório é privado; sem link enquanto for.
		repo: '',
		tags: ['Rust', 'Godot', 'Web'],
		image: '/images/projetos/daimon.webp'
	}
]
