/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/accueil',
                permanent: true,
            },
        ];
    },
    reactStrictMode: false,
    images: {
        domains: ['localhost','back.domi.com']
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
