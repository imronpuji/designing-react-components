/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id', 'en-MY', 'en-SG', 'id-ID'],
    defaultLocale: 'en'
  },
}

module.exports = nextConfig
