/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 **/ 

export const siteTitle = 'Wallynm Blog'
export const siteDescription = 'Blog do Wallysson Nunes da Mota sobre desenvolvimento de software, arquitetura e frontend.'
export const siteURL = 'wallynm.dev'
export const siteLink = 'https://wallynm.dev/'
export const siteAuthor = 'Wallysson Nunes da Mota'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	},
]