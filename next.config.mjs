// When deploying to https://fara0000.github.io/vkr-conferencing-landing/
// the site lives under a sub-path, so the production build needs `basePath`
// and `assetPrefix`. Local `next dev` shouldn't, which is why this is gated
// on an explicit environment variable set in the GitHub Actions workflow.
const isPagesBuild = process.env.GITHUB_PAGES === 'true';
const basePath = isPagesBuild ? '/vkr-conferencing-landing' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    reactStrictMode: true,
    basePath,
    assetPrefix: basePath || undefined,
};

export default nextConfig;
