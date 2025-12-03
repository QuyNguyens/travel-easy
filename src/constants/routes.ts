export const ROUTES = {
  home: '/',
  aboutUs: '/about-us',
  destinations: '/destinations',
  services: '/services',
  trip: '/trip',
  pages: '/pages',
  blog: '/blog',
  contactUs: '/contact-us',
};

export const HEADER = [
  {
    name: 'Home',
    route: ROUTES.aboutUs,
    icon: true,
  },
  {
    name: 'About Us',
    route: ROUTES.aboutUs,
    icon: false,
  },
  {
    name: 'Destinations',
    route: ROUTES.destinations,
    icon: true,
  },
  {
    name: 'Services',
    route: ROUTES.services,
    icon: false,
  },
  {
    name: 'Trip',
    route: ROUTES.trip,
    icon: true,
  },
  {
    name: 'Pages',
    route: ROUTES.pages,
    icon: true,
  },
  {
    name: 'Blog',
    route: ROUTES.blog,
    icon: true,
  },
  {
    name: 'Contact Us',
    route: ROUTES.contactUs,
    icon: false,
  },
];
