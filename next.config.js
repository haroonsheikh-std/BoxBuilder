module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://f4d5-144-48-135-89.ap.ngrok.io/:path*',
      },
    ]
  }
}
