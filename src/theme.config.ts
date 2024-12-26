import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://iitbhucybersec.in',
  title: 'IIT(BHU)CyberSec',
  description: 'Academic CTF Team of IIT(BHU) Varanasi',
  author: 'IIT(BHU)CyberSec',
  navbarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    {
      label: 'Other Stuff',
      children: [
        { label: 'Achievements', href: '/achievements' },
        { label: 'Members', href: '/members' },
        { label: 'Resources', href: '/resources' },
        { label: 'Events', href: '/events' },
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/IIT-BHU-CyberSec',
      label: 'Github'
    },
    {
      icon: 'tabler--brand-linkedin',
      href: 'https://in.linkedin.com/company/iit-bhu-cybersec',
      label: 'LinkedIn'
    },
    {
      icon: 'tabler--brand-x',
      href: '#',
      label: 'Twitter'
    },
    {
      icon: 'tabler--brand-instagram',
      href: '#',
      label: 'Instagram'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  postsPerPage: 3,
  projectsPerPage: 2,
  achievementsPerPage: 4,
  memberRowsPerPage: 4,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
