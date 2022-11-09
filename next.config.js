/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
  nextConfig,

  env: {
    MONGO_URI: 'mongodb+srv://chxwcodes:9G6hY2BD2QxYfhyD@todoapp.62uu0r8.mongodb.net/?retryWrites=true&w=majority'
  }
}
