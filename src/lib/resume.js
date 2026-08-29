/**
 * Dados do currículo exibido no fim da home, vindos do perfil do LinkedIn.
 *
 * A seção inteira só é renderizada quando `experience` tem pelo menos um item.
 * Todo campo fora de `company`/`role` é opcional: o card não desenha a parte
 * que não tem dado.
 */
export const resume = {
	headline: 'Staff Frontend Engineer @ Hotmart',
	location: 'Belo Horizonte, MG',

	// O perfil do LinkedIn não traz um "about", então não há resumo aqui.
	// Um parágrafo curto em primeira pessoa cai bem se você quiser escrever.
	summary: '',

	links: {
		linkedin: 'https://www.linkedin.com/in/wallynm',
		github: 'https://github.com/wallynm',
		// E-mail e PDF ficam de fora por padrão — publicar endereço numa página
		// aberta é convite para spam. Preencha se quiser exibir.
		email: '',
		pdf: ''
	},

	/**
	 * Mais recente primeiro. As descrições foram traduzidas do inglês do perfil;
	 * confira se o texto ainda diz o que você quer dizer.
	 */
	experience: [
		{
			company: 'Hotmart',
			role: 'Staff Engineer',
			period: 'set 2024 — agora',
			location: 'Brasil',
			description: '',
			tags: []
		},
		{
			company: 'Tiendanube',
			role: 'Technical Lead',
			period: 'jan 2020 — jul 2024',
			location: 'Belo Horizonte, MG',
			description:
				'Como tech lead, minha responsabilidade principal era orientar e mentorar o time na migração do nosso software de Checkout, ampliando sua capacidade de integração. Um dos pontos centrais eram as aplicações de pagamento de terceiros, o que exigiu construir uma plataforma robusta e duradoura.',
			tags: []
		},
		{
			company: 'Tiendanube',
			role: 'Sr. Frontend Manager',
			period: 'nov 2018 — fev 2021',
			location: 'Belo Horizonte, MG',
			description: '',
			tags: []
		},
		{
			company: 'Tiendanube',
			role: 'Sr. Frontend Engineer',
			period: 'jul 2018 — nov 2018',
			location: 'Belo Horizonte, MG',
			description: '',
			tags: []
		},
		{
			company: 'Hotmart',
			role: 'Pl. Frontend Engineer',
			period: 'ago 2016 — jul 2018',
			location: 'Belo Horizonte, MG',
			description:
				'Liderei um time de 16 desenvolvedores, sendo 5 de frontend, como lead frontend engineer — responsável pelos deploys de arquivos estáticos e pelas melhorias de UI/UX nos nossos sistemas. Reconstruí vários projetos como single-page applications, com foco em melhorar a experiência do usuário.',
			tags: []
		},
		{
			company: 'iSET Internet Soluções e Tecnologia',
			role: 'Software Engineer',
			period: 'jul 2012 — ago 2016',
			location: 'Belo Horizonte, MG',
			description:
				'Construí duas aplicações em produção seguindo as melhores práticas de frontend da época. Usando Backbone.js como framework base, chegamos a uma arquitetura sólida e reaproveitável.',
			tags: ['Backbone.js']
		},
		{
			company: 'Solides',
			role: 'Software Engineer Intern',
			period: '2009 — 2011',
			location: 'Belo Horizonte, MG',
			description: '',
			tags: []
		}
	],

	education: [
		{
			school: 'Universidade FUMEC',
			degree: 'Ciências da Computação',
			period: '2016 — 2017'
		},
		{
			school: 'Pontifícia Universidade Católica de Minas Gerais',
			degree: 'Sistemas de Informação',
			period: '2011'
		}
	],

	// As "Top Skills" do perfil. Adicione mais grupos se quiser detalhar.
	skills: [{ group: 'Principais', items: ['Next.js', 'NestJS', 'React'] }],

	languages: [
		{ name: 'Português', level: 'Nativo' },
		{ name: 'Inglês', level: 'Fluente' },
		{ name: 'Espanhol', level: 'Profissional' }
	]
}
