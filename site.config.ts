// Site Infomation
const siteData = {
  root: 'src',
  locale: 'es',
  siteName: 'Amanda',
  shortName: 'Amanda',
  description: 'Un asistente digital de salud que simplifica la ruta del paciente.',
  url: 'https://amanda-care.com',
  ogpImage: 'ogp.jpg',
  ogType: 'website',
  fbAppId: '',
  fbAdmins: '',
  twitterCard: '',
  twitterSite: '',
  themeColor: '#FFA800',
  backgroundColor: '#fff',
};

// Page Infomation
const pagesData = {
  '/index.html': {
    locale: siteData.locale,
    title: `${siteData.siteName}`,
    description: `${siteData.description}`,
    url: `${siteData.url}`,
    ogpImage: siteData.ogpImage,
    ogType: siteData.ogType,
    fbAppId: siteData.fbAppId,
    fbAdmins: siteData.fbAdmins,
    twitterCard: siteData.twitterCard,
    twitterSite: siteData.twitterSite,
  },
};

export { siteData, pagesData };
