/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,

        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'drive.usercontent.google.com',
              port: '',
              pathname: 'download?id=**',
            },
          ],
    }
};