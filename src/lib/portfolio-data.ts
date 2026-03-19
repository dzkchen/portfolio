import bgOne from '$lib/assets/bg_one.jpeg';
import bgTwo from '$lib/assets/bg_two.jpeg';
import bgThree from '$lib/assets/bg_three.jpeg';
import gwlLogo from '$lib/assets/GWL_logo.png';
import mpsLogo from '$lib/assets/MPS_Logo.png';
import sacLogo from '$lib/assets/SAC_logo.png';
import decaLogo from '$lib/assets/DECA_logo.jpeg';
import tuckshopLogo from '$lib/assets/tuckshop_logo.png';
import knxLogo from '$lib/assets/KNX_logo.png';
import pokepathImage from '$lib/assets/pokepath_image.jpg';
import jfProfileImage from '$lib/assets/project_jf_profile.png';
import sacImage from '$lib/assets/project_sac.png';
import groundworkImage from '$lib/assets/groundwork_image.png';
import portfolioImage from '$lib/assets/portfolio_image.png';
import stockImage from '$lib/assets/stock_image.png';
import resumePdf from '$lib/assets/David_Chen_resume.pdf';

export { bgOne, bgTwo, bgThree };

export const typewriterText = 'Hey There!';
export const PAUSE_MS = 2500;

export const navLinks = [
	{ label: 'Home', href: '#home' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Resume', href: resumePdf, external: true }
];

export const professional = [
	{
		title: 'Freight Forwarder Internship',
		org: 'Great Worldwide Logistics',
		when: 'Summer 2025',
		logo: gwlLogo
	},
	{ title: 'Piano Tutor', org: 'Mississauga Piano School', when: '2023 - present', logo: mpsLogo }
];

export const extracurriculars = [
	{
		title: 'Student Council | Vice President',
		desc: '',
		logo: sacLogo
	},
	{ title: 'DECA | Competitor', desc: '3x award winner', logo: decaLogo },
	{
		title: 'Tuck Shop | Founder & President',
		desc: '',
		logo: tuckshopLogo
	},
	{ title: 'KNX Senior Association | English Tutor', desc: '', logo: knxLogo }
];

export const projects = [
	{
		name: 'JF 26 Seniors',
		description:
			'Graduating class profile. A survey form to collect data about our g12 class to be visualized through chart.js, form + auth system using next.js and firebase/firestore',
		tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'motion.dev'],
		repo: 'https://github.com/dzkchen/jf-26-seniors',
		image: jfProfileImage,
		imagePosition: 'center' as const
	},
	{
		name: 'John Fraser SAC',
		description:
			'Maintaining website by updating data constants and updating events, and refactoring code.',
		tech: ['Next.js', 'GSAP', 'Tailwind CSS'],
		repo: 'https://github.com/JohnfraserSAC/johnfrasersac',
		url: 'https://www.johnfrasersac.com/',
		image: sacImage
	},
	{
		name: 'Ground Work',
		description:
			'Hack Canada Project 2026: A Blockchain solution for your FHSA. A decentralized application (dApp) designed to incentivize users to actively contribute to their FHSA. By leveraging the speed and low fees of the Solana blockchain, users stake USDC in a shared pool alongside a group of others.',
		tech: ['Firebase', 'Rust', 'Solana', 'Next.js', 'Plaid API'],
		repo: 'https://github.com/dzkchen/groundwork',
		image: groundworkImage,
		imagePosition: 'center' as const
	},
	{
		name: 'Portfolio',
		description:
			'You\'re looking at it! A single-page portfolio built with a mobile-first design principles.',
		tech: ['SvelteKit', 'Svelte 5', 'Tailwind CSS'],
		repo: 'https://github.com/dzkchen/portfolio',
		image: portfolioImage
	},
	{
		name: 'Stock Analysis Proof of Concept',
		description:
			'A proof of concept for a stock analysis tool. Using newsapi and scraping reddit articles fed into gemini api for sentiment analysis and then using yfinance to get stock data and display it in a chart.',
		tech: ['Python', 'Pandas', 'newsapi', 'gemini-api', 'streamlit', 'yfinance'],
		repo: 'https://github.com/dzkchen/stock-analyzer-proof-of-concept',
		image: stockImage
	}
];
