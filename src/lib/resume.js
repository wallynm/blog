/**
 * Dados do currículo exibido no fim da home.
 *
 * A seção inteira só é renderizada quando `experience` tem pelo menos um item —
 * até lá a home termina nos posts, sem faixa vazia no ar.
 *
 * Todo campo fora de `company`/`role` é opcional: o card não desenha a parte
 * que não tem dado.
 */
export const resume = {
	headline: 'Desenvolvedor de software',

	// Um parágrafo curto, em primeira pessoa.
	summary: '',

	links: {
		linkedin: 'https://www.linkedin.com/in/wallynm',
		github: 'https://github.com/wallynm',
		// PDF opcional em static/ — ex.: '/curriculo.pdf'
		pdf: ''
	},

	/**
	 * Mais recente primeiro.
	 * { company, role, period, location, description, tags }
	 *
	 * Exemplo do formato:
	 * {
	 *   company: 'Nome da empresa',
	 *   role: 'Cargo',
	 *   period: '2023 — agora',
	 *   location: 'Remoto',
	 *   description: 'O que você fez lá, em uma ou duas linhas.',
	 *   tags: ['React', 'Node']
	 * }
	 */
	experience: [],

	/** { school, degree, period } */
	education: [],

	/** { group, items } — ex.: { group: 'Frontend', items: ['React', 'Svelte'] } */
	skills: []
}
