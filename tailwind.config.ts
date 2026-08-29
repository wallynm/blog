import type { Config } from 'tailwindcss'

/** Resolves a token from app.css, keeping Tailwind's opacity modifiers working. */
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`

export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	darkMode: 'selector',
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			colors: {
				canvas: token('canvas'),
				surface: token('surface'),
				border: token('border'),
				text: token('text'),
				muted: token('muted'),
				faint: token('faint'),
				accent: {
					DEFAULT: token('accent'),
					soft: token('accent-soft')
				},
				// #E63946 itself: fills and focus rings, never small text.
				brand: token('brand'),
				'on-brand': token('on-brand'),
				ring: token('ring')
			},
			fontFamily: {
				// Headings. Variable, with real character in the letterforms.
				display: [
					'Bricolage Grotesque Variable',
					'ui-sans-serif',
					'system-ui',
					'Segoe UI',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				],
				// Body copy, and the code face — both carried over from the
				// original theme's font stack.
				sans: [
					'Work Sans Variable',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				],
				mono: [
					'JetBrains Mono Variable',
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Consolas',
					'monospace'
				]
			},
			maxWidth: {
				content: '48rem',
				wide: '64rem'
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': 'rgb(var(--color-muted))',
						'--tw-prose-headings': 'rgb(var(--color-text))',
						'--tw-prose-lead': 'rgb(var(--color-muted))',
						'--tw-prose-links': 'rgb(var(--color-accent))',
						'--tw-prose-bold': 'rgb(var(--color-text))',
						'--tw-prose-counters': 'rgb(var(--color-faint))',
						'--tw-prose-bullets': 'rgb(var(--color-border))',
						'--tw-prose-hr': 'rgb(var(--color-border))',
						'--tw-prose-quotes': 'rgb(var(--color-text))',
						'--tw-prose-quote-borders': 'rgb(var(--color-brand))',
						'--tw-prose-captions': 'rgb(var(--color-faint))',
						'--tw-prose-code': 'rgb(var(--color-text))',
						'--tw-prose-th-borders': 'rgb(var(--color-border))',
						'--tw-prose-td-borders': 'rgb(var(--color-border))',
						maxWidth: 'none',
						a: {
							fontWeight: '600',
							textDecorationThickness: '1px',
							textUnderlineOffset: '0.2em'
						},
						// Prism paints its own colours; leave the block alone and
						// only handle the chrome around it.
						pre: {
							backgroundColor: 'rgb(var(--color-surface))',
							border: '1px solid rgb(var(--color-border))',
							borderRadius: '0.5rem'
						},
						'code::before': { content: 'none' },
						'code::after': { content: 'none' },
						':not(pre) > code': {
							// Prism only styles code[class*='language-'], which inline
							// code never has, so it needs the mono face set here.
							fontFamily: theme('fontFamily.mono').join(', '),
							fontSize: '0.875em',
							backgroundColor: 'rgb(var(--color-accent-soft))',
							borderRadius: '0.25rem',
							padding: '0.15em 0.35em',
							fontWeight: '400'
						}
					}
				}
			})
		}
	}
} satisfies Config
