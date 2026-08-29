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
		description:
			'Jogo de puzzle diário: encontre os itens roubados espalhados por uma cidade isométrica, um conjunto novo a cada dia.',
		url: 'https://cluvia.app',
		repo: '',
		tags: ['jogo', 'puzzle'],
		// Solte o arquivo em static/images/projetos/ e aponte aqui:
		image: '' // '/images/projetos/cluvia.jpg'
	},
	{
		name: 'Tessel',
		description:
			'Documentação de sessões de RPG com IA: transcreve, resume, rastreia NPCs e eventos, e responde perguntas sobre a lore da campanha.',
		url: 'https://www.tessel.app/br/',
		repo: '',
		tags: ['IA', 'RPG'],
		image: '' // '/images/projetos/tessel.jpg'
	},
	{
		name: 'Daimon',
		description:
			'Engine de simulação em Rust, sem domínio embutido: necessidades, ações e entidades são registradas em runtime, então o mesmo binário roda de um ecossistema de floresta a uma cozinha cooperativa.',
		url: '',
		// O repositório é privado; sem link enquanto for.
		repo: '',
		tags: ['Rust', 'simulação'],
		image: '' // '/images/projetos/daimon.jpg'
	}
]
