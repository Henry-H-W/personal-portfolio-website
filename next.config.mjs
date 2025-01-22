/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  assetPrefix: isProd ? '/personal-portfolio-website/' : '',
  basePath: isProd ? '/personal-portfolio-website' : '',
  output: 'export'
};

export default nextConfig;
