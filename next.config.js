const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.freepik.com', 'www.w3schools.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
