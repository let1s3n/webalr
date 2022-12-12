
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
  },
  defaultNS: 'general',
  fallbackLng: {
    default: ['es']
  },
}


//import the default class contructor from the package
/* const NextI18Next = require('next-i18next').default
const path = require('path')
module.exports = new NextI18Next({
  defaultLanguage: 'es',
  otherLanguages: ['en,fr'],
  defaultNS: 'general',
  localePath: path.resolve('./public/static/locales')
}) */